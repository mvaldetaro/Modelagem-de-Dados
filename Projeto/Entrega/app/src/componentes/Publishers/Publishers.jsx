import React, { Component } from "react";
import Publisher from "./Publisher";

import { Typography } from "@material-ui/core";

class Publishers extends Component {
  mapPublishers(arr) {
    let mapy = [];
    if (arr) {
      mapy = arr.map((current, i) => ({
        slug: current.publicadora.slug,
        type: current.publicadora.type,
        title: current.publicadora.title.rendered
      }));
    }
    return mapy;
  }

  render() {
    return (
      <div className={"publishers"}>
        <Typography className={"resumeTitle"} variant={"title"} gutterBottom>
          Publishers
        </Typography>
        {this.props.data ? (
          <ul>
            {this.mapPublishers(this.props.data).map((currentPublisher, i) => (
              <li key={i}>
                <Publisher publisher={currentPublisher} />
              </li>
            ))}
          </ul>
        ) : (
          "Nenhum publisher encontrado"
        )}
      </div>
    );
  }
}

export default Publishers;
