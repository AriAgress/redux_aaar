import { combineReducers } from 'redux';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export default rootReducer;
