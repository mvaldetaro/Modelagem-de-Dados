import React, {Component, Fragment} from 'react';
import {Cover} from "..";
import {Paper, Typography} from "@material-ui/core";

class ListGridItem extends Component {
  render() {

    const {title, thumbnail, slug} = this.props.data;

    return (
      <div className={'gridItem'}>
        <a href={`/${this.props.category}/${slug}`} className={'gridItemLink'}>
          <Cover src={thumbnail} alt={title} width='100%'/>
          <div className="mask">
            <div className="title">
              <Typography variant={'body1'}>
                <a className={'titleLink'} href={`/${this.props.category}/${slug}`}>{title}</a>
              </Typography>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default ListGridItem;
