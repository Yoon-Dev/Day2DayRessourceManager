import React from "react";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import './List.css';
// component
import AddViews from '../AddViews/AddViews';
import Online from '../Online/Online';

export default function List() {
  let match = useRouteMatch();
  console.log(`${match.path}/wishlist`)

  // const [current, setCurrent] = useState(0);
  return (
    <div>
      <div id="list">
        
        <Switch>
          <Route exact path={match.path}>
            <AddViews comp1={2} comp2={3}/>
          </Route>
          <Route path={`${match.path}/wishlist`}>
            <Online/>
          </Route>
        </Switch>
      </div>
    </div>
    );
}
