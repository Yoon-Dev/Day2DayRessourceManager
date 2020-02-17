import React, { useEffect } from "react";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// component

const ExtensibleInput = props => {
    
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// function call every time props.value change
    useEffect(() => {
        const self  = document.querySelector('#extin')
        let val = props.value
        // initH = '15px'
        if(val){
            self.value += val
            self.style.height = self.scrollHeight+'px'
            
        }else{
            self.value = ''
            self.style.height = 'auto'
        }

    }, [props.value]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <TextareaAutosize id="extin" label="Name" placeholder="Empty"/>
    )
}

export default ExtensibleInput;