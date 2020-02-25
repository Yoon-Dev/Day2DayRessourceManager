import React, { useEffect, useRef } from "react";
import './UpdateForm.css';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// component

const UpdateForm = props => {
    console.log(props)

    const delay = useRef(300)
    const useStyles = makeStyles( () => createStyles({
        el: {
            transition: `all .${delay.current}s ease`,
            fontSize: "1.8em",
            position: "absolute",
            zIndex: "9999",
            minHeight: "100vh",
            minWidth: "100vw",
            backgroundColor: "aquamarine",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            top: "0"
        },
      }));
    const style = useStyles();

    useEffect(() => {
        const self = document.getElementsByClassName(props.data.id)[0]
        console.log(self)
        self.classList.remove("update-form-out")
        self.classList.add("update-form-in")
        return () => {
            console.log("###unmount")
        };
    });
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// remove the component
    const remove = () => {
        const self = document.getElementsByClassName(props.data.id)[0]
        self.classList.remove("update-form-in")
        self.classList.add("update-form-out")
        setTimeout(() => {
            props.rm()
        }, delay.current);
    }
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <div className={`update-form-out ${props.data.id} ${style.el}`}>
            <IconButton aria-label="delete" onClick={remove}>
                <ClearIcon/>
            </IconButton>
            <input type="text"/>
        </div>
    )
}

export default UpdateForm;
