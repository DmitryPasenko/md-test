import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import OptionButton from '../../components/OptionButton/index';
import { Record } from 'immutable';
const Filter = new Record({
    id: 0,
    title: '',
    checked: false,
    selected: false
});


const styles = theme => ({
    card: {
        width:'100%',
        [theme.breakpoints.up('md')]: {
            width:'300px'
        },
    },
    typography: {
        padding: theme.spacing.unit * 2,
    },
    actions: {
        display: 'flex',
    },
    filterButton: {
        border: 0,
    },
    filterButtonSelected: {
        backgroundColor: theme.palette.primary.light,
        borderColor:'#FFFFFF',
        borderRadius: 3,
        border: '1px',
    },
    badge: {
        margin: theme.spacing.unit * 2,
    }
});
class FilterButton extends React.Component {
    state = {
        anchorEl: null,
        selected:[],
        selectedCount:0
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget,
        });
    };
    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    handleOptionClick = i => {
        this.props.toggleOption(i, this.props.section);
    };
    handleApplyClick = () => {
        this.props.applyFilters(this.props.section);
    };
    handleCancelClick = () => {
        this.props.cancelFilters(this.props.section);
    };

    render() {
        const { classes, title, options, checked, selected} = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const badgeCount = open?checked.count():selected.count();
        const badgeVisible = Boolean(badgeCount);
        const showApply = Boolean(checked.count());

        return (
            <React.Fragment>
                <Badge badgeContent={badgeCount} color="secondary" className={classes.badge} invisible={!badgeVisible}>
                    <Button
                        aria-owns={open ? 'simple-popper' : undefined}
                        aria-haspopup="true"
                        color ="secondary"
                        onClick={this.handleClick}
                        className={classNames(classes.filterButton, { [classes.filterButtonSelected]: open })}
                    >
                        {title}
                    </Button>
                </Badge>
                <Popover
                    id="simple-popper"
                    className={classes.popover}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <Card className={classes.card}>
                        <CardContent>
                            {options.map((item, k) => {
                                const opts = Filter(item);
                                return (
                                    < OptionButton checked={opts.checked} title={opts.title} handleOptionClick={()=>this.handleOptionClick(k)}  key={`optButton-${k}`}/>
                                )})
                            }
                        </CardContent>
                        <CardActions  className={classes.actions}>
                            <Button size="small" color="primary" variant="contained"  onClick={this.handleCancelClick} >Cancel</Button>
                            {showApply && (<Button size="small" color="primary" variant="contained" onClick={this.handleApplyClick} >Apply</Button>)}
                        </CardActions>
                    </Card>
                </Popover>
            </React.Fragment>
        );
    }
}

FilterButton.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    section: PropTypes.string,
    checked: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    selected: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    options: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
};

export default withStyles(styles)(FilterButton);