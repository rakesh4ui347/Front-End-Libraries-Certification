//condition ? expressionIfTrue : expressionIfFalse
const inputStyle = {
    width:235,
    margin:5
}
class CheckUserAge extends React.Component {
    constructor(props){
       super(props);
       state ={

       }
       this.submit= this.submit.bind(this);
       this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            input:e.target.value
        });
    }
    submit(){
        this.setState({
            userAge:this.state.input
        });
    }
    render(){
        const buttonOne= <button onClick={this.submit}>Submit</button>;
        const buttonTwo= <button>You May Enter</button>; 
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
            <h3>Enter Your Age to Continue </h3>
            <input
             style={inputStyle}
             type="number"
             value={this.state.input}
             onChange={this.handleChange} /><br/>
             {
                 //change code here
                 this.state.userAge == '' ? buttonOne : (this.state.input >= 18 ? buttonTwo : buttonThree)
             }
            </div>
        )
    }

}