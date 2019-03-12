import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk'

import shopApp from '../reducers/countReducer';

let store = createStore(shopApp, applyMiddleware(Thunk))

export default store;