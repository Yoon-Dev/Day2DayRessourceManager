import React, { useEffect, useRef } from "react";
import './BtnMap.css';
import Button from '@material-ui/core/Button';

const BtnMap = props => {

    // const target = useRef(props.target)
    const fct = useRef(props.click)
    const fcttarget = useRef(props.fcttarget)
    


    useEffect(
        () => {

            const btn = document.querySelectorAll('.btn-add')
            btn.forEach((el,i) => {
                if(props.target === i){
                    el.classList.remove("btn-off")
                    el.classList.add("btn-active")
                }else{
                    el.classList.remove("btn-active")
                    el.classList.add("btn-off")
                }
            })
            fct.current(props.target)
        },
        [props.target],
    );

    return(
        <div id="btns">
            <Button className="btn-add btn-active" onClick={() =>{fcttarget.current(0)}}>Real</Button>
            <Button className="btn-add btn-off" onClick={() =>{fcttarget.current(1)}}>Online</Button>
        </div>
    );
}

export default BtnMap