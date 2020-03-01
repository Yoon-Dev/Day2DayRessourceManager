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
            minHeight: "40vh",
            minWidth: "100vw",
            backgroundColor: "#EEE",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            left: "0"
        },
        positionitem: {
            display: "flex",
            justifyContent: "center"
        },
        endposition: {
            display: "flex",
            justifyContent: "flex-end",
            
        },
        container: {
            height: "40vh",
            alignItems: "flex-start"
        },
        bs: {
            boxShadow: "rgba(103, 103, 103, 0.45) 4px 4px 15px 2px, rgb(255, 255, 255) -4px -4px 15px 2px"
        }
      }));
    const style = useStyles();
    
    let map = new Map()
    
    const ref = useRef(map.set('url', props.url).set('url_suivi', props.url_suivi).set('numero_suivi', props.numero_suivi))

    const [send, setSend] = useState(false);
    const [livraison] = useState(props.livraison);

    useEffect(() => {
        
        const self = document.querySelector(`#form${props.data.id}`)
        setTimeout(() => {
            self.classList.remove("update-form-out") 
            self.classList.remove("update-form-out2") 
        }, 1);
        return () => {
            setTimeout(() => {
                
            }, 1);  

        };

    }, [props.data.id]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// remove the component
    const remove = () => {

        const self = document.querySelector(`#form${props.data.id}`)
        focusOut()
        props.changeUrl(getInputValue("url"))
        props.changeUrl_suivi(getInputValue("url_suivi"))
        props.changeNumero_suivi(getInputValue("numero_suivi"))
        self.classList.add("update-form-out2")
        setTimeout(() => {
            props.rm()   
        }, 500);  

    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// confirm livraison
    const confirmLivraison = id => {
        let r = window.confirm("Voulez vous vraiment annulé la livraison ??? :(");
        if (r === true) {
            Livraison(id)
        }
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// toggle confir the livraison
    const Livraison = id => {
        // livraison est null
            if(!livraison){

                // parent ud component 
                props.udLivraison(1)

                // backend update
                fetch(`http://apid2d.pierre-monier.com/src/OnlineLivraison.php?type=add&id=${id}`)
                .then( res => {
                    return res.json()
                })
                .then( res => {
                    if(res[0] !== "succes"){
                        alert("error when updating")
                    }
                    remove()

                })
                .catch(error => {
                    alert(error)
                })
            // livraison est activé
            }else{
                // parent ud component
                props.udLivraison(null)
                // backend update
                fetch(`http://apid2d.pierre-monier.com/src/OnlineLivraison.php?type=remove&id=${id}`)
                .then( res => {
                    return res.json()
                })
                .then( res => {
                    if(res[0] !== "succes"){
                        alert("error when updating")
                    }
                    remove()
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
    const focusOut = () => {
        // test if old is different from new
        const inputs = document.querySelectorAll('.form-input')
        inputs.forEach(el => {
            let typeinput = el.getAttribute('id')
            
            if(ref.current.get(typeinput) !== getInputValue(typeinput)){
                // send BDD request
                if(el.closest(`#form${props.data.id}`)){
                    let idbis = el.closest(`#form${props.data.id}`).getAttribute('data-bdd')
                
                
                    // typeinput && id send request
                    fetch(`http://apid2d.pierre-monier.com/src/OnlineUpdateSolo.php?type=${typeinput}&value=${getInputValue(typeinput)}&id=${idbis}`)
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
        })

    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        
            <div id={`form${props.data.id}`} className={`${style.el} update-form-out online-card`} data-bdd={props.data.id}>
                <Grid container justify="center" alignItems="center" className={style.container}>
                    <Grid className={style.endposition} item xs={12}>
                        <IconButton aria-label="clear-form" onClick={remove} className={style.bs}>
                            <ClearIcon/>
                        </IconButton>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        <input type="text" className="form-input"  name="url" defaultValue={props.url} id="url" placeholder="url de l'article"/>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        <input type="text" className="form-input"  name="url_suivi" defaultValue={props.url_suivi ? props.url_suivi  : ""} id="url_suivi" placeholder="url du suivi de colis"/>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        <input type="text" className="form-input"  name="numero_suivi" defaultValue={props.numero_suivi ? props.numero_suivi : ""} id="numero_suivi" placeholder="numero de suivi"/>
                    </Grid>
                    <Grid className={style.positionitem} item xs={12}>
                        { livraison ? <BtnSender send={send} Click={() => {confirmLivraison(props.data.id)}} id="updateformsend" text="Annulé la livraison" error="error" succes="Validé"  bg="act-error"/> : <BtnSender send={send} Click={() => {Livraison(props.data.id)}} id="updateformsend" text="Colis acheté" error="error" succes="Validé"/> }          
                    </Grid>
                </Grid>
            </div>

    )
}
// onChange={() => {props.changeUrl(getInputValue("url"))}}
// onChange={() => {props.changeUrl_suivi(getInputValue("url_suivi"))}}
// onChange={() => {props.changeNumero_suivi(getInputValue("numero_suivi"))}}
// onBlur={() => {focusOut("url", props.data.id, false)}}
// onBlur={() => {focusOut("url_suivi", props.data.id, false)}}
// onBlur={() => {focusOut("numero_suivi", props.data.id, false)}}
export default UpdateForm;
