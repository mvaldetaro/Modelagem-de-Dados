import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import {Divider} from '@material-ui/core';
import Game from './Game';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {getGames, getCategories} from "./GamesListActions";

class GamesList extends Component {

  componentWillMount() {
    this
      .props
      .getGames(this.props.filter);
    this
      .props
      .getCategories(2, 'GET_CATEGORIES');

    this
      .props
      .getCategories(7, 'GET_GENERO');
  }

  //componentDidUpdate(prevProps, prevState, snapshot) {

  componentDidUpdate(prevProps) {
    if (prevProps.filter !== this.props.filter) {
      this
        .props
        .getGames(this.props.filter);
    }
  }

  render() {
    return (
      <div className="game-list">
        {this.props.games
          ? (
            <div className={'hackContainer'}>
              <Grid container spacing={24}>
                {this
                  .props
                  .games
                  .map((currentGame, i) => (
                    <Grid key={i} item xs={6} sm={4} md={3} lg={3} xl={3}>
                      <Game game={currentGame}></Game>
                    </Grid>
                  ))}
              </Grid>
            </div>
          )
          : "Nenhum game encontrado"}
        <Divider></Divider>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {filter: state.search.filter, games: state.games.games}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getGames,
    getCategories
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);