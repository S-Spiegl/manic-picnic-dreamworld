import thunk from 'redux-thunk';
import reducers from '../reducers/index.js';
import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

export default store;