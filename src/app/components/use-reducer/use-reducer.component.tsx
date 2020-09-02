
import * as React from 'react';

interface Count {
  count: number;
}

function reducer(state: Count, action: string): Count {
  console.log(action)
  switch (action) {
    case 'increment':
      return {
        count: state.count + 1
      };
    case 'decrement':
      return {
        count: state.count - 1
      };
    default: {
      return state;
    }
  }
}

// dispatch call reducer
// action is passed from dispatch to reducer
// reducer updates state from old
function UseReducer(): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, {count: 0})
  return (
    <div>
      This is an Example of useReducer
      <br />
      Count is {state.count}
      <br/>
      <button onClick={(): any => dispatch('increment')}>Increment</button>
      <button onClick={(): any => dispatch('decrement')}>Decrement</button>
    </div>
  );
}

/* function UseReducer(): JSX.Element {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      This is an Example of useReducer
      <br />
      Count is {count}
      <br/>
      <button onClick={(): any => setCount(count + 1)}>Increment</button>
      <button onClick={(): any => setCount(count - 1)}>Decrement</button>
    </div>
  );
} */
export default UseReducer;

