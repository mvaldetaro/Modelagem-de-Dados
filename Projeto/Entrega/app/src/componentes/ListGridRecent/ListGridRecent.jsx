import React, {Component} from 'react';
import ListGridItem from "./ListGridItem";
import {Grid, Typography, Divider, GridList} from "@material-ui/core";

class ListGridRecent extends Component {

  render() {

    const {
      xs,
      sm,
      md,
      lg,
      xl,
      child
    } = this.props;

    const Component = child;

    return (this.props.data
      ? (
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={24}>
          <Grid item xs={12}>
            <div className="rgb">
              <span className="r"></span>
              <span className="g"></span>
              <span className="b"></span>
            </div>
            <Typography variant={'display1'} className={'gridListTitle'}>{this.props.title}</Typography>
          </Grid>
          {this
            .props
            .data
            .map((currentData, i) => (
              <Grid item key={i} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
                {child
                  ? <Component category={this.props.category} data={currentData}/>
                  : <ListGridItem category={this.props.category} data={currentData}/>
}
              </Grid>
            ))}
        </Grid>
      )
      : <Typography>Nenhum {this.props.title}
        encontrado</Typography>)
  }
}

export default ListGridRecent;