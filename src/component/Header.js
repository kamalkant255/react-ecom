import React from "react";
import "../style/header.css";
export default function Header(){
  return(
    <>

   <div className="nav">
    <div className="head">
     <ul className="list">
       <li>Logo</li>
       <li>Ecommerce</li>
      
       </ul>
    </div>
    {/* SEARCH VAR   */}
    <div className="search-bar">
            <div clasclassNames="search">
                <input type="text" placeholder="Search..." className="place"/>
                
            </div>
        </div>

    {/* right */}
    <div className="right">
      Cart
      </div>



   </div>




  </>

  );


}