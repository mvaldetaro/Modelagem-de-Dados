import React, { Component, Fragment } from "react";
import { Typography, Grid } from "@material-ui/core";

class Video extends Component {
  embedUrl() {
    const re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    let url = this.props.video.url_video;

    if (this.props.video.url_video) {
      let id = url.match(re)[7];
      return "https://www.youtube.com/embed/" + id;
    } else {
      return "";
    }
  }

  render() {
    const { titulo_video } = this.props.video;

    return (
      <div className={"video"}>
        <Typography variant={"title"} gutterBottom>
          {titulo_video}
        </Typography>
        <div className={"videoWrapper"}>
          <iframe
            title={titulo_video}
            width="560"
            height="315"
            src={this.embedUrl()}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Video;
