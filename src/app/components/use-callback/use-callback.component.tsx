
import * as React from 'react';

const ShowItems = ({itemsFunc}: {itemsFunc: any}): any => {
  const [items, setItems] = React.useState([]);
  React.useEffect((): any => {
    console.log('child render')
    setItems(itemsFunc(5));
  }, [itemsFunc])
  return (
    <>
     {
       items.map((item): any => {
         <div>{JSON.stringify(item)}</div>
       })
     }
    </>
  )
}

// memoize function
function UseCallback(): JSX.Element {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');
  const inc = (): any => {
    setCount((prevCount: number): any => {
      return prevCount + 1
    });
  }

  /* const itemsFunc = React.useCallback((num: number): any => {
    // eslint-disable-next-line no-empty
    return [num * 2];
  }, [count]); */
  const itemsFunc = (num: number): any => {
    return [num * 2];
  };
  return (
    <div>
      This is an Example useCallback in function based component
      <br />
      <ShowItems itemsFunc={itemsFunc}/>
      <br/>
      <button onClick={inc}>Increment</button>
      <br/>
      <input type="text" value={name} onChange={(e): any => setName(e.target.value)}/>
    </div>
  );
}

export default UseCallback;

