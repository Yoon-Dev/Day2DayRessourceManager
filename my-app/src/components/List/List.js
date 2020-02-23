import React, { useState } from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import './List.css';
// component
import Real from '../Real/Real';
import BtnMap from '../BtnMap/BtnMap';

export default function List() {
  let match = useRouteMatch();

  const [current, setCurrent] = useState(0);
  return (
    <div>
      <div id="list">
        <Real/>
        <Switch>
          <Route path={`${match.path}/wishlist`}>
            <h3>Online</h3>
          </Route>
        </Switch>
      </div>
      <BtnMap click={() => {console.log("click")}} fcttarget={() => {console.log("fcttarget")}} target={current}  urlft="" urlsc="/wishlist"/>
    </div>
    );
}
