import React, { useEffect, useState }from "react";
import Button from '@material-ui/core/Button';

const BtnSender = props => {

    const [text, setText] = useState("Submit");

    useEffect(() => {
        if(props.send){
            setText("Envoyé")
            setTimeout(() => {
                setText("Submit")
            }, 600);
        }
    }, [props.send]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Button variant="contained" color="primary" onClick={props.Click} >
            {text}
        </Button> 
    )

}

export default BtnSender;