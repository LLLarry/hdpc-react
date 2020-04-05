import { createStore,applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

// import {routerMiddleware} from 'react-router-redux';
// import { createBrowserHistory } from 'history';
// const history = createBrowserHistory();
// let routerWare = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
    // applyMiddleware(thunk,routerWare),
    applyMiddleware(thunk),
);
const store= createStore(reducer,enhancer)
export default store