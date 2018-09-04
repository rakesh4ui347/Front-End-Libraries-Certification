class Results extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>
            {
                /*change code here */
            }
            </h1>
        )
    }
}
class GameOfChance extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:1
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState ({
            counter:0
        });
    }
    render(){
        let expression = null;// change code here
        return (
            <div>
            <button onClick= {this.handleClick}>Play Again</button> 
             {/* Change code below this line */}

             {/* change code above this line */}
             <p>{'Turn: '+ this.state.counter}</p>
            </div>
        )
    }
}