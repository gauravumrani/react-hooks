## Use State Hook

`useState` hook lets you to use state within a function component.
You can initialize `useState` hook using

```
const [name, setName] = useState('Gaurav');
```

The `useState` hooks takes default state in parameter.
And it returns array in which first one is the state value and second one is the function that update the state.

So if you print the value `<div>{name}</div>`. It will show `<p>Gaurav</p>` and if you want to updated the state, call the `setName('some more')` function with update state value in parameter.

The return values in array can be anything, for example purpose, I have used `name` and `setName`.
