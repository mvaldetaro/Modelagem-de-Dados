import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Cover } from "../../componentes";
import { Paper, Typography } from "@material-ui/core";

class Revista extends Component {
  render() {
    console.log(this.props.revista);
    const { thumbnail, url, slug, type, title, fonte } = this.props.revista;

    return (
      <div className={"gridItem"}>
        <a href={url} target={"blank"} className={"gridItemLink"}>
          <Cover src={thumbnail} alt={title} />
          <div className="mask">
            <div className="title">
              <Typography variant={"body1"}>
                <b>{title}</b>
              </Typography>
              <Typography variant={"caption"}>{fonte}</Typography>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Revista;
