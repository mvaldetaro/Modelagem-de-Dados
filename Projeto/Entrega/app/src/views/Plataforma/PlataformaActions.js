import axios from "axios";
import WP from "../../core/WP";

function mapPlataforma(obj) {
  return {
    id: obj.id,
    slug: obj.slug,
    thumbnail: obj.better_featured_image.media_details.sizes.thumbnail.source_url,
    title: obj.title.rendered,
    excerpt: obj.excerpt.rendered,
    content: obj.content.rendered,
    dt_lancamento: obj.acf.datas_de_lancamento,
    fabricante: obj.acf.fabricante,
    desenvolvedores: obj.acf.desenvolvedores,
    geracao: obj.acf.geracao.name,
    nome_alternativo: obj.acf.nome_alternativo,
    tipo_plataforma: obj.acf.tipo_plataforma,
    familia_produto: obj.acf.familia_produto,
    preco_de_lancamento: obj.acf.preco_de_lancamento,
    so: obj.acf.sistema_operacional,
    cpu: obj.acf.cpu,
    memoria: obj.acf.memoria,
    armazenamento: obj.acf.armazenamento,
    video: obj.acf.video,
    som: obj.acf.som,
    servico_online: obj.acf.servico_online,
    saidas: obj.acf.saidas,
    resolucoes: obj.acf.resolucoes_suportadas,
    conectividade: obj.acf.conectividade,
    qtd_unidades_vendidas: obj.acf.qtd_unidades_vendidas
  }
}

export function getPlataforma(slug) {
  return function (dispatch) {
    const request = axios.get(WP.url + WP.types.plataformas, {
      params: {
        slug: slug
      }
    })

    request.then(resp => {
      dispatch({
        type: 'GET_CURRENT_PLATAFORMA',
        payload: resp
          .data
          .map(mapPlataforma)[0]
      })
    })
  }
}