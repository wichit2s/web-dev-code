//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Footer from './Footer.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pictureId: 500
    };
  }

  tick() {
    this.setState({
      pictureId: this.state.pictureId+1,
      random: 'AAAA'
    });
  }

  componentDidMount() {
    console.log('App เริ่มแสดงผลละ');
    this.timerId = setInterval( () => this.tick , 1000);
  }

  componentWillUnmount() {
    console.log('App กำลังจะหาย');
    clearInterval(this.timerId);
  }

  render() {
    const url = `https://picsum.photos/id/${this.state.pictureId}/300/300`;
    return (
      <div className="App">
        <header className="App-header">
          <img src={url} className="App-logo" alt="logo" />
        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
