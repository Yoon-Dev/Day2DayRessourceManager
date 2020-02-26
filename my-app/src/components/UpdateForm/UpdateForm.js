import React, { useEffect, useRef, useState } from "react";
import './UpdateForm.css';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// component
import BtnSender from '../BtnSender/BtnSender';

const UpdateForm = props => {

    const delay = useRef(300)
    const useStyles = makeStyles( () => createStyles({
        el: {
            transition: `all .${delay.current}s ease`,
            fontSize: "1.8em",
            position: "absolute",
            zIndex: "9999",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: "aquamarine",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            top: "0",
        },
        positionitem: {
            display: "flex",
            justifyContent: "center"
        },
      }));
    const style = useStyles();
    
    let map = new Map()
    
    const ref = useRef(map.set('url', props.url).set('url_suivi', props.url_suivi).set('numero_suivi', props.numero_suivi))

    const [send, setSend] = useState(false);
    const [livraison, setLivraison] = useState(props.data.livraison);
    useEffect(() => {
        const self = document.getElementsByClassName(props.data.id)[0]
        self.classList.remove("update-form-out")
        self.classList.add("update-form-in")
    }, [props.data.id]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// remove the component
    const remove = () => {
        const self = document.getElementsByClassName(props.data.id)[0]
        self.classList.remove("update-form-in")
        self.classList.add("update-form-out")
        setTimeout(() => {
            props.rm()
        }, delay.current);
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// toggle confir the livraison
    const Livraison = id => {
        // livraison est null
        if(!livraison){
            // frontend update
            setSend(true)
            // parent ud component 
            props.udLivraison(1)
            // local state update
            setLivraison(1)
            // backend update
            fetch(`http://apires.localhost/src/OnlineLivraison.php?type=add&id=${id}`)
            .then( res => {
                return res.json()
            })
            .then( res => {
                if(res[0] !== "succes"){
                    alert("error when updating")
                }
            })
            .catch(error => {
                alert(error)
            })
        // livraison est activé
        }else{
            // frontend update
            setSend(true)
            // parent ud component
            props.udLivraison(null)
            // local state update
            setLivraison(null)
            // backend update
            fetch(`http://apires.localhost/src/OnlineLivraison.php?type=remove&id=${id}`)
            .then( res => {
                return res.json()
            })
            .then( res => {
                if(res[0] !== "succes"){
                    alert("error when updating")
                }
            })
            .catch(error => {
                alert(error)
            })
        }
        setTimeout(() => {
            setSend(false) 
          }, 200);
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// get current value
    const getInputValue = type => {
        let value = document.querySelector(`#${type}`).value
        return value
        // props.data.changeIn(type, value)
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// get current value
    const focusOut = (type, id) => {
        // test if old is different from new
        if(ref.current.get(type) !== getInputValue(type)){
            // update DataBase
            fetch(`http://apires.localhost/src/OnlineUpdateSolo.php?type=${type}&value=${getInputValue(type)}&id=${id}`)
            .then( res => {
                return res.json()
            })
            .then( res => {
                if(res[0] !== "succes"){
                    alert("error when updating")
                }
            })
            .catch(error => {
                alert(error)
            })
        }

    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        
            <div className={`${props.data.id} ${style.el}`}>
                <Grid container justify="center" alignItems="center">
                    <Grid className={style.center} item xs={12}>
                        <IconButton aria-label="clear-form" onClick={remove}>
                            <ClearIcon/>
                        </IconButton>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        <input type="text" onChange={() => {props.changeUrl(getInputValue("url"))}} name="url" defaultValue={props.url} onBlur={() => {focusOut("url", props.data.id)}} id="url"/>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        <input type="text" onChange={() => {props.changeUrl_suivi(getInputValue("url_suivi"))}} name="url_suivi" defaultValue={props.url_suivi ? props.data.url_suivi  : ""} id="url_suivi"/>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        <input type="text" onChange={() => {props.changeNumero_suivi(getInputValue("numero_suivi"))}} name="numero_suivi" defaultValue={props.numero_suivi ? props.data.numero_suivi : ""} id="numero_suivi"/>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        { livraison ? <BtnSender send={send} Click={() => {Livraison(props.data.id)}} id="updateformsend" text="Annulé la livraison" error="error" succes="Validé"  bg="act-error"/> : <BtnSender send={send} Click={() => {Livraison(props.data.id)}} id="updateformsend" text="Colis acheté" error="error" succes="Validé"/> }          
                    </Grid>
                </Grid>
            </div>

    )
}

export default UpdateForm;
