import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "shared/api/api";
import { setupListeners } from '@reduxjs/toolkit/query';


export const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)