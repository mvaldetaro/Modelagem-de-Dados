import React, { Component, Fragment } from "react";

import { Resume } from "../";

class Review extends Component {
  render() {
    const { titulo_review, resumo_review, url_review } = this.props.review;
    return (
      <Resume
        titlevariant={"title"}
        title={titulo_review}
        link={url_review}
        content={resumo_review}
      />
    );
  }
}

export default Review;
