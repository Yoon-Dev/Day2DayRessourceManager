import React, {useState, useRef} from "react";
// component
import SelectFood from '../SelectFood/SelectFood';
import ExtensibleInput from '../ExtensibleInput/ExtensibleInput';
import BtnSender from '../BtnSender/BtnSender';

// lorsque l’on modifie une variable d’état sa valeur est remplacée et non fusionnée, contrairement à this.setState dans les classes.



const AddReal = () => {

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// option default value 
  const [value, setValue] = useState('');
  const [send, setSend] = useState(false);
  const dataid = useRef("extin")
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
      fetch('http://apires.localhost/src/RealAdd.php?nom='+data).then(() =>{
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
          <SelectFood value={value} Change={handleChange}/>
          <ExtensibleInput value={value} id={dataid.current} placeholder="Liste de course"/>
          <BtnSender send={send} Click={throwData}/>
        </div>
    ); 
  
}

export default AddReal;