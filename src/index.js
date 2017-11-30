import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import App from './containers/App'
import rootReducers from './reducers/rootReducers'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
const middleware = [ thunk ];
let store = createStore(
    rootReducers,
    applyMiddleware(...middleware)
)

store.subscribe(() => console.log('store', store.getState()));

render(
    <Provider store={store}>
        <App/>
    </Provider> , 
    document.getElementById('root'));

