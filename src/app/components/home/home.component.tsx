
import * as React from 'react';
import {Link} from 'react-router-dom';

const Home = (): JSX.Element => {
  return (
    <>
      <h1>
        React Hooks
      </h1>
      <p>React hooks allows you to use state, side effects and many more inside a functional component</p>
      <p>After reading about hooks, you will not use class based components</p>

      <br /><br />
      <div>
        <Link to="/use-state" className="button round dark button-big">useState</Link>
        <Link to="/use-ref" className="button round dark button-big">useRef</Link>
        <Link to="/use-effect" className="button round dark button-big">useEffect</Link>
        <Link to="/use-context" className="button round dark button-big">useContext</Link>
        <Link to="/use-memo" className="button round dark button-big">useMemo</Link>
        <Link to="/use-callback" className="button round dark button-big">useCallback</Link>
        <Link to="/use-reducer" className="button round dark button-big">useReducer</Link>
        <Link to="/use-custom" className="button round dark button-big">Custom Hook</Link>
      </div>
    </>
  )
};

export default Home;
