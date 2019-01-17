import { fromJS } from 'immutable';

import {
  selectGlobal,
    makeSelectSize, makeSelectRoom, makeSelectPrice, makeSelectMaterial, makeSelectColor, makeSelectConstruction,
    makeSelectedSize, makeSelectedRoom, makeSelectedColor, makeSelectedPrice, makeSelectedMaterial, makeSelectedConstruction,
    makeCheckedSize, makeCheckedRoom, makeCheckedColor, makeCheckedPrice, makeCheckedMaterial, makeCheckedConstruction
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});
describe('makeSelectSize', () => {
  const sizeSelector = makeSelectSize();
  it('should select the current user', () => {
    const size = 'size';
    const mockedOptions = fromJS([]);
    const mockedState = fromJS({
      global: {
        size: mockedOptions,
      },
    });
    expect(sizeSelector(mockedState)).toEqual(mockedOptions);
  });
});
describe('makeSelectColor', () => {
    const colorSelector = makeSelectColor();
    it('should select the current user', () => {
        const color = 'color';
        const mockedOptions = fromJS([]);
        const mockedState = fromJS({
            global: {
                color: mockedOptions,
            },
        });
        expect(colorSelector(mockedState)).toEqual(mockedOptions);
    });
});
describe('makeSelectRoom', () => {
    const roomSelector = makeSelectRoom();
    it('should select the current user', () => {
        const room = 'room';
        const mockedOptions = fromJS([]);
        const mockedState = fromJS({
            global: {
                room: mockedOptions,
            },
        });
        expect(roomSelector(mockedState)).toEqual(mockedOptions);
    });
});
describe('makeSelectPrice', () => {
    const priceSelector = makeSelectPrice();
    it('should select the current user', () => {
        const price = 'price';
        const mockedOptions = fromJS([]);
        const mockedState = fromJS({
            global: {
                price: mockedOptions,
            },
        });
        expect(priceSelector(mockedState)).toEqual(mockedOptions);
    });
});
describe('makeSelectMaterial', () => {
    const materialSelector = makeSelectMaterial();
    it('should select the current user', () => {
        const material = 'material';
        const mockedOptions = fromJS([]);
        const mockedState = fromJS({
            global: {
                material: mockedOptions,
            },
        });
        expect(materialSelector(mockedState)).toEqual(mockedOptions);
    });
});
describe('makeSelectConstruction', () => {
    const constructionSelector = makeSelectConstruction();
    it('should select the current user', () => {
        const construction = 'construction';
        const mockedOptions = fromJS([]);
        const mockedState = fromJS({
            global: {
                construction: mockedOptions,
            },
        });
        expect(constructionSelector(mockedState)).toEqual(mockedOptions);
    });
});


describe('makeSelectedSize', () => {
    const sizeSelectedSelector = makeSelectedSize();
    it('should select the current user', () => {
        const mockedOptions = fromJS([{id: "2x3", title: "2' X 3'", selected: true, checked:false}]);
        const mockedState = fromJS({
            global: {
                size: [
                    {id: "2x3", title: "2' X 3'", selected: true, checked:false},
                    {id: "3x5", title: "3' X 5'", selected: false, checked:false},
                    {id: "4x6", title: "4' X 6'", selected: false, checked:false},
                ],
            },
        });
        expect(sizeSelectedSelector(mockedState)).toEqual(mockedOptions);
    });
});

describe('makeCheckedSize', () => {
    const sizeCheckedSelector = makeCheckedSize();
    it('should select the current user', () => {
        const size = 'size';
        const mockedOptions = fromJS([{id: "3x5", title: "3' X 5'", selected: false, checked:true}]);
        const mockedState = fromJS({
            global: {
                size: [
                    {id: "2x3", title: "2' X 3'", selected: true, checked:false},
                    {id: "3x5", title: "3' X 5'", selected: false, checked:true},
                    {id: "4x6", title: "4' X 6'", selected: false, checked:false},
                ],
            },
        });
        expect(sizeCheckedSelector(mockedState)).toEqual(mockedOptions);
    });
});
