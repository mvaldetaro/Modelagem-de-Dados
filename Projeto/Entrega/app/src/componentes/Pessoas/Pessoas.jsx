import React, { Component } from "react";
import Pessoa from "./Pessoa";

import { Typography } from "@material-ui/core";

class Pessoas extends Component {
  mapPessoas(arr) {
    let map = arr.map((current, i) => ({
      slug: current.pessoa.slug,
      type: current.pessoa.type,
      title: current.pessoa.title.rendered,
      funcao: current.funcao
    }));
    return map;
  }

  render() {
    return (
      <div className={"creditos"}>
        <Typography className={"resumeTitle"} variant={"title"} gutterBottom>
          Créditos
        </Typography>

        {this.props.data ? (
          <ul>
            {this.mapPessoas(this.props.data).map((currentPessoa, i) => (
              <li key={i}>
                <Pessoa pessoa={currentPessoa} />
              </li>
            ))}
          </ul>
        ) : (
          "Não há créditos"
        )}
      </div>
    );
  }
}

export default Pessoas;
