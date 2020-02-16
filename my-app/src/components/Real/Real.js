import React from "react";
import { useLocation } from "react-router-dom";

const Real = (props) => {
    let url = useLocation() 
    if(url.pathname === "/list/wishlist") {
        return null;
      } else {
            return(
                <h2>Real</h2>
            )
      }
}
export default Real;