import React, {Component} from 'react';
import Button from './components/Button';
import "./App.css";
import "./index.css";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      current: '0',
      previous: [],
      nextIsReset: false
    }
  }

  addComma = () => {

  }

  delete = () => {

  }

  reset = () => {
    this.setState({current: '0', previous: [], nextIsReset: false});
  }

  addToCurrent = (symbol) => {
    if(["/", "-", "+", "*"].indexOf(symbol) > -1){
      let {previous} = this.state;
      previous.push(this.state.current + symbol);
      this.setState({previous, nextIsReset: true});
    }else {
      if((this.state.current === "0" && symbol !== ".") || this.state.nextIsReset){
        this.setState({current: symbol, nextIsReset: false});
      }else {
        this.setState({current: this.state.current + symbol});
      }
    }
  }

   calculate = (symbol) => {
    let {current, previous, nextIsReset} = this.state;
    if(previous.length > 0){
      current = eval(String(previous[previous.length - 1] + current));
      this.setState({current, previous: [], nextIsReset: true});
    }
   }

  render() {
    const buttons = [
      {symbol: '7', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '8', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '9', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: 'DEL', cols: 1, className: 'delete', action: this.delete},

      {symbol: '4', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '5', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '6', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '+', cols: 1, className: 'operator', action: this.addToCurrent},

      {symbol: '1', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '2', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '3', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '-', cols: 1, className: 'operator', action: this.addToCurrent},

      {symbol: '.', cols: 1, className: 'decimal', action: this.addToCurrent},
      {symbol: '0', cols: 1, className: 'numeral', action: this.addToCurrent},
      {symbol: '/', cols: 1, className: 'operator', action: this.addToCurrent},
      {symbol: '*', cols: 1, className: 'operator', action: this.addToCurrent},

      {symbol: 'RESET', cols: 2, className: 'reset', action: this.reset},
      {symbol: '=', cols: 2, className: 'equalSign', action: this.calculate},
    ];
    
    return (
      <div className="App">
        <div className='calc-container'>
          <div className='input-container'>
            {this.state.previous.length > 0 ?
                <div className='floaty-last'>{this.state.previous[this.state.previous.length - 1]}</div>
              : null}
              <input className="result" type="text" value={this.state.current} />
          </div>
          <div className="keypad">
              {buttons.map((btn, i) => {
                return <Button key={i} symbol={btn.symbol} cols={btn.cols} className={btn.className} action={(symbol) => btn.action(symbol)} />
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
