import { createSlice } from '@reduxjs/toolkit';

const filterInitialValue = { value: '' };

const filterValue = createSlice({
  name: 'filter',
  initialState: filterInitialValue,
  reducers: {
    queryFilterValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { queryFilterValue } = filterValue.actions;
export const filterReduser = filterValue.reducer;
