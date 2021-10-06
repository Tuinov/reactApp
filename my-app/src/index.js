import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, AppClass, Message } from './App';

const msg = "message message message";
const children = "142652627";
const myFoo = (item) => {console.log(item)};



ReactDOM.render(
  <React.StrictMode>
    <App />
    <AppClass arr={[1,2,3]} myFoo={myFoo} test={msg}>
      {children}
    </AppClass>


    


  </React.StrictMode>,
  document.getElementById('root')
);

