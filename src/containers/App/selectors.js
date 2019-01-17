/**
 * Userspage selectors
 */
import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');
const selectSize = (state) => state.get('global').get('size');
const selectRoom = (state) => state.get('global').get('room');
const selectColor = (state) => state.get('global').get('color');
const selectPrice = (state) => state.get('global').get('price');
const selectMaterial = (state) => state.get('global').get('material');
const selectConstruction = (state) => state.get('global').get('construction');
const getSelected = (state) => state.filter((item) => item.get('selected'));
const getChecked = (state) => state.filter((item) => item.get('checked'));

const makeSelectSize = () => createSelector( selectGlobal, (sizeState) => sizeState.get('size'));
const makeSelectRoom = () => createSelector( selectGlobal, (roomState) => roomState.get('room'));
const makeSelectColor = () => createSelector( selectGlobal,(colorState) => colorState.get('color'));
const makeSelectPrice = () => createSelector( selectGlobal,(priceState) => priceState.get('price'));
const makeSelectMaterial = () => createSelector(selectGlobal,(materialState) => materialState.get('material'));
const makeSelectConstruction = () => createSelector(selectGlobal,(constructionState) => constructionState.get('construction'));

const makeSelectedSize = () => createSelector(selectSize, getSelected);
const makeSelectedRoom = () => createSelector(selectRoom, getSelected);
const makeSelectedColor = () => createSelector(selectColor, getSelected);
const makeSelectedPrice = () => createSelector(selectPrice, getSelected);
const makeSelectedMaterial = () => createSelector(selectMaterial, getSelected);
const makeSelectedConstruction = () => createSelector( selectConstruction, getSelected );

const makeCheckedSize = () => createSelector(selectSize, getChecked);
const makeCheckedRoom = () => createSelector(selectRoom, getChecked);
const makeCheckedColor = () => createSelector(selectColor, getChecked);
const makeCheckedPrice = () => createSelector(selectPrice, getChecked);
const makeCheckedMaterial = () => createSelector(selectMaterial, getChecked);
const makeCheckedConstruction = () => createSelector( selectConstruction, getChecked );

export {
    selectGlobal,
    makeSelectSize,
    makeSelectRoom,
    makeSelectColor,
    makeSelectPrice,
    makeSelectMaterial,
    makeSelectConstruction,
    makeSelectedSize,
    makeSelectedRoom,
    makeSelectedColor,
    makeSelectedPrice,
    makeSelectedMaterial,
    makeSelectedConstruction,
    makeCheckedSize,
    makeCheckedRoom,
    makeCheckedColor,
    makeCheckedPrice,
    makeCheckedMaterial,
    makeCheckedConstruction,
};
