import React, {Component, Fragment} from "react";
import {Cover} from "../../componentes";
import {Paper, Typography} from "@material-ui/core";

class Podcast extends Component {
  render() {
    const {thumbnail_podcasts, titulo_podcasts, url_podcasts} = this.props.podcast;

    return (
      <div className={"gridItem itemPodcast"}>
        <a href={url_podcasts} className={"gridItemLink"}>
          <Cover src={thumbnail_podcasts} alt={titulo_podcasts}/>
          <div className="mask">
            <div className="title">
              <Typography variant={"body1"}>
                <b>{titulo_podcasts}</b>
              </Typography>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Podcast;
