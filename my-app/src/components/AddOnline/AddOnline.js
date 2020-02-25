import React, { useRef, useState }    from "react";
import './AddOnline.css';
// component
import ExtensibleInput from "../ExtensibleInput/ExtensibleInput";
import BtnSender from '../BtnSender/BtnSender';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const AddOnline = () => {

  const urlid = useRef("onlineextin")
  const nomid = useRef("nomonline")
  const [send, setSend] = useState(false);
  const useStyles = makeStyles((theme) => createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
    },

  }));
  const classes = useStyles();

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// throw data on the end point Online/Add.php
const throwData = () => {

  let url = document.querySelector(`#${urlid.current}`).value
  let nom = document.querySelector(`#${nomid.current}`).value
if(url && nom){
    fetch(`http://apires.localhost/src/OnlineAdd.php?nom=${nom}&url=${url}`).then(() =>{
    setSend(true)
    document.querySelector(`#${urlid.current}`).value = ""
    document.querySelector(`#${nomid.current}`).value = ""
    })
  }else{
    setSend('error')
  }
    setTimeout(() => {
      setSend(false)     
    }, 200);

  

}
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
      <div className="view" id="add-online">
        <Grid container spacing={10} justify="center" alignItems="center">
          <Grid className={classes.root} item xs={12}>
            <input className="input-text" id={nomid.current} type="text" placeholder="nom"/>
          </Grid>
          <Grid className={classes.root} item xs={12}>
            <ExtensibleInput value="" id={urlid.current}  placeholder="url"/>
          </Grid>
          <Grid className={classes.root} item xs={12}>
            <BtnSender send={send} Click={throwData} id="onlinesend"/>
          </Grid>   
        </Grid>
      </div>
      
    ); 
  
}

export default AddOnline;