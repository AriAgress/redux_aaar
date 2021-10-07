import React from "react";
import './App.css'

import AppBody from "./components/AppStyles";
import Products from './components/Products';

function App() {

  return (
    <AppBody className="App" >
      <Products />
    </AppBody>
  );
}

export default App;
