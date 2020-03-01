import React, { useEffect, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Hammer from 'hammerjs';


const Item = props => {

    const delay = useRef(300)
    const useStyles = makeStyles( () => createStyles({
        m: {
            marginTop: "5vh",
            transition: "all ."+delay.current+"s ease"
        },
        rm: {
            opacity: 0,
            height: 0,
            transform: "translateX(100px)",
            fontStyle: "italic"
        },
        el: {
            transition: "all ."+delay.current+"s ease",
            fontSize: "1.8em"
        }
      }));
    const style = useStyles();
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// set hammerjs event 
    useEffect(() => {
        const self = document.getElementById(props.id)
        const hammer = new Hammer(self)

        hammer.on('tap', e => {
            if(e.tapCount === 2){
                delItemBack(props.id)
                self.children[0].classList.add(style.rm)
                setTimeout(() => {
                    self.parentNode.removeChild(self); 
                }, delay.current);
            }
        })
    });
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// send a request to delete the ressouce in BDD
    const delItemBack = (id) => {
        fetch("https://apid2d.pierre-monier.com/src/Del.php?id="+id)
            .then( res => {
                return res.json()
            })
            .then( res => {
                if(res[0] !== "succes"){
                    alert("error when deleting")
                }
            })
            .catch(error => {
                alert(error)
            })
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
    return(
    <Grid id={props.id} className={style.m} item xs={12}>
        <li className={style.el}>{props.nom}</li> 
    </Grid>
    )
}

export default Item;