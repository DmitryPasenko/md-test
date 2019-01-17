import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteAllFilters} from '../../containers/App/actions';
import { createStructuredSelector } from 'reselect';
import {
    makeSelectSize, makeSelectRoom, makeSelectPrice, makeSelectMaterial, makeSelectColor, makeSelectConstruction,
    makeSelectedSize, makeSelectedRoom, makeSelectedColor, makeSelectedPrice, makeSelectedMaterial, makeSelectedConstruction,
    makeCheckedSize, makeCheckedRoom, makeCheckedColor, makeCheckedPrice, makeCheckedMaterial, makeCheckedConstruction
} from './selectors';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
    deleteAllFilters: () => dispatch(deleteAllFilters()),
});

const mapStateToProps = createStructuredSelector({
    filters: createStructuredSelector({
        size: makeSelectSize(),
        color: makeSelectColor(),
        room: makeSelectRoom(),
        price: makeSelectPrice(),
        material: makeSelectMaterial(),
        construction: makeSelectConstruction()
    }),
    selected: createStructuredSelector({
        size: makeSelectedSize(),
        color: makeSelectedColor(),
        room: makeSelectedRoom(),
        price: makeSelectedPrice(),
        material: makeSelectedMaterial(),
        construction: makeSelectedConstruction()
    }),
    checked: createStructuredSelector({
        size: makeCheckedSize(),
        color: makeCheckedColor(),
        room: makeCheckedRoom(),
        price: makeCheckedPrice(),
        material: makeCheckedMaterial(),
        construction: makeCheckedConstruction(),
    })
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(App);

