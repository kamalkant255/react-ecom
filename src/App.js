import React from "react";
import "./style.css";
import Header from './component/Header'
import Category from './component/Category'
import object from "./categoryobject";


 function App() {
  let headerArr = object.map((ele)=>{
    console.log(ele)
    return(
      <>
     <Category info={ele} />  
      </>
    )
  

  })









  return (
    <div>
      <Header/>
      {headerArr}
   
      
    </div>
  );
}
export default App;