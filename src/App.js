import React from 'react';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0,
    }

  }


  ticTacToeList = () => {
    let arr = [];
    for (let i = 0; i < 9; i++) {
      let a = <div className='ttt-grid' onClick={this.clickMandler} data={i}>{this.state.squares[i]}</div>;
      arr.push(a);
    }
    return arr;
  }

  winnerName = 'May the best man win';

  isWinner = () => {
    let winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let gamer = (this.state.count % 2 === 0) ? 'X' : 'O';
    for (let i = 0; i < winnerLine.length; i++) {
      let line = winnerLine[i];
      if (this.state.squares[line[0]] === gamer &&
        this.state.squares[line[1]] === gamer &&
        this.state.squares[line[2]] === gamer) {
        this.winnerName = `WINNER ${gamer}`
      }
    }
  }


  clickMandler = event => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null && this.winnerName === 'May the best man win') {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O';
      this.setState((prewState) => {
        return {
          squares: currentSquares,
          count: this.state.count + 1
        }
      })
    }
    this.isWinner();
  }

  newGame = () => {
    this.setState((prewState) => {
      return {
        squares: Array(9).fill(null),
        count: 0,
      }
    })
    this.winnerName = 'May the best man win';
  }


  render() {
    return (
      <div className='ticTacToe'>
        <h1>Hello, this is my Tic Tac Toe game</h1>
        <p className='winner'>{this.winnerName}</p>
        <div className="ticTacToeGame">
          <div>{this.ticTacToeList()}</div>
        </div>
        <button onClick={this.newGame}>New Game</button>
        <footer>by Vlad Romanov</footer>
      </div>
    );
  }

}

export default App;
