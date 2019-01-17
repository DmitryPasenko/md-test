import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography}  from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';



import FilterButton from '../../containers/FilterButton/index'
import MobileFilters from '../../containers/MobileFilters/index'

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
        [theme.breakpoints.up('md')]: {
            flexGrow: 0,
        },
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

class Header extends React.Component {
    render() {
        const { classes, menu, selected, checked  } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                            Test-App
                        </Typography>
                        <div className={classes.grow} >
                            <FilterButton options={menu.size} selected={selected.size}  checked={checked.size} title="Size" section="size" />
                            <FilterButton options={menu.color} selected={selected.color}   checked={checked.color} title="Color" section="color"/>
                        </div>
                        <div className={classes.sectionDesktop}>
                            <FilterButton options={menu.room}  selected={selected.room}   checked={checked.room} title="Room" section="room"/>
                            <FilterButton options={menu.price}  selected={selected.price}   checked={checked.price} title="Price"  section="price"/>
                            <FilterButton options={menu.material}   selected={selected.material}  checked={checked.material} title="Material" section="material"/>
                            <FilterButton options={menu.construction} selected={selected.construction}  checked={checked.construction}   title="Construction" section="construction"/>
                        </div>
                        <div className={classes.sectionMobile}>
                            <MobileFilters options={menu} selected={selected} checked={checked} include={['room','price','material','construction']}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    selected: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    menu: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
};

export default withStyles(styles)(Header);