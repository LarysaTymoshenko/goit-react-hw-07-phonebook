import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-aactions';

export const filterReducer = createReducer('', {
  [setFilter]: (_, { payload }) => payload,
});
