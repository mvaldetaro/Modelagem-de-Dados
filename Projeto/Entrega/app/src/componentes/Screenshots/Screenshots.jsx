import React, { Component, Fragment } from "react";
import Screenshot from "./Screenshot";

import { Typography, Grid } from "@material-ui/core";

class Screenshots extends Component {
  render() {
    return (
      <div className={"reviews"}>
        {this.props.data ? (
          <Fragment>
            <Typography
              className={"resumeTitle"}
              variant={"display1"}
              gutterBottom
            >
              Screenshots
            </Typography>

            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
              spacing={32}
            >
              {this.props.data.map((currentScreenshot, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                  <Screenshot screenshot={currentScreenshot} />
                </Grid>
              ))}
            </Grid>
          </Fragment>
        ) : (
          "Nenhum screenshot encontrado"
        )}
      </div>
    );
  }
}

export default Screenshots;
