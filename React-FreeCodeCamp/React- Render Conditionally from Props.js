/******************************
The code editor has two components that are partially defined for you: a parent called GameOfChance, and a child called Results.
They are used to create a simple game where the user presses a button to see if they win or lose.

First, you'll need a simple expression that randomly returns a different value every time it is run. You can use Math.random(). 
This method returns a value between 0 (inclusive) and 1 (exclusive) each time it is called. 
So for 50/50 odds, use Math.random() > .5 in your expression.
Statistically speaking, this expression will return true 50% of the time, 
and false the other 50%. On line 30, replace the comment with this expression to complete the variable declaration.

Now you have an expression that you can use to make a randomized decision in the code. Next you need to implement this.
Render the Results component as a child of GameOfChance, and pass in expression as a prop called fiftyFifty.
In the Results component, write a ternary expression to render the text "You win!" or "You lose!"
based on the fiftyFifty prop that's being passed in from GameOfChance. Finally,
make sure the handleClick() method is correctly counting each turn so the user knows how many times they've played. 
This also serves to let the user know the component has actually updated in case they win or lose twice in a row.

*********/
class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        /* change code here */
        this.props.fiftyFifty?"You win!":"You lose!"
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter:this.state.counter+1  // change code here
    });
  }
  render() {
    let expression = Math.random() > .5; // change code here
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        { /* change code below this line */ }
       <Results fiftyFifty={expression} />
        { /* change code above this line */ }
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};
