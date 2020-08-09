
import * as React from 'react';

class UseState extends React.Component <{}, {name: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Gaurav'
    }
    this.updateName = this.updateName.bind(this);
  }

  updateName(): any {
    this.setState({
      name: this.state.name === 'Gaurav' ? 'Gaurav Umrani': 'Gaurav'
    });
  }

  render(): any {
    return(
      <div>
        This is an Example of Class based component
        <br/>
        Author: {this.state.name}
        <br/>
        <button onClick={this.updateName}>Add/Remove Surname</button>
      </div>
    )
  }
}


/* function UseState(): JSX.Element {
  const [name, setName] = React.useState('Gaurav');
  function updateName(): any {
    setName(name === 'Gaurav' ? 'Gaurav Umrani' : 'Gaurav');
  }
  return (
    <div>
      This is an Example of Hooks based component
      <br />
        Author: {name}
      <br />
      <button onClick={updateName}>Add/Remove Surname</button>
    </div>
  );
} */

export default UseState;






/* const use = new UseState()

user.updateName(); // ok, parent is user

var updateName = use.updateName; // error

updateName(); parent is undefined*/
