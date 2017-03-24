/**
 * Created by Administrator on 2017/3/21.
 */
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const store = createStore(reducer, applyMiddleware(logger,thunk));

export default store;