import React, { useEffect, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Hammer from 'hammerjs';


const Item = props => {

    const delay = useRef(300)
    const useStyles = makeStyles( () => createStyles({
        m: {
            marginTop: "3vh",
            transition: "all ."+delay.current+"s ease"
        },
        rm: {
            opacity: 0,
            height: 0
        },
        el: {
            transition: "all ."+delay.current+"s ease"
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

    return () => {
        console.log("Unmount")
    };
    });
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// send a request to delete the ressouce in BDD
    const delItemBack = (id) => {
        fetch("http://apires.localhost/src/Del.php?id="+id)
            .then( res => {
                return res.json()
            })
            .then( res => {
                console.log(res[0])
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