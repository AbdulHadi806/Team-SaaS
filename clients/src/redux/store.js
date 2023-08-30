import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiCalls/apiSlice";
import adminSlice from "./slice/adminSlice";

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    adminSlice: adminSlice
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()

            .concat(apiSlice.middleware),
}
)
