import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteFilter, deleteAllFilters} from '../App/actions';
import SelectedFilters from './SelectedFilters';

const mapDispatchToProps = (dispatch) => ({
    deleteFilter: (id, section) => dispatch(deleteFilter(id, section)),
    deleteAllFilters: () => dispatch(deleteAllFilters()),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(SelectedFilters);
export { mapDispatchToProps };
