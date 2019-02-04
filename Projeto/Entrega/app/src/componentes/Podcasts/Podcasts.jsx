import React, { Component } from "react";
import Podcast from "./Podcast";

import { Typography, Grid } from "@material-ui/core";

class Podcasts extends Component {
  render() {
    return (
      <div className={"podcasts"}>
        <Typography className={"resumeTitle"} variant={"display1"} gutterBottom>
          Podcasts
        </Typography>
        {this.props.data ? (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={24}
          >
            {this.props.data.map((currentPodcast, i) => (
              <Grid item xs={12} sm={12} md={4} key={i}>
                <Podcast podcast={currentPodcast} />
              </Grid>
            ))}
          </Grid>
        ) : (
          "Nenhum podcast encontrado"
        )}
      </div>
    );
  }
}

export default Podcasts;
