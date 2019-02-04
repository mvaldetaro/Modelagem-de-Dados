import React, {Component} from 'react';
import {GamesList} from "../../componentes/Games";
import {GamesFilterBar} from "../../componentes/Games";

//import {connect} from 'react-redux';

class BrowseGames extends Component {
  render() {
    return (
      <div className="browse">
        <GamesFilterBar></GamesFilterBar>
        <GamesList></GamesList>
      </div>
    );
  }
}

export default BrowseGames;
