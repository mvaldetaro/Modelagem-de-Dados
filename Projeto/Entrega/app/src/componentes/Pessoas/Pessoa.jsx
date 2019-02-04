import React, {Component} from "react";
import {Resume} from "../";

import {Typography} from "@material-ui/core";

class Pessoa extends Component {
  render() {
    const {slug, title, type, funcao} = this.props.pessoa;
    return (<Resume titlevariant={"p"} title={title} content={funcao}/>);
  }
}

export default Pessoa;
