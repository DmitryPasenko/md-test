import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        textTransform:'none',
        margin:'2px'
    },
    selected: {
        color: theme.palette.secondary.contrastText,
        borderColor:'black',
        borderRadius: 3,
    },
});

class OptionButton extends React.Component {
    render() {
        const { classes,  handleOptionClick, checked, title } = this.props;
        return (
            <Button size="small"  variant="outlined" color="primary" className={classNames(classes.button, { [classes.selected]: checked })} onClick={handleOptionClick}>{title}</Button>
        );
    }
}

OptionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string,
    selected: PropTypes.bool,
    handleOptionClick:PropTypes.func
};

export default withStyles(styles)(OptionButton);