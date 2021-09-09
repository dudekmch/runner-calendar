import { configureStore, createSlice } from "@reduxjs/toolkit"

const trainingTableIntervalTypeFilterInitState = { filters: [] as string[] }

const trainingTableIntervalTypeFilterSlice = createSlice({
    name: 'trainingTableIntervalTypeFilter',
    initialState: trainingTableIntervalTypeFilterInitState,
    reducers: {
        addFilter(state, action){
            state.filters.push(action.payload)
        },
        removeFilter(state, action){
            state.filters = state.filters.filter(filter => filter !== action.payload)
        },
        resetFilters(state){
            state.filters = [];
        }
    }
})

const store = configureStore({
    reducer: {
        intervalTypesFilter: trainingTableIntervalTypeFilterSlice.reducer
    }
})

export const intervalTypesFilterActions = trainingTableIntervalTypeFilterSlice.actions;

export default store;