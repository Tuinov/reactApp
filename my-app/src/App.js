
import React, { useEffect, useState } from 'react';
import './App.css';

export function App() {
  console.log(this);
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState('inputValue');

  useEffect(() => {
    setMessageList([{author: 'john', text: 'lorem lorew'}, {author: 'Don', text: 'lorem second'}]);
    console.log("like didUpdate");
  },[]);

  useEffect(() => {
    console.log("Отправка письма пользователю..");
  },[messageList]);

 
  return (
    <>
    {console.log('messageList', messageList)}
     {messageList.map((message) => <div key={message.author}>
       {message.author} - {message.text}
       </div>)};
       <h1>{inputValue}</h1>
     <input placeholder="text" value={inputValue} onChange={event => setInputValue(event.target.value)}/>
     <input placeholder="autor" value="" onChange=""/>
     <button onClick={() => setMessageList([...messageList, {author: 'autor', text: inputValue}])}>Send</button>

    </>  
  );
}

