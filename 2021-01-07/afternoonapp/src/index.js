import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';

//let count = 0;
//
//function tick() {
  //let element = (
  //    <div>
  //      <h1> Title </h1>
  //      <p> time is {count}</p>
  //    </div>
  //  );
  //let element = (
  //    <App title='web title' logo='https://picsum.photos/300/300'>
  //    </App>
  //);

  ReactDOM.render(
    <Header/>,
    document.getElementById('Header')
  );
  ReactDOM.render(
    <App title='web title' logo='https://picsum.photos/300/300'/>,
    document.getElementById('App')
  );
//  count++;
//}
//
//setInterval(tick, 100)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
