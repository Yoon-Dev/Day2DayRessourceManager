import React, { useState }    from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
// component


// lorsque l’on modifie une variable d’état sa valeur est remplacée et non fusionnée, contrairement à this.setState dans les classes.



const AddReal = () => {

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// the input field where the data is stored
  const ressource = document.querySelector('#test')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// option values
    const values = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        }
      ];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// option default value 
      const [value, setValue] = useState('');
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Onchange event of select input
      const handleChange = e => {
        // the event is faster than the function
          setValue(e.target.value);
          console.log(ressource);
          let tryi = document.querySelector('#select')
          console.log(tryi, tryi.textContent)
  
          document.querySelector('#test').value += value
          let label = document.querySelector('#test-label');
  
          if(label.getAttribute("data-shrink") !== "true"){
            label.setAttribute("data-shrink", "true")
            label.classList.add('MuiInputLabel-shrink')
          }

      }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Onclcik btn event, prepapre the data for the Real/Add endpoint on the API 
    const PrepareData = () => {

    let data =   ressource.value
    if(data){
        console.log(data)
    }
  }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// Send the prepared data a get request with fetch
    // const  throwData = (url, data) => {
    //   // 
    // }

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <div className="view">
         <TextField
          id="select"
          select
          label="Select"
          value={value}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {values.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            <TextField id="test" label="Name"/>
            <Button variant="contained" color="primary" onClick={PrepareData}>
                Primary
            </Button>

        </div>
    ); 
  
}

export default AddReal;