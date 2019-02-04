import React, { Component, Fragment } from "react";
import Review from "./Review";
import { Title } from "../";

import { Typography, Grid } from "@material-ui/core";

class Reviews extends Component {
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
              Reviews
            </Typography>
            <div>
              {this.props.data.map((currentReview, i) => (
                <span key={i}>
                  <Review review={currentReview} />
                </span>
              ))}
            </div>
          </Fragment>
        ) : (
          "Nenhum review encontrado"
        )}
      </div>
    );
  }
}

export default Reviews;
