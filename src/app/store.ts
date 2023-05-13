import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { appReducer } from "app/app.slice";
import { authReducer } from "features/auth/auth.slice";
import { packsReducer } from "features/packs/packs.slice";

const rootReducer = combineReducers({
  counter: counterReducer,
    app: appReducer,
    auth: authReducer,
    packs: packsReducer,
})


export const store = configureStore({
  reducer: rootReducer
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend()
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
// @ts-ignore
window.store = store;

