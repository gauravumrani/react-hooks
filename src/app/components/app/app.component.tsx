
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {Home} from '@components';

import './app.styles.css';

const App = (): JSX.Element => {
  return (
    <div className="center-wrap">
      <Router>
        <div>
          <nav>
            <img className="logo" src={require('@assets/images/icon.png')} alt="" />
            <ul id="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <br/>
          <br/>
          <br/>
          <div>
            <Link to="/" className="button round dark button-big">Home</Link>
            <br/> <br/> <br/> <br/> <br/> <br/>
            <Link to="/" className="button round dark button-big">useState</Link>
            <Link to="/" className="button round dark button-big">useRef</Link>
            <Link to="/" className="button round dark button-big">useEffect</Link>
            <Link to="/" className="button round dark button-big">useMemo</Link>
            <Link to="/" className="button round dark button-big">useCallback</Link>
            <Link to="/" className="button round dark button-big">useReducer</Link>
            <Link to="/" className="button round dark button-big">useContext</Link>

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
