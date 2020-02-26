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
        const [url, setUrl] = useState(props.url);
        const [url_suivi, setUrl_suivi] = useState(props.url_suivi);
        const [numero_suivi, setNumero_suivi] = useState(props.numero_suivi);
        const [livraison, setLivraison] = useState(props.livraison);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// set hammerjs event 
    useEffect( () => {
        const self = document.getElementById(props.id)
        const hammer = new Hammer(self)

        hammer.on('press', e => {
            const form = 
                <UpdateForm key={props.id}
                    data={props}
                    url={url}
                    url_suivi={url_suivi}
                    numero_suivi={numero_suivi}
                    changeUrl={setUrl}
                    changeUrl_suivi={setUrl_suivi}
                    changeNumero_suivi={setNumero_suivi}
                    udLivraison={setLivraison}
                    rm={rmForm}
                >
                </UpdateForm>  
        setForm(form) 
        })
    }, [props, url, url_suivi, numero_suivi]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// send a request to delete the ressouce in BDD
    // const delItemBack = id => {
    //     fetch(`http://apires.localhost/src/Del.php?id=${id}`)
    //         .then( res => {
    //             return res.json()
    //         })
    //         .then( res => {
    //             if(res[0] !== "succes"){
    //                 alert("error when deleting")
    //             }
    //         })
    //         .catch(error => {
    //             alert(error)
    //         })
    // }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// unmount the UpdateForm Component
    const rmForm = () => {
        setForm(null)
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
                    <a href={url}>Voir</a> 
                </Grid>
                { livraison ? <h1>Oui</h1> : <h1>Non</h1> }
            </Grid>

        </div>
    </Grid>
    )
}

export default OnlineItem;