
import * as React from 'react';

import MyContext from '../context.component';

/* class UseContext extends React.Component <{}, {name: string}> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: this.context
    }
  }

  render(): any {
    return (
      <MyContext.Consumer>
        {({appName}): any => (
          <div>
            This is an Example of Class based Context
            <br />
            App Name is <strong>{appName}</strong>
            <br />
          </div>
        )}
      </MyContext.Consumer>
    )
  }
} */

function UseContext(): JSX.Element {
  const data = React.useContext<{appName?: string}>(MyContext);

  return (
    <div>
      This is an Example of Hooks based Context
      <br />
        App Name is <strong>{data.appName}</strong>
      <br />
    </div>
  );
}

export default UseContext;
