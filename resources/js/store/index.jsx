import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { thunk } from 'redux-thunk';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;


// import createSagaMiddleware from 'redux-saga';
// import { watchLogin } from './sagas';
// import { configureStore } from '@reduxjs/toolkit';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//     reducer: rootReducer, // Replace with your root reducer
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(watchLogin);

// export default store;
