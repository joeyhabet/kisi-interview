import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// @ts-ignore
import Kisi from 'kisi-client'
import rootReducer from 'Store/Reducers'
import rootSaga from 'Store/Sagas'


const persistConfig = {
    key: 'KISI-PRODUCTION',
    storage,
    whitelist: []
}

const configStore = () => {
    const middleware = []

    const kisiClient = new Kisi()

    const sagaMiddleware = createSagaMiddleware({
        context: {
            kisiClient
        }
    })
    middleware.push(sagaMiddleware)

    let enhancer = applyMiddleware(...middleware)

    const persistedReducer = persistReducer(
        persistConfig,
        rootReducer
    )

    const store = createStore(persistedReducer, enhancer)
    const persistor = persistStore(store)

    sagaMiddleware.run(rootSaga)

    return { store, persistor }
}

export default configStore