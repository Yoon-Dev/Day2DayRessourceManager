import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
// component
import Real from '../Real/Real';

export default function List() {
  let match = useRouteMatch();
  return (
      <div>
        <ul>
          <li>
            <Link to={`${match.url}`}>Real</Link>
          </li>
          <li>
            <Link to={`${match.path}/wishlist`}>
              Online
            </Link>
          </li>
        </ul>
        <Real/>
        <Switch>
          <Route path={`${match.path}/wishlist`}>
            <h3>Online</h3>
          </Route>
        </Switch>
      </div>
    );
}
