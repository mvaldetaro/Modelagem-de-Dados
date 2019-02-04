export default {

  url : 'http://54.232.226.251/service/wp-json/wp/v2/',

  types : {
    posts: 'posts',
    categories: 'categories',
    plataforma: 'plataforma',
    genero: 'genero',
    release: 'release',
    tags: 'tags',
    pages: 'page',
    attachment: 'attachment',
    manuais: 'manuais',
    revistas: 'revistas',
    emuladores: 'emuladores',
    calendario: 'calendario',
    eventos: 'eventos',
    consoles: 'consoles',
    plataformas: 'plataformas',
    empresas: 'empresas',
    games: 'games'
  },

  getContentByType(type) {
    //let endpoint = this.url + this.types[type]; var res = [];

    /*axios
      .get(endpoint)
      .then(function (response) {
        // handle success
        console.log(response.data);
        return response.data;

      })
      .catch(function (error) {
        // handle error console.log(error);
        console.log(error);
      });*/
  }

}
