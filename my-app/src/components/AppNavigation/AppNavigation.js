import React from 'react';
import './AppNavigation.css'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import {
    Link,
    useLocation
  } from "react-router-dom";
const AppNavigation = props => {

    const useStyles = makeStyles( () => createStyles({
        lock: {
            display: "none !important"
        },
        bg: {
          backgroundColor: "#ffffffde"
        }
      }));
    const style = useStyles();

    let url = useLocation() 
    return(
        <div className={props.lock === url.pathname ? style.lock+" appnavigation" : "appnavigation"}>
            <BottomNavigation className={style.bg}>
              <BottomNavigationAction  component={Link}to="/" icon={<AddIcon fontSize={"large"}/>} />
              <BottomNavigationAction component={Link} to="/list" icon={<ListIcon fontSize={"large"}/>} />
            </BottomNavigation>
        </div>
    )
}

export default AppNavigation;