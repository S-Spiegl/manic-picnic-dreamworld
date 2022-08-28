import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
// import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/es/storage/session.js'
import reducers from '../reducers/index.js';
import { combineReducers } from 'redux';
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

// const persistConfig = {
//   key: 'counter',
//   storage: storage
// };

// const persistedReducer = persistReducer(persistConfig, reducers);

export default store;

// const configureStore = require('@reduxjs/toolkit').configureStore;

// export default configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//           serializableCheck: {
//               ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//       }),
// });