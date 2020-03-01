import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// Component
import Add from '../Add/Add';
import List from '../List/List';
import AppNavigation from '../AppNavigation/AppNavigation';



const App = () => {

  const [scroll, setScroll] = useState(0);
  const scrollRef = useRef(scroll)
  const [verif, setVerif] = useState(null);
  const verifRef = useRef(verif)
  useEffect(() => {
    
    window.addEventListener('wheel', e => {

      const btmap = document.querySelector("#btns")
      const navbar = document.querySelector("#navbar")
      if(document.body.scrollTop > scrollRef.current && document.body.scrollTop !== scrollRef.current){
        
        if(verifRef.current !== "down"){
          btmap.classList.add('hide')
          navbar.classList.add('hide')
        }
        setVerif("down")
      }else if(document.body.scrollTop !== scrollRef.current){

        if(verifRef.current !== "up"){
          btmap.classList.remove('hide')
          navbar.classList.remove('hide')
        }
        setVerif("up")
      }
      setScroll(document.body.scrollTop)
      
    }, true)

  }, [scroll]);
  /** 
	 * Updating state varialbe for useEffect
  */
  useEffect(() => {
      scrollRef.current = scroll
  }, [scroll]);
  /**
	 * Updating state varialbe for useEffect
  */
    useEffect(() => {
      verifRef.current = verif
  }, [verif]);

// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°° 
  return (
      <div id="App">  
        <Router>
          <AppNavigation lock="/list/wishlist"/>
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/">
              <Add />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}

export default App;
