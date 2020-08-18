
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {Home, UseStateComponent, UseRefComponent, UseEffectComponent} from '@components';

import './app.styles.css';

const App = (): JSX.Element => {
  return (
    <div className="center-wrap">
      <Router>
        <div>
          <nav>
            <img className="logo" src={require('@assets/images/icon.png')} alt="" />
            <br /> <br/>
            <Link to="/" className="button round dark button-big">Home</Link>
          </nav>
          <br/><br/>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/use-state" component={UseStateComponent} />
              <Route exact path="/use-ref" component={UseRefComponent} />
              <Route exact path="/use-effect" component={UseEffectComponent} />
            </Switch>
          </div>
          <br />
          <br />
          <br />
          <div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
