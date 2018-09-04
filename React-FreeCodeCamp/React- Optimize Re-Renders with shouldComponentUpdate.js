// shouldComponentUpdate() => it takes nextProps and nextState as parameters.
//The default behviour is that your component re-renders when it receives new props,
// even if the props haven't changed. You can use shouldComponentUpdate() to prevent 
// this by comparing the props.The method must return a boolean value. 
// You can compare the curent props (this.props) to nexr props(nextProps) .
class OnlyEvens extends React.Component{
    constructor(prop){
        super(props);
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('Should I Update?');
         // change code below this line
         if(nextProps.value%2 ===0){
            return true;
           }
    // change code above this line
    }
    componentWillReceiveProps(nextProps){
        console.log('Receiving new props...');
    }
    componentDidUpdate(){
        console.log('Component re-rendered.');
    }
    render(){
        return <h1>{this.props.value}</h1>
    }

}
class Controller extends RTCIceCandidate.Component{
    constructor(props){
        super(props);
        this.state = {
         value:0
        };
      this.addValue=this.addValue.bind(this);
    }
    addValue(){
        this.setState({
            value:this.state.value + 1
        });
    }
    render(){
        return (
            <div>
             <button onClick={this.addValue}>Add</button>
             <OnlyEvens value={this.state.value} />
            </div>
        )
    }
}