import React from "react";
import './App.css'
import {Provider} from 'react-redux'
import store from './redux/store'

import AppBody from "./components/AppStyles";
import Products from './components/Products';

function App() {

  return (
    <Provider store={store} >
      <AppBody className='App'>
        <Products />
      </AppBody>
    </Provider>
  );
}

export default App;
