import React, {useState, useRef} from "react";
// component
import SelectFood from '../SelectFood/SelectFood';
import ExtensibleInput from '../ExtensibleInput/ExtensibleInput';
import BtnSender from '../BtnSender/BtnSender';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// lorsque l’on modifie une variable d’état sa valeur est remplacée et non fusionnée, contrairement à this.setState dans les classes.



const AddReal = () => {

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// option default value 
  const [value, setValue] = useState('');
  const [send, setSend] = useState(false);
  const dataid = useRef("extin")
  const useStyles = makeStyles((theme) => createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },
  }));
  const classes = useStyles();
  // °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Onchange event of select input
  const handleChange = e => {

    // the event is faster than the function
      setValue(e.target.value)

  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Onclcik btn event, the data for the Real/Add endpoint on the API 
    const throwData = () => {

    let data = document.querySelector(`#${dataid.current}`).value
    if(data){
      fetch('https://apid2d.pierre-monier.com/src/RealAdd.php?nom='+data).then(() =>{
      setSend(true)
      setValue('')
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
        <div className="view"  id="add-real">
          <Grid container spacing={10} justify="center" alignItems="center">
            <Grid className={classes.root} item xs={12}>
              <SelectFood value={value} Change={handleChange}/>
            </Grid>
            <Grid className={classes.root} item xs={12}>
              <ExtensibleInput value={value} id={dataid.current} placeholder="Liste de course"/>
            </Grid>
            <Grid className={classes.root} item xs={12}>
              <BtnSender send={send} Click={throwData} id="realsend"/>
            </Grid>
          </Grid>
        </div>
    ); 
  
}

export default AddReal;