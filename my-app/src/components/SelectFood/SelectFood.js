import React from "react";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const SelectFood = props => {

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
        value: 'fjoze, jioezdjoze, djoizjd ,dopzdkjo, ',
        label: '฿',
        },
        {
        value: 'b, oignon, tatam',
        label: '¥',
        },
        {
        value: false,
        label: 'Annuler'
        }
    ];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
// option default value 
    // const [value, setValue] = useState('EUR');
    return(
        <TextField
        id="select"
        select
        label="Select"
        value={props.value}
        onChange={props.Change}
        helperText="Please select your currency"
        variant="outlined"
      >
        {values.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    )

}

export default SelectFood;