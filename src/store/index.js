import {compose,createStore,applyMiddleware} from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

// For production

const store = createStore(rootReducer,compose(applyMiddleware(...middleware)))


//for dev

// const store = createStore(rootReducer,compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))


export default store;

