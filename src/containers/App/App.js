import React from 'react'
import PropTypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Header from '../../components/Header';
import SelectedFilters from '../SelectedFilters';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        minHeight:'500px',
        maxWidth: '700px',
        marginTop:'150px',
    },
});
class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    handleCancelAllClick = () => {
        this.props.deleteAllFilters();
    };
    render() {
        const { classes, filters, selected, checked} = this.props;
        const showCancel = Boolean(selected.size.count()
                                || selected.color.count()
                                || selected.room.count()
                                || selected.price.count()
                                || selected.material.count()
                                || selected.construction.count());
        return (
            <div>
                <Header menu={filters} selected={selected} checked={checked}/>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <div className={classes.root} elevation={1} >
                        <Typography variant="h5" component="h3">
                            Applied Filters:
                        </Typography>
                        <div>
                            <SelectedFilters selected={selected.size} section="size"/>
                            <SelectedFilters selected={selected.color} section="color"/>
                            <SelectedFilters selected={selected.room} section="room"/>
                            <SelectedFilters selected={selected.price} section="price"/>
                            <SelectedFilters selected={selected.material} section="material"/>
                            <SelectedFilters selected={selected.construction} section="construction"/>
                        </div>
                        <div>
                            {showCancel && (<Button size="small" color="primary" variant="contained" onClick={this.handleCancelAllClick} >Cancel All</Button>)}
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}
App.propTypes = {
    classes: PropTypes.object.isRequired,
    filters: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    selected: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    checked: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
};

export default withStyles(styles)(App)
