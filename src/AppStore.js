import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from '../src/Reducer'
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore() {
    let store = null;
    store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store;
}