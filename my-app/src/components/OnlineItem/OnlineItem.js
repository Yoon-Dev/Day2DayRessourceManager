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
          },
          mb: {
            marginBottom: "1.33em"
          },
          del: {
              backgroundColor: "red"
          }
        }));
        const style = useStyles();
        /**
         * State variable
         */
        const [form, setForm] = useState(null);
        const [data] = useState(props);
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
        const livraisonRef = useRef(livraison)
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
// set hammerjs event 
    useEffect( () => {
        const self = document.getElementById(props.id)
        const hammer = new Hammer(self)
        hammer.on('press', e => {
            const formComponent = 
                <UpdateForm key={props.id}
                    data={data}
                    livraison={livraisonRef.current}
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
        setForm(formComponent) 
        })
        hammer.on('tap', e => {

            if(e.tapCount === 3){

                self.firstChild.classList.add("act-error")
                self.classList.add("update-form-out2")
                setTimeout(() => {
                    self.parentNode.removeChild(self);
                    delItemBack(self.getAttribute('id'))
                }, 300);
            }

        })
    }, [data, props.id, url, url_suivi, numero_suivi, form]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    /**
	 * Updating state varialbe for useEffect
     */
    useEffect(() => {
        livraisonRef.current = livraison
    }, [livraison]);
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
    return(
    <Grid id={props.id} item xs={9} className="container-online-card">
        <div className="online-card">
            <Grid container justify="center" alignItems="center">
                <Grid className={style.center} item xs={12}>
                    <h4>{props.nom}</h4>
                </Grid>
                <Grid className={livraisonRef.current ? style.center : `${style.center} ${style.mb}`} item xs={12}>
                    <a href={url}>Voir</a> 
                </Grid>
                { form ? form : null }        
                { livraisonRef.current && url_suiviRef.current ?
                <Grid container justify="center" alignItems="center" spacing={1}>
                    <Grid className={style.center} item xs={12}>
                        <p>Livraison en cour depuis <b>{props.nbr_jour ? props.nbr_jour : "aujourd'hui"}</b> jour</p>  
                    </Grid>
                    <Grid className={style.center} item xs={4}>
                        <h5><a href={url_suivi}>Suivi de Colis</a></h5> 
                    </Grid>
                    <Grid className={style.center} item xs={4}>
                        <h5>{ numero_suivi }</h5> 
                    </Grid>              
                </Grid>

                    
                : livraisonRef.current ?
                <Grid className={style.center} item xs={12}>
                    <p>Livraison en cour depuis <b>{props.nbr_jour ? props.nbr_jour : "aujourd'hui"}</b> {props.nbr_jour ? "jours" : null}</p> 
                </Grid>
                    : null
                }
                 
            </Grid>
        </div>
    </Grid>
    )
}

export default OnlineItem;