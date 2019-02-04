import axios from "axios";
import WP from "../../core/WP";

function mapCategory(data) {
  return {id: data.id, slug: data.slug, name: data.name}
}

export function retrieveTaxonomies(taxonomie, reducerType) {

  return function (dispatch) {
    const request = axios.get(WP.url + WP.types[taxonomie], {
      params: {
        per_page: 100
      }
    })
    request.then(resp => {
      dispatch({
        type: reducerType,
        payload: resp
          .data
          .map(mapCategory)
      })
    })
  }
}