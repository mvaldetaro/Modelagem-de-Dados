import React, { Component } from "react";
import Developer from "./Developer";

import { Typography } from "@material-ui/core";

class Developers extends Component {
  mapDevelopers(arr) {
    let mapy = [];
    if (arr) {
      mapy = arr.map((current, i) => ({
        slug: current.desenvolvedor.slug,
        type: current.desenvolvedor.type,
        title: current.desenvolvedor.title.rendered
      }));
    }
    return mapy;
  }

  render() {
    return (
      <div className={"developers"}>
        <Typography className={"resumeTitle"} variant={"title"} gutterBottom>
          Desenvolvedoras
        </Typography>
        {this.props.data ? (
          <ul>
            {this.mapDevelopers(this.props.data).map((currentDeveloper, i) => (
              <li key={i}>
                <Developer developer={currentDeveloper} />
              </li>
            ))}
          </ul>
        ) : (
          "Nenhuma desenvolvedora encontrada"
        )}
      </div>
    );
  }
}

export default Developers;
