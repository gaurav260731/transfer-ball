import React, { Component } from 'react';
import './App.css';
//import Bubble from './bubble/bubble'

let dataval = [
  {
    num:'1'
  },{
    num:'2'
  }, {
    num:'3'
  },
  {
    num:'4'
  }
]

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      putval:[],
    };
    this.sendValue = this.sendValue.bind(this);
    this.returnValue = this.returnValue.bind(this);
  }

  sendValue() {
   const {putval} = this.state;
   if(dataval.length > 0) {
   var sval = dataval.shift(putval)
   console.log(sval);
   putval.unshift(sval);
   this.setState({
    putval:putval
   })
  }
  console.log(putval);
  console.log(dataval);
  }

   returnValue() {
    const {putval} = this.state;
    if(putval.length > 0) {
      var sval = putval.shift(dataval)
      console.log(sval);
      dataval.unshift(sval);
      this.setState({
       dataval:dataval
      })
    }
  }

  render() {
    const { putval } = this.state;
    return (
      <div className="App">
        <div className="container">
          {
            dataval.map((val, key) => (
              <div className="sphere3" data-id={val} key={key}></div>
            ))
          }
          <div className="water"></div>
        </div>
         <div className="arrowcontainer">
            <div className="container-right" onClick={this.sendValue}><span className="arrow-right"></span></div>
            <div className="container-left" onClick={this.returnValue}><span className="arrow-left"></span></div>
         </div>
        <div id="container1" className="container1">
         {
            putval && putval.map((val, key) => (
              <div className="sphere3" data-id={val} key={key}></div>
            ))
          }
          <div className="water"></div>
        </div>
       </div>
    );
  }
}

export default App;
