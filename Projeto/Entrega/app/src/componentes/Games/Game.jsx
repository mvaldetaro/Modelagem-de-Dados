import React from 'react';
import {Link} from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

import {Cover} from "..";
import {withStyles} from '@material-ui/core/styles';

const Game = (props) => {
  const {slug, thumbnail, title, desenvolvedora, lancamento} = props.game;

  const link = <Link to={'game/' + slug}>
    <Typography variant="title">{title}</Typography>
  </Link>

  return (
    <div className={'gridItem'}>

      <Link to={'game/' + slug} className={'gridItemLink'}>
        <Cover src={thumbnail} alt={title} width='100%'/>
        <div className="mask">
          <div className="title">
            <Typography variant={'body1'}>
              <div className={'titleLink'}>{title}</div>
            </Typography>
            <Typography variant={'caption'}>{`${desenvolvedora} - ${lancamento}`}</Typography>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Game;