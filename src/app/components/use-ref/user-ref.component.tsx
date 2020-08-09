
import * as React from 'react';

/* class UseRef extends React.Component <{}, {name: string}> {
  textInput: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props);
    this.textInput = React.createRef();
    this.getName = this.getName.bind(this);
  }

  getName(): any {
    alert(this.textInput.current ? this.textInput.current.value: '');
  }

  render(): any {
    return(
      <div>
        This is an Example of ref in Class based component
        <br/>
        <br/>
        <input type="text" ref={this.textInput}/>
        <button onClick={this.getName}>Get Name</button>
      </div>
    )
  }
} */


function UseRef(): JSX.Element {
  const textInput = React.useRef<HTMLInputElement>(null);
  function getName(): any {
    alert(textInput.current ? textInput.current.value: '');
  }
  return (
    <div>
      This is an Example of ref in function based component
      <br />
      <br/>
      <input type="text" ref={textInput}/>
      <button onClick={getName}>Get Name</button>
    </div>
  );
}



// use ref vs use state
/* function UseRef(): JSX.Element {
  const textInput = React.useRef<HTMLInputElement>(null);
  const [name, setName] = React.useState('');
  function getName(): any {
    // alert(textInput.current ? textInput.current.value: '');
    alert(name);
  }
  console.log('render')
  return (
    <div>
      This is an Example of ref in function based component
      <br />
      <br/>
      <input type="text" ref={textInput} onChange={(e): void => setName(e.target.value)}/>
      <button onClick={getName}>Get Name</button>
    </div>
  );
} */

export default UseRef;

