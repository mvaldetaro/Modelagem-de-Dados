import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";

import {Typography} from "@material-ui/core";

class Lancamento extends Component {
  render() {
    const {lancamento, slug, title, type} = this.props.lancamento;

    return (
      <Fragment>
        <Typography variant={"p"} color={"textPrimary"} gutterBottom>
          <b>{lancamento}</b>
        </Typography>
        <Typography variant={"caption"} color={"textPrimary"} gutterBottom>
          {/*<Link to={`/${type}/${slug}`}>{title}</Link>*/}
          {title}
        </Typography>
      </Fragment>
    );
  }
}

export default Lancamento;
