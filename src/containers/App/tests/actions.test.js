import { APPLY, DELETE, DELETE_ALL, CANCEL, TOGGLE_OPTION} from '../constants';

import {
  applyFilters, deleteFilter, deleteAllFilters, cancelFilters, toggleOption
} from '../actions';

describe('App Actions', () => {

  describe('deleteAllFilters', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: DELETE_ALL,
      };
    expect(deleteAllFilters()).toEqual(expectedResult);
    });
  });


  describe('applyFilters', () => {
    it('should return the correct type and passed section ', () => {
      const section = 'test';
      const expectedResult = {
        type: APPLY,
        section,
      };
      expect(applyFilters(section)).toEqual(expectedResult);
    });
  });


    describe('cancelFilters', () => {
        it('should return the correct type and passed section ', () => {
            const section = 'test';
            const expectedResult = {
                type: CANCEL,
                section,
            };
            expect(cancelFilters(section)).toEqual(expectedResult);
        });
    });

  describe('deleteFilter', () => {
      it('should return the correct type, id, section', () => {
          const section = 'test';
          const id = '1';
          const expectedResult = {
              type: DELETE,
              id,
              section,
          };
          expect(deleteFilter(id,section)).toEqual(expectedResult);
      });
  });

    describe('toggleOption', () => {
        it('should return the correct type, id, section', () => {
            const section = 'test';
            const index = '1';
            const expectedResult = {
                type: TOGGLE_OPTION,
                index,
                section,
            };
            expect(toggleOption(index,section)).toEqual(expectedResult);
        });
    });
});
