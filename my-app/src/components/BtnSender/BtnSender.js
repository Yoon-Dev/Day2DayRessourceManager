import React, { useEffect, useState, useRef }from "react";
import './BtnSender.css';

const BtnSender = props => {

    const [text, setText] = useState(props.text);
    const id = useRef(`#${props.id}`)

    useEffect(() => {
        const self  = document.querySelector(id.current)
        if(props.send === true){
            setText(props.succes)
            self.classList.add('btnsender-active', 'act-succes')
            setTimeout(() => {  
                setText(props.text)
                self.classList.remove('btnsender-active', 'act-succes')
            }, 600);
        }
        else if(props.send === "error"){
            setText(props.error)
            self.classList.add('btnsender-active', 'act-error')
            setTimeout(() => {
                setText(props.text)
                self.classList.remove('btnsender-active', 'act-error')
            }, 600);
        }
    }, [props.send, props.error, props.text, props.succes]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <button className={`btn-style ${props.bg}`} onClick={props.Click} id={props.id}>
            <span>{text}</span>
        </button> 
    )

}

BtnSender.defaultProps = {
    text: "Envoyer",
    error: "Vide",
    succes: "Ajouter",
    bg: null
  }

export default BtnSender;