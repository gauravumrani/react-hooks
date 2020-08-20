
import * as React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import {
  Home,
  UseStateComponent,
  UseRefComponent,
  UseEffectComponent,
  UseContextComponent,
  UseMemoComponent,
} from '@components';

import './app.styles.css';

import MyContext from '../context.component';

const App = (): JSX.Element => {
  return (
    <MyContext.Provider value={{appName: 'React Hooks'}}>
      <div className="center-wrap">
        <Router>
          <div>
            <nav>
              <img className="logo" src={require('@assets/images/icon.png')} alt="" />
              <br /> <br />
              <Link to="/" className="button round dark button-big">Home</Link>
            </nav>
            <br /><br />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/use-state" component={UseStateComponent} />
                <Route exact path="/use-ref" component={UseRefComponent} />
                <Route exact path="/use-effect" component={UseEffectComponent} />
                <Route exact path="/use-context" component={UseContextComponent} />
                <Route exact path="/use-memo" component={UseMemoComponent} />
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
    </MyContext.Provider>
  );
}

export default App;
