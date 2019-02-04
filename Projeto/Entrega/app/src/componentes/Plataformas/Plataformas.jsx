import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Plataformas extends Component {

  mapPlataformas(arr) {
    let map = arr.map((currentPlataforma, i) => ({"slug": currentPlataforma.plataforma.slug, "type": currentPlataforma.plataforma.type, "title": currentPlataforma.plataforma.title.rendered}));
    return map;
  }

  render() {

    return (
      <p>
        <b>Plataformas:</b>
        {this.props.data
          ? (this.mapPlataformas(this.props.data).map((plataforma, i) => (
            <Link className="label" to={`/${plataforma.type}/${plataforma.slug}`} key={i}>{`${plataforma.title}`}
            </Link>
          )))
          : "Nenhuma plataforma encontrado"}
      </p>
    )
  }
}

export default Plataformas;