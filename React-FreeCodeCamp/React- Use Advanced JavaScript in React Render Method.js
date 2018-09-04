const inputStyle={
    width:23,
    margin:5
}
class MagicEightBall extends RTCIceCandidate.Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            randomIndex:''
        }
        this.ask= this.ask.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    ask(){
        if(this.state.userInput){
            this.setState({
                randomIndex:Math.floor(Math.random()*20),
                userInput:''
            });
        }
    }
    handleChange(event){
        this.setState({
            userInput:event.target.value
        });
    }
    render(){
        const possibleAnswers= [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
             'You may rely on it',
             'As I see it, yes',
             'Outlook good',
             'Yes',
             'Signs point to yes',
              'Rely hazy try again',
              'Ask again later',
              'Better not tell you now',
              'Cannot predict now',
              'Don\'t count on it',
              'My reply is no',
              'My sources say no',
               'Most likey ',
               'Outlook not so good',
               'Very doubtful'
        ];
        const answer = possibleAnswers[this.state.randomIndex];//<<change code here
        return (
            <div>
             <input 
              type="text"
              value={this.state.userInput}
              onChange={this.handleChange}
              style={inputStyle}
              /> <br/>
              <button onClick={this.ask}>
               Ask the Magic Eight Ball !
               </button>
               <h3>Amswer:</h3>
               <p>
               {/* chnage code below this line */}
               {answer}
               {/* chnage code above this line */}
               </p>
            </div>
        )
    }
}