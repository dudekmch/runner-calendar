import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IInterval } from "../model/Training";

const trainingTableIntervalTypeFilterInitState = { filters: [] as string[] };

const trainingTableIntervalTypeFilterSlice = createSlice({
  name: "trainingTableIntervalTypeFilter",
  initialState: trainingTableIntervalTypeFilterInitState,
  reducers: {
    addFilter(state, action) {
      state.filters.push(action.payload);
    },
    removeFilter(state, action) {
      state.filters = state.filters.filter(
        (filter) => filter !== action.payload
      );
    },
    resetFilters(state) {
      state.filters = [];
    },
  },
});

const trainingTableIntervalSelectedRowInitState = {
  selectedRows: [] as IInterval[],
};

const trainingTableIntervalSelectedRowSlice = createSlice({
  name: "trainingTableIntervalSelectedRow",
  initialState: trainingTableIntervalSelectedRowInitState,
  reducers: {
    rowHandle(state, action) {
      if (state.selectedRows.filter(row => row.id === action.payload.id).length > 0) {
        state.selectedRows = state.selectedRows.filter(
          (row) => row.id !== action.payload.id
        );
      } else {
        state.selectedRows.push(action.payload);
      }
    },
    resetSelectedRows(state) {
      state.selectedRows = [];
    },
  },
});

const store = configureStore({
  reducer: {
    intervalTypesFilter: trainingTableIntervalTypeFilterSlice.reducer,
    intervalSelectedRow: trainingTableIntervalSelectedRowSlice.reducer,
  },
});

export const intervalTypesFilterActions =
  trainingTableIntervalTypeFilterSlice.actions;
export const intervalSelectedRowActions =
  trainingTableIntervalSelectedRowSlice.actions;

export default store;
