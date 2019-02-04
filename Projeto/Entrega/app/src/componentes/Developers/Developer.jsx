import React, {Component, Fragment} from 'react';
import {Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

class Developer extends Component {

  render() {

    const {slug, title, type} = this.props.developer;

    return (
      <Fragment>

        {/*<Link to={`/${type}/${slug}`}>{title}</Link>*/}
        <Typography variant={'body1'} gutterBottom>{title}</Typography>
      </Fragment>
    )
  }
}

export default Developer;
