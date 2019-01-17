import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing.unit / 2,
    },
    chip: {
        margin: theme.spacing.unit / 2,
    },
});

class SelectedFilters extends React.Component {
    handleDelete = (id,section) => (e) => {
        this.props.deleteFilter(id,section);
    };
    render() {
        const { classes, section, selected } = this.props;
        return (
            <>
            {selected.map((data) => {
                let id = data.get('id');
                return (
                    <Chip
                        key={id}
                        label={data.get('title')}
                        onDelete={this.handleDelete(id,section)}
                        className={classes.chip}
                    />
                );
            })}
            </>
        );
    }
}

SelectedFilters.propTypes = {
    classes: PropTypes.object.isRequired,
    section: PropTypes.string,
    selected: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
};

export default withStyles(styles)(SelectedFilters);