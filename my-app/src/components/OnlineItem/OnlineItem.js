import React, { useEffect, useState, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import './OnlineItem.css';
import Hammer from 'hammerjs';
// component
import UpdateForm from "../UpdateForm/UpdateForm";

const OnlineItem = props => {
        /**
         * Style variable
         */
        const useStyles = makeStyles( () => createStyles({
          center: {
              display: "flex",
              justifyContent: "center"
          }
        }));
        const style = useStyles();
        /**
         * State variable
         */
        const [form, setForm] = useState(null);
        const [url, setUrl] = useState(props.url);
        const [url_suivi, setUrl_suivi] = useState(props.url_suivi);
        const [numero_suivi, setNumero_suivi] = useState(props.numero_suivi);
        const [livraison, setLivraison] = useState(props.livraison);
        /**
         * Ref varaible for the useEffect (don't put state variable in asynch variable in useEffect)
         */
        const urlRef = useRef(url)
        const url_suiviRef = useRef(url_suivi)
        const numero_suiviRef = useRef(numero_suivi)
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
                    url={urlRef.current}
                    url_suivi={url_suiviRef.current}
                    numero_suivi={numero_suiviRef.current}
                    changeUrl={setUrl}
                    changeUrl_suivi={setUrl_suivi}
                    changeNumero_suivi={setNumero_suivi}
                    udLivraison={setLivraison}
                    rm={rmForm}
                >
                </UpdateForm>  
        setForm(form) 
        })
    }, [props, url, url_suivi, numero_suivi, form]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    /**
	 * Updating state varialbe for useEffect
     */
    useEffect(() => {
        urlRef.current = url
    }, [url]);
    /**
	 * Updating state varialbe for useEffect
	 */
    useEffect(() => {
        url_suiviRef.current = url_suivi
    }, [url_suivi]);
    /**
	 * Updating state varialbe for useEffect
     */
    useEffect(() => {
        numero_suiviRef.current = numero_suivi
    }, [numero_suivi]);
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
                { livraison && props.url_suivi ?
                <div>
                    <Grid className={style.center} item xs={12}>
                        <h3>##Livraison en cour depuis {props.nbr_jour} jour</h3> 
                    </Grid>
                    <Grid className={style.center} item xs={6}>
                        <h3>{ url_suivi }</h3> 
                    </Grid>
                    <Grid className={style.center} item xs={6}>
                <h3>{ numero_suivi }</h3> 
                    </Grid>              
                </div>

                    
                : livraison ?
                <Grid className={style.center} item xs={12}>
                    <h3>Livraison en cour depuis {props.nbr_jour} jour</h3> 
                </Grid>
                    : null
                }
                 
            </Grid>

        </div>
    </Grid>
    )
}

export default OnlineItem;