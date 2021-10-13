import React from "react";
import './App.css'
import {Provider} from 'react-redux'
import store from './redux/store'
// import Cart from './components/Cart.js'
import AppBody from "./components/AppStyles";
import Products from './components/Products';

function App() {

  return (
    <Provider store={store} >
      <AppBody className='App'>
        <Products />
        {/* <Cart /> */}
      </AppBody>
    </Provider>
  );
}

export default App;
