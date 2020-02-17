import React, { useEffect, useRef } from "react";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// component

const ExtensibleInput = props => {
    
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
        <TextareaAutosize id={props.id} label="Name" placeholder={props.placeholder}/>
    )
}

export default ExtensibleInput;