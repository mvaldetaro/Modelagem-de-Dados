import axios from "axios";
import WP from "../../core/WP";

function mapGame(game) {
  return {
    id: game.id,
    slug: game.slug,
    thumbnail: game.better_featured_image.media_details.sizes.vgcserviceThumbnailGridLg.source_url,
    title: game.title.rendered,
    excerpt: game.excerpt.rendered,
    plataforma: game.plataforma,
    desenvolvedora: game.acf.desenvolvedores[0].desenvolvedor.title.rendered,
    lancamento: game.acf.datas_plataforma[0].data_lancamento
  }
}

function mapCategory(data) {
  return {id: data.id, slug: data.slug, name: data.name}
}

/*export function getGames(query) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.games, {
      params: {
        search: query
      }
    })

    request.then(resp => {
      dispatch({
        type: 'GET_GAME',
        payload: resp
          .data
          .map(mapGame)
      })
    })
  }
}*/

export function getGames(obj) {

  return function (dispatch) {

    const request = axios.get(WP.url + WP.types.games, {params: obj})

    request.then(resp => {
      dispatch({
        type: 'GET_GAME',
        payload: resp
          .data
          .map(mapGame)
      })
    })
  }
}

export function getCategories(parent, type) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.categories, {
      params: {
        parent: parent,
        per_page: 100
      }
    })

    request.then(resp => {
      dispatch({
        type: type,
        payload: resp
          .data
          .map(mapCategory)
      })
    })
  }
}
