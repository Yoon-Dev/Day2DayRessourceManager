import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import './OnlineItem.css';
import Hammer from 'hammerjs';
// component
import UpdateForm from "../UpdateForm/UpdateForm";

const OnlineItem = props => {


        const useStyles = makeStyles( () => createStyles({
          center: {
              display: "flex",
              justifyContent: "center"
          }
        }));
        const style = useStyles();
        const [form, setForm] = useState(null);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// set hammerjs event 
useEffect(() => {
    const self = document.getElementById(props.id)
    const hammer = new Hammer(self)

    hammer.on('press', e => {
        console.log(props)
        setForm(createUpdateForm(props))
    })

    return () => {
        console.log("Unmount")
    };
    });

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// send a request to delete the ressouce in BDD
    const delItemBack = id => {
        fetch(`http://apires.localhost/src/Del.php?id=${id}`)
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
// unmount the UpdateForm Component
    const rmForm = () => {
        setForm(null)
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// create UpdateForm component
    const createUpdateForm = data => {
        const form = 
            <UpdateForm key={data.id}
                data={data}
                rm={rmForm}
            >
            </UpdateForm>  
        return form;
      }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
    return(
    <Grid id={props.id} item xs={12}>
        { form ? form : null }
        <div className="online-card">
            <Grid container justify="center" alignItems="center">
                <Grid className={style.center} item xs={12}>
                    <h4>{props.nom}</h4>
                </Grid>
                <Grid className={style.center} item xs={12}>
                    <a href={props.url}>Voir</a> 
                </Grid>
                { props.livraison ? <h1>Oui</h1> : <h1>Non</h1> }
            </Grid>

        </div>
    </Grid>
    )
}

export default OnlineItem;