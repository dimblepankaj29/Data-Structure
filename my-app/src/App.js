import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tooltip from './Component/TooltipComponent'

class App extends Component {
  render() {
    const toolTipText = "This is text from props";
    return (
      <div >
        <h1>Controls</h1>
        <h4 className="padding-20">ToolTip</h4>
        <div className="padding-20">
          <Tooltip toolTipText = {toolTipText}/>
        </div>
      </div>
    );
  }
}

export default App;
