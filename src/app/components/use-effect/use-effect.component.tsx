
import * as React from 'react';

interface Post {
  id?: number;
  title?: number;
}
const LOADING = 'Loading';

/* class UseEffect extends React.Component <{}, Post> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  getData(id: number): void {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response: any): any => response.json())
      .then((json: Post): any => {
        this.setState(json);
      })
  }

  componentDidMount(): void {
    this.getData(1);
  }

  componentWillUnmount(): void {
    console.log('Exit from component');
  }

  render(): any {
    const {id, title} = this.state;
    return(
      <div>
        This is an Example of use effect alternative in class based
        <br/>
        <br/>
        <div>
          id: {id || LOADING} <br/>
          Title: {title || LOADING} <br/>
        </div> <br/>
        <br/>
        <button onClick={(): void => this.getData(2)}>Get Data for ID 2</button>
      </div>
    )
  }
} */


function UseEffect(): JSX.Element {
  const [state, setState] = React.useState<Post>({});
  const [id, setId] = React.useState(1);

  function getData(id: number): void {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((response: any): any => response.json())
      .then((json: Post): any => {
        setState(json);
      })
  }

  // called whenver something happens
  React.useEffect((): any => {
    getData(id);
    return (): void => {
      console.log('Exit from component');
    }
  }, [id]);

  return (
    <div>
      This is an Example of use effect <br/>
      Selected Id is {id}
      <br />
      <br />
      <div>
        id: {state.id || LOADING} <br />
      Title: {state.title || LOADING} <br />
      </div> <br />
      <br />
      <button onClick={(): void => setId(2)}>Get Data for ID 2</button>
    </div>
  );
}

export default UseEffect;
