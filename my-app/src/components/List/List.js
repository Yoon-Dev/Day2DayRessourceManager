import React, { useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import './List.css';
// component
import Real from '../Real/Real';
import Online from '../Online/Online';
import BtnMap from '../BtnMap/BtnMap';

export default function List() {
  let match = useRouteMatch();


  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div id="list">
        <Real/>
        <Switch>
          <Route path={`${match.path}/wishlist/:lock`}>
            <Online/>
          </Route>
        </Switch>
      </div>
      <BtnMap click={() => {console.log("click")}} fcttarget={() => {console.log("fcttarget")}} target={current} urlsc="/wishlist/yes" lock="/list/wishlist/no"/>
    </div>
    );
}
