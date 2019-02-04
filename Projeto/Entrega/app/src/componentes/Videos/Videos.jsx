import React, { Component } from "react";
import Video from "./Video";

import { Typography, Grid } from "@material-ui/core";

class Videos extends Component {
  render() {
    return (
      <div className={"videos"}>
        <Typography className={"resumeTitle"} variant={"display1"} gutterBottom>
          Vídeos
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={24}
        >
          {this.props.data
            ? this.props.data.map((currentVideo, i) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={i === 0 ? 12 : 6}
                  key={i}
                >
                  <Video video={currentVideo} />
                </Grid>
              ))
            : "Nenhum video encontrado"}
        </Grid>
      </div>
    );
  }
}

export default Videos;
