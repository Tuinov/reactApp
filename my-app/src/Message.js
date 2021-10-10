
import React from 'react';
import './App.css';



// export default App;

export class Message extends React.Component {
  render(){
    console.log(this.props);
    return <div className="App">
        <div >Message {this.props.test}</div>
        <div >child {this.props.children}</div>
    </div>;
  }
}