import React, { Component } from "react";
import Classificacao from "./Classificacao";

import { Typography } from "@material-ui/core";

class Classificacoes extends Component {
  mapClassificacoes(arr) {
    let map = arr.map((current, i) => ({
      image_src: current.selo.better_featured_image.source_url,
      alt: current.selo.alt_text,
      title: current.selo.title.rendered
    }));
    return map;
  }

  render() {
    return (
      <div className={"classificacoes"}>
        <Typography className={"resumeTitle"} variant={"title"} gutterBottom>
          Classificação
        </Typography>
        {this.props.data ? (
          <ul>
            {this.mapClassificacoes(this.props.data).map((currentSelo, i) => (
              <li key={i}>
                <Classificacao currentselo={currentSelo} />
              </li>
            ))}
          </ul>
        ) : (
          "Nenhuma classificação encontrada"
        )}
      </div>
    );
  }
}

export default Classificacoes;
