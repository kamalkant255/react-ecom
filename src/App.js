import React from "react";
import "./style.css";
import Header from './component/Header'
import Category from './component/Category'
import object from "./categoryobject";
import Card from "./component/Card"

 function App() {
  return (
    <div>
      <Header/>
      {/* <Category/> */}
      <Card/>
   
      
    </div>
  );
}
export default App;