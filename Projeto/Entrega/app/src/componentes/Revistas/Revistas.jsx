import React, { Component } from "react";
import Revista from "./Revista";

import { Typography, Grid } from "@material-ui/core";

class Revistas extends Component {
  mapRevistas(arr) {
    console.log(arr);
    let map = arr.map((current, i) => ({
      slug: current.revista.slug,
      type: current.revista.type,
      url: current.revista.acf.fonte_url,
      fonte: current.revista.acf.fonte_titulo,
      thumbnail:
        current.revista.better_featured_image.media_details.sizes
          .vgcserviceFeatured.source_url,
      title: current.revista.title.rendered
    }));
    return map;
  }

  render() {
    return (
      <div className={"revistas"}>
        <Typography className={"resumeTitle"} variant={"display1"} gutterBottom>
          Revistas
        </Typography>

        {this.props.data ? (
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={24}
          >
            {this.mapRevistas(this.props.data).map((currentRevista, i) => (
              <Grid item xs={12} sm={12} md={4} lg={3} key={i}>
                <Revista revista={currentRevista} />
              </Grid>
            ))}
          </Grid>
        ) : (
          "Nenhuma revista encontrada"
        )}
      </div>
    );
  }
}

export default Revistas;
