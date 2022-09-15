import { createStore , applyMiddleware } from "redux"
import { rootReducer } from "./Reducer/index"
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootsaga } from "./Saga/root.saga";


const persistConfig = {
    key: 'root',
    storage,
    whitelist:['auth']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()


const middlewares = [thunk , sagaMiddleware]

const configureStore = () => {
    let store = createStore(persistedReducer , applyMiddleware(...middlewares))
    sagaMiddleware.run(rootsaga)

    return store;
}   

export const store = configureStore()

export let persistor = persistStore(store)

export default store;