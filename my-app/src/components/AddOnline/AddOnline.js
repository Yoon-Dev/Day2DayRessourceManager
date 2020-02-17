import React, { useRef, useState }    from "react";
// component
import ExtensibleInput from "../ExtensibleInput/ExtensibleInput";
import BtnSender from '../BtnSender/BtnSender';
import TextField from '@material-ui/core/TextField';

const AddOnline = () => {

  const dataid = useRef("onlineextin")
  const [send, setSend] = useState(false);


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
        <TextField id="standard-basic" label="nom" />
        <ExtensibleInput value="" id={dataid.current}  placeholder="url"/>
        <BtnSender send={send} Click={throwData}/>
      </div>
      
    ); 
  
}

export default AddOnline;