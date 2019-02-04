import axios from "axios";
import WP from "../../core/WP";

function mapGame(game) {
  return {
    id: game.id,
    slug: game.slug,
    thumbnail: game.better_featured_image.media_details.sizes.thumbnail.source_url,
    capa: game.better_featured_image.media_details.sizes.vgcserviceFeatured.source_url,
    cover: game.acf.cover,
    title: game.title.rendered,
    excerpt: game.excerpt.rendered,
    content: game.content.rendered,
    desenvolvedora: game.acf.desenvolvedores[0].desenvolvedor.title.rendered,
    lancamento: game.acf.datas_plataforma[0].data_lancamento,
    plataforma: game.plataforma,
    plataformas: game.acf.datas_plataforma,
    lancamentos: game.acf.datas_plataforma,
    desenvolvedoras: game.acf.desenvolvedores,
    publicadoras: game.acf.publicadoras,
    podcasts: game.acf.podcasts,
    reviews: game.acf.reviews,
    revistas: game.acf.revistas_relacionadas,
    screenshots: game.acf.screenshots,
    storyline: game.acf.storyline,
    videos: game.acf.videos,
    wikipedia: game.acf.wikipedia_page,
    franquia: game.acf.franquia,
    nomes_alternativos: game.acf.nomes_alternativos,
    classificacao: game.acf.classificacao_etaria,
    creditos: game.acf.creditos,
    ano_lancamento: game.acf.ano_de_lancamento,
    categories: game.categories
  }
}

export function getGame(slug) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.games, {
      params: {
        slug: slug
      }
    })

    request.then(resp => {
      dispatch({
        type: 'GET_CURRENT_GAME',
        payload: resp
          .data
          .map(mapGame)[0]
      })
    })
  }
}