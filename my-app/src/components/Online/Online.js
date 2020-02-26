import React, { useEffect, useState } from "react";
import './Online.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
// component
import OnlineItem from '../OnlineItem/OnlineItem';


const Online = props => {

    const useStyles = makeStyles( () => createStyles({
      m: {
          marginTop: "15vh"
      },
      p: {
          padding: "0px 20px"
      }
    }));
    const style = useStyles();

    const [on, setOn] = useState(false);
    const [items, setItems] = useState(null);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
            
      fetch("http://apires.localhost/src/OnlineSelect.php")
          .then( res => {
              return res.json()
          }) 
          .then( res => {
              const data = res
              setOn(true)
              setItems(createOnlineItems(data))
          })
          .catch(error => {
              alert(error)
          })
  }, []);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// create Onlineitem component
const createOnlineItems = data => {
  const items = data.map( item => 
      <OnlineItem key={item.id}
      id={item.id} 
      nom={item.nom} 
      url={item.url} 
      livraison={item.livraison} 
      nbr_jour={item.nbr_jour} 
      last_jour={item.last_jour} 
      url_suivi={item.url_suivi}
      numero_suivi={item.numero_suivi}
      priority={item.priority}
      >
      </OnlineItem>  
  );
  return items;
}
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    return(
        <div id="online" className={`${style.m} view`}>
          <Grid container justify="center" alignItems="center">
            { on ? items : "loading" } 
          </Grid>
        </div>
    )
}

export default Online;