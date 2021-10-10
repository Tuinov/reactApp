
import React, { useEffect, useState } from 'react';
import './App.css';
import { Message } from './Message';


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

