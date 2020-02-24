import React from "react";
import {
  useParams
} from "react-router-dom";
import './Online.css';

const Online = props => {
    let { lock } = useParams();
    return(
        <h2>Online { lock }</h2>
    )
}

export default Online;