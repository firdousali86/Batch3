import carSlice from './cars/carSlice';
import cartSlice from './cart/cartSlice';
import counterSlice from './counter/counterSlice';
import {todosApi} from '../config/todosApi';

export default {
  counter: counterSlice,
  car: carSlice,
  cart: cartSlice,
  todos: todosApi.reducer,
};
