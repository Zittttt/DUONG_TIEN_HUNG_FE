import { applyMiddleware, combineReducers, compose, createStore } from "redux";

//reducers

import { PostReducer } from "./reducers/PostReducer";
import { UserReducer } from "./reducers/UserReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { CommentReducer } from "./reducers/CommentReducer";

//middleware saga
import createMiddleWareSaga from "redux-saga";

import { rootSaga } from "./sagas/rootSaga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
  PostReducer,
  UserReducer,
  CommentReducer,
  LoadingReducer,
});

// let middleWare = applyMiddleware(middleWareSaga);

// export const store = createStore(
//   rootReducer,
//   compose(
//     middleWare,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// const persistConfig = {
//   key: "root",
//   storage,
// };

// export const persist_Reducer = persistReducer(persistConfig, rootReducer);

// //run saga
// middleWareSaga.run(rootSaga);

const persistConfig = {
  key: "root",
  storage,
};

export const persist_Reducer = persistReducer(persistConfig, rootReducer);

export const store = compose(
  applyMiddleware(middleWareSaga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore)(persist_Reducer);

middleWareSaga.run(rootSaga);

export const persistor = persistStore(store);

export default { rootReducer, persistor };
