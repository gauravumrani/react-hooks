
import * as React from 'react';

function useLocalStorage(key: string, defaultValue: any): any {
  const [value, setLocalStorage] = React.useState((): any => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.warn("Setting localStorage went wrong: ", err);
      return defaultValue;
    }
  });
  const setLocal = (value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorage(value);
  }
  return [value, setLocal];
}

function CustomHooks(): JSX.Element {
  const [name, setName] = useLocalStorage('name', 'Gaurav');
  React.useEffect((): void => {
    setName(name);
  }, [name]);

  return (
    <div>
      This is an Example of a Custom Hook that saves data in local storage
      <br />
        Author: {name}
      <br />
      <input onChange={(e): void => setName(e.target.value)} value={name}/>
    </div>
  );
}

export default CustomHooks;
