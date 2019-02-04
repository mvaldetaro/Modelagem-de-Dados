import React, {Component, Fragment} from 'react';
import {Cover} from "..";
import {Paper, Typography} from "@material-ui/core";

import {Utils as Html} from "../../componentes";

class ListGridItem extends Component {

  thumbUrl() {
    const re = /^(https?:\/\/)?((www\.)?(youtube(-nocookie)?|youtube.googleapis)\.com.*(v\/|v=|vi=|vi\/|e\/|embed\/|user\/.*\/u\/\d+\/)|youtu\.be\/)([_0-9a-z-]+)/i;
    let url = this.props.data.link;

    console.log(url);

    if (this.props.data.link) {
      let id = url.match(re)[7];

      console.log(id);
      return `http://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;
    } else {
      return '';
    }
  }

  render() {

    const {title, thumbnail, slug, desenvolvedora, link} = this.props.data;

    return (
      <div className={'gridItem'}>
        <a target="_blank" href={link} className={'gridItemLink'}>
          <Cover src={this.thumbUrl()} alt={title} width='100%'/>
          <div className="mask">
            <div className="title">
              <Typography variant={'body1'}>
                <span className={'titleLink'}>
                  <Html html={title}></Html>
                </span>
              </Typography>
              <Typography variant={'caption'}>Trailer</Typography>
            </div>
          </div>
        </a>
      </div>
    )
  }
}

export default ListGridItem;
