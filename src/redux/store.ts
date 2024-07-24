import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { persistStore } from "redux-persist";
import { rootReducer } from "./reducer";
import { apiRoot } from "./api";

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(apiRoot.middleware),
  devTools: true,
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

const { dispatch } = store;

const useDispatch = () => useAppDispatch<AppDispatch>();

const useSelector: TypedUseSelectorHook<RootState> = useAppSelector;

export { store, persistor, dispatch, useSelector, useDispatch };
