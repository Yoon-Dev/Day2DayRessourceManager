import React, { useEffect, useState, useRef }from "react";
import './BtnSender.css';

const BtnSender = props => {

    const [text, setText] = useState("Envoyer");
    const id = useRef(`#${props.id}`)

    useEffect(() => {
        const self  = document.querySelector(id.current)
        if(props.send === true){
            setText("Ajouter !")
            self.classList.add('btnsender-active', 'act-succes')
            setTimeout(() => {  
                setText("Envoyer")
                self.classList.remove('btnsender-active', 'act-succes')
            }, 600);
        }
        else if(props.send === "error"){
            setText("Vide")
            self.classList.add('btnsender-active', 'act-error')
            setTimeout(() => {
                setText("Envoyer")
                self.classList.remove('btnsender-active', 'act-error')
            }, 600);
        }
    }, [props.send]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <button className="btn-style" onClick={props.Click} id={props.id}>
            <span>{text}</span>
        </button> 
    )

}

export default BtnSender;