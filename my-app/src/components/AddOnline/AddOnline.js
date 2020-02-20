import React, { useRef, useState }    from "react";
// component
import ExtensibleInput from "../ExtensibleInput/ExtensibleInput";
import BtnSender from '../BtnSender/BtnSender';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const AddOnline = () => {

  const dataid = useRef("onlineextin")
  const [send, setSend] = useState(false);
  const useStyles = makeStyles((theme) => createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
  }));
  const classes = useStyles();

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// throw data on the end point Online/Add.php
const throwData = () => {

  let data = document.querySelector(`#${dataid.current}`).value
  if(data){
    fetch('http://apires.localhost/src/RealAdd.php?nom='+data).then(() =>{
    setSend(true)
    document.querySelector(`#${dataid.current}`).value = ''
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
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid className={classes.root} item xs={12}>
            <TextField id="standard-basic" label="nom" />
          </Grid>
          <Grid className={classes.root} item xs={12}>
            <ExtensibleInput value="" id={dataid.current}  placeholder="url"/>
          </Grid>
          <Grid className={classes.root} item xs={12}>
            <BtnSender send={send} Click={throwData}/>
          </Grid>   
        </Grid>
      </div>
      
    ); 
  
}

export default AddOnline;