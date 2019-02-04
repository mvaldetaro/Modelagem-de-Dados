import React, { Component } from "react";
import { Cover } from "../../componentes";

class Classificacao extends Component {
  render() {
    const { image_src, alt, title } = this.props.currentselo;

    return <Cover src={image_src} alt={alt} title={title} />;
  }
}

export default Classificacao;
