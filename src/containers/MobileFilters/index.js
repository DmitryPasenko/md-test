import { connect } from 'react-redux';
import { compose } from 'redux';
import { applyFilters, toggleOption, cancelFilters} from '../App/actions';
import MobileFilters from './MobileFilters';

const mapDispatchToProps = (dispatch) => ({
    applyFilters: (section) => dispatch(applyFilters(section)),
    cancelFilters: (section) => dispatch(cancelFilters(section)),
    toggleOption:(index, section) => dispatch(toggleOption(index, section)),
});

const withConnect = connect(null, mapDispatchToProps);

export default compose(withConnect)(MobileFilters);
export { mapDispatchToProps };
