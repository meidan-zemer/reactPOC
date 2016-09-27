import React, { Component } from 'react';
import logo from './logo.svg';
import './Scene.css';

class Scene extends Component {
  render() {
    return (
      <div className="Scene">
			<div className="SceneName">{this.props.sceneName}</div>
      </div>
    );
  }
}

export default App;
