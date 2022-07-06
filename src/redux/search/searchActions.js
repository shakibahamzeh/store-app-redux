import { SET_TERM } from "./types";

export const setSearchTerm = (term) => ({
    type: SET_TERM,
    payload: term,
});