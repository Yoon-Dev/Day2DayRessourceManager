import React, { useEffect, useState }from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const BtnSender = props => {

    const [text, setText] = useState("Submit");
    const useStyles = makeStyles((theme) => createStyles({
        bg: {
            backgroundColor: '#C2B548'
        },
      }));
      const bgbtn = useStyles();
    useEffect(() => {
        if(props.send === true){
            setText("Envoyé")
            setTimeout(() => {
                setText("Submit")
            }, 600);
        }
        else if(props.send === "error"){
            setText("Empty")
            setTimeout(() => {
                setText("Submit")
            }, 600);
        }
    }, [props.send]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <Button variant="contained" className={bgbtn.bg} onClick={props.Click} >
            {text}
        </Button> 
    )

}

export default BtnSender;