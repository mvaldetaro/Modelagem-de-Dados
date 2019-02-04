import React, {Fragment, Component} from 'react';
import {Utils as Html, Title} from "../../componentes";
import {Link} from "react-router-dom";

function mapItens(arr) {
  let map = arr.map((current, i) => {
    let item = Object
      .values(current,)
      .toString()
      .replace(",", " ");
    return (`<li>${item}</li>`);
  });

  return map.join("");
}

class List extends Component {

  render() {
    const {url: fonte_url, title: fonte_title} = this.props.fonte || {}

    return (
      <Fragment>
        <Title type={this.props.tag}>
          {this.props.link
            ? <a href={this.props.link} target="_blank" rel="external">{this.props.title}</a>
            : this.props.to
              ? <Link to={this.props.to}>{this.props.title}</Link>
              : this.props.title}
        </Title>
        <ul>
          {this.props.itens
            ? <Html html={mapItens(this.props.itens)}></Html>
            : false}
        </ul>
      </Fragment>
    )
  }
}

export default List;