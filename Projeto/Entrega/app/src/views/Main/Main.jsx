import React, {Component} from 'react';
import {Switch, Route, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {retrieveTaxonomies} from "../../core/Taxonomies/TaxonomiesActions";
import {
  Home,
  Page404,
  Calendar,
  Browse,
  Blog,
  News,
  Game,
  Empresa,
  Pessoa,
  Plataforma
} from "../";

class Main extends Component {

  componentWillMount() {
    console.log('app');
    this
      .props
      .retrieveTaxonomies('plataforma', 'SET_PLATAFORMAS');
    this
      .props
      .retrieveTaxonomies('categories', 'SET_CATEGORIES');
    this
      .props
      .retrieveTaxonomies('tags', 'SET_TAGS');
    this
      .props
      .retrieveTaxonomies('genero', 'SET_GENEROS');
    this
      .props
      .retrieveTaxonomies('release', 'SET_RELEASES');
  }

  render() {
    return (

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/browse' component={Browse}/>
        <Route path='/calendar' component={Calendar}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/noticias' component={News}/>
        <Route path='/game/:slug' component={Game}/>
        <Route path='/empresas/:slug' component={Empresa}/>
        <Route path='/plataformas/:slug' component={Plataforma}/>
        <Route path='/pessoas/:slug' component={Pessoa}/>
        <Route path='*' component={Page404}/>
      </Switch>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    retrieveTaxonomies
  }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(Main));
//export default Main;