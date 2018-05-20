import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number1 : 0,
      number2 : 0,
      result : 0
    }
  }

  sum = () => {
    this.setState({result : parseInt(this.state.number1,10) + parseInt(this.state.number2,10) });
  }

  render () {
    return (
      <div className='App'>
        <h1>Welcome to Calculator React</h1>
        <form className='form-horizontal style'>

          <div className="form-group">
            <label>First Number:</label>
            <input className="form-control" type='number' onChange={(event) => this.setState({number1: event.target.value})} />
          </div>

          <br />
          <div className="form-group">
            <label>Second Number:</label>
            <input type='number' className="form-control" onChange={(event) => this.setState({number2: event.target.value})} />
          </div>

          <br />
          <input type="button" className='button1 button2' value='sum' onClick={this.sum} />

          <br />
          <input type='text' value={this.state.result} readOnly/>

        </form>
      </div>
    );
  }
}

export default App;
