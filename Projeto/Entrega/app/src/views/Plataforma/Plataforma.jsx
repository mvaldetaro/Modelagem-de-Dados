import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {getPlataforma} from "./PlataformaActions";

import {Cover, Resume, List, Tabs} from "../../componentes";

class Plataforma extends Component {

  componentDidMount() {
    this
      .props
      .getPlataforma(this.props.match.params.slug);
  }

  render() {

    const {
      thumbnail,
      title,
      content,
      dt_lancamento,
      fabricante,
      desenvolvedores,
      geracao,
      nome_alternativo,
      tipo_plataforma,
      familia_produto,
      preco_de_lancamento,
      so,
      cpu,
      memoria,
      armazenamento,
      video,
      som,
      servico_online,
      saidas,
      resolucoes,
      conectividade,
      qtd_unidades_vendidas

    } = this.props.currentPlataforma;

    return (
      <div className="app">

        <Cover src={thumbnail} alt={title}/>
        <p>Plataforma</p>
        <Resume tag="h1" title={title} content={content}></Resume>
        <hr/>

        <List itens={dt_lancamento}></List>
        <Resume tag="p" title="Fabricante" content={fabricante}></Resume>
        <Resume tag="p" title="Desenvolvedora" content={desenvolvedores}></Resume>
        <Resume tag="p" title="Unidades vendidas" content={qtd_unidades_vendidas}></Resume>
        <hr/>

        <Tabs>
          <div label="Informações">
            <Resume tag="p" title="Geração" content={geracao}></Resume>
            <Resume tag="p" title="Tipo de plataforma" content={tipo_plataforma}></Resume>
            <Resume tag="p" title="Família do produto" content={familia_produto}></Resume>
            <Resume tag="p" title="Preço de lançamento" content=""></Resume>
            <List itens={preco_de_lancamento}></List>
            <Resume tag="p" title="Nome alternativo" content={nome_alternativo}></Resume>
          </div>
          <div label="Hardware">
            <Resume tag="p" title="Sistema Operacional" content={so}></Resume>
            <Resume tag="p" title="CPU" content={cpu}></Resume>
            <Resume tag="p" title="Memória" content={memoria}></Resume>
            <Resume tag="p" title="Armazenamento" content={armazenamento}></Resume>
            <Resume tag="p" title="Vídeo" content={video}></Resume>
            <Resume tag="p" title="Som" content={som}></Resume>
            <Resume tag="p" title="Serviço Online" content={servico_online}></Resume>
            <Resume tag="p" title="Saídas" content={saidas}></Resume>
            <Resume tag="p" title="Resoluções" content={resolucoes}></Resume>
            <Resume tag="p" title="Conectividade" content={conectividade}></Resume>
          </div>
        </Tabs>

      </div>
    );
  }

}

function mapStateToProps(state) {
  return {currentPlataforma: state.plataformaSelected.currentPlataforma}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPlataforma
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Plataforma);
