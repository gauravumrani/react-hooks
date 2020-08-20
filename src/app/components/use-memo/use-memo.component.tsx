
import * as React from 'react';

// optimize computed value
function heavyFunctionSquare(num: number): number {
  for (let index = 0; index < 10e8; index++) {}
  return num * 2;
}

function UseMemo(): JSX.Element {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');
  const inc = (): any => {
    setCount((prevCount: number): any => {
      return prevCount + 1
    });
  }

  const sq = React.useMemo((): any => {
    return heavyFunctionSquare(10);
  }, [count]);
  console.log(sq)
  return (
    <div>
      This is an Example useMemo in function based component
      <br />
      The total count is {count} and name is {name}
      <br/>
      <button onClick={inc}>Increment</button>
      <br/>
      <input type="text" value={name} onChange={(e): any => setName(e.target.value)}/>
    </div>
  );
}

export default UseMemo;

