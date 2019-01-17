import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import OptionButton from '../../components/OptionButton/index';
import MoreIcon from '@material-ui/icons/MoreVert';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import { Record } from 'immutable';
const Filter = new Record({
    id: 0,
    title: '',
    checked: false,
    selected: false
});


const styles = theme => ({
    popover: {
        width:'100%',
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
        right:20
    },
    heading: {
        flexGrow: 1,
        display: 'flex',
        textTransform:'capitalize'
    },
    grow: {
        flexGrow: 1,
    },
    options: {
        display:'flex'
    },
    panel:{
        margin:0
    }
});
class MobileFilters extends React.Component {
    state = {
        anchorEl: null,
        selected:[],
        selectedCount:0,
        expanded: 'room',
    };

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        });
    };
    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
    handleOptionClick = (i, section) => {
        this.props.toggleOption(i, section);
    };
    handleApplyClick = (section) => {
        this.props.applyFilters(section);
    };
    handleCancelClick = (section) => {
        this.props.cancelFilters(section);
    };

    handleChange = panel => (event, isExpanded) => {
            if(this.state.expanded)
                this.handleApplyClick(this.state.expanded);
            this.setState({expanded: isExpanded? panel:false});
    };

    render() {
        const { classes, options, include, checked} = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <React.Fragment>
                <Button
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup="true"
                    color ="secondary"
                    onClick={this.handleClick}
                    className={classNames(classes.filterButton, { [classes.filterButtonSelected]: open })}
                >
                    <MoreIcon/>
                </Button>
                <Popover
                    id="simple-popper"
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
                    <div className={classes.popover}>
                    {include.map((section, key) => (
                        <ExpansionPanel key={`panel-${key}`} className={classes.panel}  onChange={this.handleChange(section)} expanded={this.state.expanded === section}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.actions} >
                                <Typography className={classes.heading}>{section}</Typography>
                                <Badge badgeContent={checked[section].count()} color="primary" className={classes.badge} invisible={!Boolean(checked[section].count())} >&nbsp;</Badge>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <div className={classes.grow}>
                                    {options[section].map((item, k) => {
                                        const opts = Filter(item);
                                        return (
                                            < OptionButton checked={opts.checked} title={opts.title} handleOptionClick={()=>this.handleOptionClick(k, section)}  key={`menuOptButton-${k}`}/>
                                        )})
                                    }
                                </div>
                                <div />
                                <div className={classes.actions}>
                                    {Boolean(checked[section].count()) && (<Button size="small" color="primary" variant="contained" onClick={()=>this.handleApplyClick(section)} >Apply</Button>)}
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        ))}
                    </div>
                </Popover>
            </React.Fragment>
        );
    }
}

MobileFilters.propTypes = {
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

export default withStyles(styles)(MobileFilters);