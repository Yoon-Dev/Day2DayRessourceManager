import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// component
import Item from '../Item/Item';
const Real = props => {

    const useStyles = makeStyles( () => createStyles({
        m: {
            marginTop: "15vh"
        },
        p: {
            padding: "0px 20px"
        }
      }));
    const style = useStyles();
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
            <Item key={item.id} id={item.id} nom={item.nom}></Item>  
        );
        return items;
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°   
    let url = useLocation() 
    if(url.pathname === "/list/wishlist") {
        return null
    }else{
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
        return(
            <div className="view"  id="add-real">
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} className={style.m}> 
                        <ul>
                            <Grid container className={style.p} justify="center" alignItems="center">
                                { on ? items : "loading" } 
                            </Grid>
                        </ul>
                    </Grid>
                </Grid>
            </div>  
        )
    }
}
export default Real;