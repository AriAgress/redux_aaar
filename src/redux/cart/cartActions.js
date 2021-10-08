import { INCREMENT } from "./productTypes";
import { DECREMENT } from "./productTypes";

export const buyProduct = (id) => {
  return{
    type: INCREMENT,
    payload: id,
  }
}

export const removeProduct = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};