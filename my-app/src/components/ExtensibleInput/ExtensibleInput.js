import React, { useEffect, useRef } from "react";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// component

const ExtensibleInput = props => {
    //     border: none;
    // border-radius: 10px;
    // box-shadow: rgba(103, 103, 103, 0.45) 4px 4px 15px 2px, rgb(255, 255, 255) -4px -4px 15px 2px;
    // background-color: rgba(255, 255, 255, 0.61);
    const useStyles = makeStyles((theme) => createStyles({
        bg: {
            transition: "all .3s ease",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            boxShadow: "rgba(103, 103, 103, 0.45) 4px 4px 15px 2px, rgb(255, 255, 255) -4px -4px 15px 2px",
            border: "1px solid transparent",
            borderRadius: "10px",
            width: "50%",
            '&:focus': {
            border: '3px solid #C2B548',
            outline: "none"
          }
        },
      }));
      const bg = useStyles();
    const id = useRef(`#${props.id}`)
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// function call every time props.value change
    useEffect(() => { 
            const self  = document.querySelector(id.current)
            let val = props.value

            if(val){
                self.value += val
                self.style.height = self.scrollHeight+'px'
                
            }else{
                // self.value = ''
                // self.style.height = 'auto'
            }

    }, [props.value]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <TextareaAutosize className={bg.bg}id={props.id} label="Name" placeholder={props.placeholder}/>
    )
}

export default ExtensibleInput;