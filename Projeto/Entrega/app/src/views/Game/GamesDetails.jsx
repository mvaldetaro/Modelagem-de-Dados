import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {getGame} from "./GameDetailsActions";

import {Typography, Grid, Button, Divider} from "@material-ui/core";

import {
  Cover,
  Reviews,
  Screenshots,
  Videos,
  Podcasts,
  Publishers,
  Lancamentos,
  Plataformas,
  Revistas,
  Resume,
  Developers,
  Classificacoes,
  Pessoas
} from "../../componentes";

import {Utils as Html} from "../../componentes";

class GameDetails extends Component {
  componentDidMount() {
    this
      .props
      .getGame(this.props.match.params.slug);
  }

  getCategoryName(id, arr) {
    let name = [];
    arr.map((item, i) => {
      if (item.id === id) {
        name.push(item.name);
      }
    });
    return name.join();
  }

  render() {
    const {
      title,
      content,
      plataforma,
      capa,
      cover,
      excerpt,
      thumbnail,
      lancamento,
      lancamentos,
      desenvolvedoras,
      desenvolvedora,
      publicadoras,
      podcasts,
      reviews,
      revistas,
      screenshots,
      storyline,
      videos,
      wikipedia,
      franquia,
      nomes_alternativos,
      classificacao,
      creditos,
      ano_lancamento,
      plataformas,
      categories
    } = this.props.currentGame;

    return (
      <section className="game-details">
        {/* Hero */}
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
          id="hero">
          <Grid item xs={12} style={{
            width: '100%'
          }}>
            <section className="hero">
              <div
                style={{
                background: `url(${cover}) no-repeat center center`
              }}>
                <div className={"current"}>
                  <div className={"capa"}>
                    <Cover src={capa} alt={title} width={"200px"}/>
                  </div>

                  <div className="descGroup">
                    <Typography variant={"caption"} className="plataformas">
                      {plataforma
                        ? plataforma.map((item, i) => (
                          <span key={i} className="plataformaItem">
                            {this.getCategoryName(item, this.props.plataformas)}
                          </span>
                        ))
                        : false}
                    </Typography>
                    <Typography variant={"display3"} className="title">
                      {title}
                    </Typography>
                    <Typography variant={"body2"}>{`${desenvolvedora} | ${lancamento}`}</Typography>

                    <Typography variant={"body2"}>
                      <Html className="description" html={content}/>{" "} {/*<Button>Comprar</Button>*/}
                    </Typography>
                  </div>
                </div>
              </div>
            </section>
          </Grid>
        </Grid>

        {/* Content */}
        <div className={"hackContainer"}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={40}>
            <Grid item xs={12} sm={8}>
              {storyline
                ? (<Resume
                  title={"Storyline"}
                  content={storyline}
                  fonte={{
                  url: wikipedia,
                  title: "Wikipedia"
                }}/>)
                : ("")}

              {screenshots
                ? <Screenshots data={screenshots}/>
                : ""}

              {reviews
                ? <Reviews data={reviews}/>
                : ""}

              {podcasts
                ? <Podcasts data={podcasts}/>
                : ""}

              {videos
                ? <Videos data={videos}/>
                : ""}

              {revistas
                ? <Revistas data={revistas}/>
                : ""}
            </Grid>

            {/* aside */}
            <Grid item xs={12} sm={4}>
              {/* aside */}
              {franquia
                ? (
                  <div>
                    <Resume titlevariant="title" title="Franquia:" content={franquia}/>
                    <br/>
                  </div>
                )
                : ("")}

              {/* nomes alternativo */}
              {nomes_alternativos
                ? (
                  <div>
                    <Resume
                      titlevariant="title"
                      title="Nomes alternativos:"
                      content={nomes_alternativos}/>
                    <br/>
                  </div>
                )
                : ("")}

              {/* publicadoras */}

              {publicadoras
                ? <Publishers data={publicadoras}/>
                : ""}

              {/* desenvolvedoras */}
              {publicadoras
                ? <Developers data={desenvolvedoras}/>
                : ""}

              {/* lancamentos */}
              {lancamentos
                ? <Lancamentos data={lancamentos}/>
                : ""}

              {/* classificao */}
              {classificacao
                ? <Classificacoes data={classificacao}/>
                : ""}

              {/* pessoas */}
              {creditos
                ? <Pessoas data={creditos}/>
                : ""}
            </Grid>
          </Grid>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {route: state.gameSelected.route, currentGame: state.gameSelected.currentGame, plataformas: state.taxonomies.plataformas, generos: state.taxonomies.generos, release: state.taxonomies.release};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getGame
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
