import {APPLY, DELETE, DELETE_ALL, CANCEL, TOGGLE_OPTION } from '../App/constants';


export function cancelFilters(section) {
    return {
        type: CANCEL,
        section
    };
}

export function applyFilters(section) {
    return {
        type: APPLY,
        section
    };
}

export function deleteFilter(id, section) {
    return {
        type: DELETE,
        id,
        section
    };
}

export function deleteAllFilters() {
    return {
        type: DELETE_ALL
    };
}


export function toggleOption(index, section) {
    return {
        type: TOGGLE_OPTION,
        index,
        section
    };
}


