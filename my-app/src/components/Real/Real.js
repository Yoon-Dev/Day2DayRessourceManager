import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// component
import Item from '../Item/Item';
const Real = (props) => {

    const [on, setOn] = useState(false);
    const [items, setItems] = useState(null);

    useEffect(() => {
           
        fetch("http://apires.localhost/src/RealSelect.php")
            .then( res => {
                return res.json()
            })
            .then( res => {
                const data = res
                setOn(true)
                setItems(createItems(data))
            })
            .catch(error => {
                alert(error)
            })
       return () => {
           console.log("Unmount")
       };
   }, []);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// create item component
    const createItems = data => {
        const items = data.map( item => 
            <Item key={item.id} nom={item.nom}></Item>  
        );
        return items;
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   
    let url = useLocation() 
    if(url.pathname === "/list/wishlist") {
        return null;
      } else {  
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°     
            return(
                <div className="view"  id="add-real">
                    <ul>{ on ? items : "loading" }</ul>
                </div>  
            )
      }
}
export default Real;