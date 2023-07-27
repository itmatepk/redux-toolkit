import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "../store/slices/product";
import cartSlice from "../store/slices/cart";
import { postApi } from "./slices/postApi";
import { setupListeners } from '@reduxjs/toolkit/query'
import { bookApi } from "./slices/bookApi";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'ratanlal',
  storage,
}
 
const rootReducer = combineReducers( {
  // define state or data
  productArray: productSlice,
  cartArray: cartSlice,
  [postApi.reducerPath]: postApi.reducer,
  [bookApi.reducerPath]: bookApi.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
 


export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([postApi.middleware,bookApi.middleware]),
});

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
