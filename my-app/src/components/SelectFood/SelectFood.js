import React from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';


const SelectFood = props => {

  const useStyles = makeStyles((theme) => createStyles({
    bg: {
        transition: "all .3s ease",
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        boxShadow: "rgba(103, 103, 103, 0.45) 4px 4px 15px 2px, rgb(255, 255, 255) -4px -4px 15px 2px",
        border: "1px solid transparent",
        borderRadius: "10px",
        width: "50%" ,
        height: "5vh",
          '&:focus': {
          border: '3px solid #C2B548',
          outline: "none"
        }
    },
  }));
  const bg = useStyles();
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
        <select
        id="select"
        label="Select"
        value={props.value}
        onChange={props.Change}
        className={bg.bg}
      >
        {values.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    )

}

export default SelectFood;