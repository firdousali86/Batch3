import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import carReducer from './features/cars/carSlice';
import cartReducer from './features/cart/cartSlice';
import {createLogger} from 'redux-logger';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    car: carReducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
