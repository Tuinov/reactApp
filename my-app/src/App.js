
import React from 'react';
import './App.css';

export function App() {
  return (
    <div className="App">hello react</div>
  );
}

// export default App;

export class AppClass extends React.Component {
  render(){
    return <div className="App">
      <ul>
        {this.props.arr.map(item => (
        <li onClick={() => this.props.myFoo(item)} key={item}>
          {item}
        </li>
        ))}
      </ul>
      <Message children={this.props.children} />
    
    </div>;
  }
}

export class Message extends React.Component {
  render(){
    console.log(this.props);
    return <div className="App">
        <div >Message {this.props.test}</div>
        <div >child {this.props.children}</div>
    </div>;
  }
}