import axios from "axios";
import WP from "../../core/WP";

function mapRecent(data) {
  return {
    id: data.id,
    slug: data.slug,
    link: data.link,
    thumbnail:
      data.better_featured_image === null
        ? ""
        : data.better_featured_image.media_details.sizes.thumbnail.source_url,
    title: data.title.rendered,
    excerpt: data.excerpt.rendered,
    categories: data.categories
  };
}

export function getCategoryName(id, arr) {
  let name = "";
  arr.map((item, i) => {
    item.id === id ? item.name : false;
  });

  return name;
}

function mapGame(game) {
  return {
    id: game.id,
    slug: game.slug,
    thumbnail:
      game.better_featured_image.media_details.sizes.vgcserviceThumbnailGrid
        .source_url,
    title: game.title.rendered,
    excerpt: game.excerpt.rendered,
    plataforma: game.plataforma,
    //game.plataforma,
    cover: game.acf.cover,
    desenvolvedora: game.acf.desenvolvedores[0].desenvolvedor.title.rendered,
    lancamento: game.acf.datas_plataforma[0].data_lancamento
  };
}

function mapCategory(data) {
  return { id: data.id, slug: data.slug, name: data.name };
}

export function getCategory(data) {
  let category = "x";

  if (data !== "") {
    const request = axios.get(WP.url + WP.types.plataforma + "/" + data, {});

    request.then(resp => {
      category = mapCategory(resp.data);
      console.log(category.name);
      return category.name;
    });
  } else {
    console.log("erro");
    return category;
  }
}

export function getCategories(data) {
  let categories = [];

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      const request = axios.get(
        WP.url + WP.types.plataforma + "/" + data[i],
        {}
      );
      request.then(resp => {
        categories.push(mapCategory(resp.data));
        return categories;
      });
    }

    return categories;
  } else {
    return [];
  }
}

export function getRecentsPostsByCategoryId(categories_id, typename) {
  return function(dispatch) {
    const request = axios.get(WP.url + WP.types.posts, {
      params: {
        categories: categories_id,
        per_page: 8
      }
    });

    request.then(resp => {
      dispatch({
        type: typename,
        payload: resp.data.map(mapRecent)
      });
    });
  };
}

export function getGames() {
  return function(dispatch) {
    const request = axios.get(WP.url + WP.types.games, {
      params: {
        per_page: 6
      }
    });

    request.then(resp => {
      dispatch({
        type: "RECENT_HERO",
        payload: [resp.data.map(mapGame)[0]]
      });

      dispatch({
        type: "RECENT_GAMES",
        payload: resp.data.map(mapGame)
      });
    });
  };
}
