import React, { Component, Fragment } from "react";
import { Cover } from "../../componentes";
class Screenshot extends Component {
  render() {
    const { alt, url, sizes } = this.props.screenshot;

    return <Cover src={sizes.vgcserviceThumbnailGridLg} alt={alt} />;
  }
}

export default Screenshot;
