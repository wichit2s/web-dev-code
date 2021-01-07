//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './Footer';
//const App = (props) => {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={props.logo} className="App-logo" alt="logo" />
//          <ul>
//            <li>{props.logo}</li>
//            <li>{props.title}</li>
//          </ul>
//        </header>
//      </div>
//    );
//}
//const name = 'App';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.props.logo} className="App-logo" alt="logo" />
          <ul>
            <li>{this.props.logo}</li>
            <li>{this.props.title}</li>
          </ul>
        </header>
        <Footer />
      </div>
    );
  }
}

export default App;
