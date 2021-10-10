
import React from 'react';
import './App.css';

export class TreningClass extends React.Component {
  constructor(props){
    super(props);
    console.log('constructor');
    this.state = {count: 0};
    //this.state = [{author: 'john', text: 'lorem lorew'}, {author: 'Don', text: 'lorem second'}];
  }
  
  foo = () => {
    console.log(this);
 };

 /**
  * Расчитать новое состояние
  */
 static getDerivedStateFromProps(props, state) {
   return null;

 };

 /**
  * вызывается 1 раз(синхронно) при монтировании компонента в дом
  * запросы, подписки, мутации, работа с дом и тд
  */
 componentDidMount() {
  console.log('componentDidMount');
 }

 /**
  * Указать компоненту необходимость следующего рендера
  */
 shouldComponentUpdate(nextProps, nextState) {}

 //getSnapshotBeforeUpdate(prevProps, prevState){}

 //shouldComponentUpdate(prevProps, prevState, snapshot){}

 
  render(){
    const count = this.state.count;
    console.log(this.state.count)
    return <div className="App">
        <div onClick={this.foo} >Trening {count}</div>   
    </div>;
  }
}