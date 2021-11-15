import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from './reducers/user.reducer.js'
import { postReducer } from './reducers/post.reducer.js'

const rootReducer = combineReducers({
    userModule: userReducer,
    postModule: postReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))