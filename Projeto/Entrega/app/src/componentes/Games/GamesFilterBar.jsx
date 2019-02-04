import React, {Component, Fragment} from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Grid,
  MenuItem,
  Divider
} from "@material-ui/core";

import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import {onSearch} from "./GamesFilterBarActions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class GamesFilterBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      plataforma: false,
      release: false,
      genero: false,
      per_page: 100
    };
  }

  removeEmptyKey = (obj) => {

    let cloneObj = JSON.parse(JSON.stringify(obj));

    Object
      .keys(cloneObj)
      .forEach((k) => (!cloneObj[k] && cloneObj[k] !== undefined) && delete cloneObj[k]);

    return cloneObj;
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    }, () => {
      this
        .props
        .onSearch(this.removeEmptyKey(this.state))
    });
  };

  handleChangePlataforma = () => event => {
    this.setState({plataforma: event.target.value})
  };

  render() {

    const {plataformas, releases, generos} = this.props;

    return (
      <Fragment>
        <div className="filterBar">
          <div className={'hackContainer'}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <TextField
                  id="searchInput"
                  placeholder="Buscar por nome"
                  value={this.state.search}
                  margin="normal"
                  onChange={this.handleChange('search')}
                  fullWidth={true}/>
              </Grid>
              <Grid item xs={12} sm={4} md={6} lg={3}>
                <TextField
                  id="plataformas"
                  select
                  value={this.state.plataforma}
                  onChange={this.handleChange('plataforma')}
                  fullWidth={true}
                  margin="normal"
                  SelectProps={{
                  displayEmpty: true,
                  MenuProps: MenuProps
                }}>
                  <MenuItem key={'all'} value={false}>{'Todas as plataformas'}</MenuItem>
                  {plataformas.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4} md={6} lg={3}>
                <TextField
                  id="genero"
                  select
                  value={this.state.genero}
                  onChange={this.handleChange('genero')}
                  fullWidth={true}
                  margin="normal"
                  SelectProps={{
                  displayEmpty: true,
                  MenuProps: MenuProps
                }}>
                  <MenuItem key={'all'} value={false}>{'Gênero'}</MenuItem>
                  {generos.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={4} md={6} lg={3}>
                <TextField
                  id="ano"
                  select
                  value={this.state.release}
                  onChange={this.handleChange('release')}
                  fullWidth={true}
                  margin="normal"
                  SelectProps={{
                  displayEmpty: true,
                  MenuProps: MenuProps
                }}>

                  <MenuItem key={'all'} value={false}>{'Ano de lançamento'}</MenuItem>
                  {releases.map(option => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>
          </div>
        </div>
        <Divider/>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {plataformas: state.taxonomies.plataformas, releases: state.taxonomies.releases, generos: state.taxonomies.generos}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onSearch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesFilterBar);