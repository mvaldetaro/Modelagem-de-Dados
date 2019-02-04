import React, {Component} from 'react';
import {Button, Grid, Typography} from "@material-ui/core";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <Typography variant={'caption'} gutterBottom>©2018 - 2019 | VGComm - Versão Odissey</Typography>
          {/*Uma parte da venda de itens comprados através dos botões Submarino, acima suportam diretamente o VGSC3000.*/}
          <Typography variant={'caption'}>
            <a href="#">Sobre</a>
            {/*<a href="#">press kit</a>
            <a href="#">contato</a>
            <a href="#">Nossos apoiadores</a>*/}
          </Typography>

          {/*<p>Social:<br/>
            <a href="#">facebook</a>
            <a href="#">twitter</a>
            <a href="#">instagram</a>
          </p>*/}
        </div>
      </footer>
    );
  }
}

export default Footer;
