import { fromJS } from 'immutable';

import appReducer from '../reducer';
import { applyFilters, deleteFilter, deleteAllFilters, cancelFilters, toggleOption} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
       state = fromJS({
          size: [
              {id: "2x3", title: "2' X 3'", selected: false, checked:false},
              {id: "3x5", title: "3' X 5'", selected: false, checked:false},
              {id: "4x6", title: "4' X 6'", selected: false, checked:false},
              {id: "5x8", title: "5' X 8'", selected: false, checked:false},
              {id: "6x9", title: "6' X 9'", selected: false, checked:false},
              {id: "8x10", title: "8' X 10'", selected: false, checked:false},
              {id: "9x12", title: "9' X 12'", selected: false, checked:false},
              {id: "10x14", title: "10' X 14'", selected: false, checked:false},
              {id: "12x15", title: "12' X 15'", selected: false, checked:false},
              {id: "runners", title: "Runners", selected: false, checked:false},
              {id: "roundsovals&squares", title: "Rounds, Ovals & Squares", selected: false, checked:false},
          ],
          color: [
              {id: "blue", title: "Blue", selected: false, checked:false},
              {id: "black", title: "Black", selected: false, checked:false},
              {id: "neutral",title: "Neutral", selected: false, checked:false},
              {id: "orange", title: "Orange", selected: false, checked:false},
              {id: "white", title: "White", selected: false, checked:false},
              {id: "gray", title: "Gray", selected: false, checked:false},
              {id: "red", title: "Red", selected: false, checked:false},
              {id: "brown", title: "Brown", selected: false, checked:false},
              {id: "multi", title: "Multicolor", selected: false, checked:false},
              {id: "yellow", title: "Yellow", selected: false, checked:false},
              {id: "green", title: "Green", selected: false, checked:false},
              {id: "pink", title: "Pink", selected: false, checked:false},
              {id: "purple", title: "Purple", selected: false, checked:false},
          ],
          room: [
              {id: "bedroom", title: "Bedroom", selected: false, checked:false},
              {id: "living room", title: "Living Room", selected: false, checked:false},
              {id: "hallway", title: "Hallway", selected: false, checked:false},
              {id: "kitchen", title: "Kitchen", selected: false, checked:false},
              {id: "bathroom", title: "Bathroom", selected: false, checked:false},
              {id: "kids", title: "Kids", selected: false, checked:false},
              {id: "dining room", title: "Dining Room", selected: false, checked:false},
              {id: "outdoor",title: "Outdoor", selected: false, checked:false},
              {id: "office", title: "Office", selected: false, checked:false},
          ],
          price: [
              {id: "from0to100", title: "$0-100", selected: false, checked:false},
              {id: "from101to300", title: "$101-300", selected: false, checked:false},
              {id: "from301to700", title: "$301-700", selected: false, checked:false},
              {id: "from701", title: "$701 & above", selected: false, checked:false},
          ],
          material: [
              {id: "synthetics", title: "Synthetics", selected: false, checked:false},
              {id: "jute & natural fibers", title: "Jute & Natural Fibers", selected: false, checked:false},
              {id: "wool", title: "Wool", selected: false, checked:false},
              {id: "blends", title: "Blends", selected: false, checked:false},
              {id: "cotton", title: "Cotton", selected: false, checked:false},
          ],
          construction: [
              {id: "machine made", title: "Machine Made", selected: false, checked:false},
              {id: "hand woven", title: "Hand Woven", selected: false, checked:false},
              {id: "hand knotted", title: "Hand Knotted", selected: false, checked:false},
              {id: "hand tufted", title: "Hand Tufted", selected: false, checked:false},
              {id: "hand hooked", title: "Hand Hooked", selected: false, checked:false},
              {id: "shag",title: "Shag", selected: false, checked:false},
              {id: "dhurrie",title: "Dhurrie", selected: false, checked:false},
              {id: "hand loomed", title: "Hand Loomed", selected: false, checked:false},
          ],
          style: [
              {id: "casual", title: "Casual", selected: false, checked:false},
              {id: "contemporary", title: "Contemporary", selected: false, checked:false},
              {id: "southwestern", title: "Southwestern", selected: false, checked:false},
              {id: "moroccan", title: "Moroccan", selected: false, checked:false},
              {id: "transitional",title: "Transitional", selected: false, checked:false},
              {id: "modern",title: "Modern", selected: false, checked:false},
              {id: "shag",title: "Shag", selected: false, checked:false},
              {id: "boho&bohemian", title: "Boho/Bohemian", selected: false, checked:false},
              {id: "traditional", title: "Traditional", selected: false, checked:false},
              {id: "vintage", title: "Vintage", selected: false, checked:false},
              {id: "updated traditional", title: "Updated Traditional", selected: false, checked:false},
              {id: "kilim&tribal", title: "Kilim/Tribal", selected: false, checked:false},
          ]
      });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(state, {})).toEqual(expectedResult);
  });

  it('should handle the toggleOption action correctly', () => {
    const section ='size';
    const index =0;
    const expectedResult = state.update(section,  (list) =>  list.setIn([index,'checked'], !list.getIn([index,'checked'])));

    expect(appReducer(state, toggleOption(index,section))).toEqual(expectedResult);
  });

  it('should handle the deleteAllFilters correctly - should return the initial state', () => {
      const expectedResult = state;
      expect(appReducer(state, deleteAllFilters())).toEqual(expectedResult);
  });

  it('should handle the applyFilters action correctly', () => {
      const section ='size';
      const expectedResult = state.update(section, (list) => list.map((item)=>item.set('selected',item.get('checked'))));
      expect(appReducer(state, applyFilters(section))).toEqual(expectedResult);
  });

  it('should handle the cancelFilters action correctly', () => {
      const section ='size';
      const expectedResult = state.update(section,  (list) => list.map((item)=>item.set('checked', false)));
      expect(appReducer(state, cancelFilters(section))).toEqual(expectedResult);
  });

  it('should handle the deleteFilter action correctly', () => {
      const section ='size';
      const id ='2x3';

      const idx = state.get(section).findIndex((item) =>item.get('id') === id);
      const expectedResult = state.update(section, (list) =>  list.setIn([idx,'selected'], false).setIn([idx,'checked'], false));
      expect(appReducer(state, deleteFilter(id, section))).toEqual(expectedResult);
  });

});
