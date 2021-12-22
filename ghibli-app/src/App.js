import React from 'react';
import './App.css';
import Age from './Age';
import { getFilmInfo } from './api';

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: 'kim', age: 29, filmData: null };
  }
  componentDidMount() {
    const readFilmData = async () => {
      const filmDataInfo = await getFilmInfo();
      this.setState({ ...this.state, filmData: filmDataInfo });
    };
    readFilmData();
  }
  render() {
    console.log(this.state.filmData);

    return (
      <div className='App'>
        {this.state.name}
        <Age age={this.state.age} />
        <img src={this.state.filmData && this.state.filmData[0].image}></img>
      </div>
    );
  }
}

export default App;
