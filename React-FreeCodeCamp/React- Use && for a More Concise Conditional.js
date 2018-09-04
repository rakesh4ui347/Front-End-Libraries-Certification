class MyComponent extends React.Component {
    constructor(props){
        supre(props);
        this.state ={
            display:true
        }
        this.toggleDisplay= this.toggleDisplay.bind(this);
    }
    toggleDisplay(){
        this.setState({
            display:!this.state.display
        });
    }
    render(){
        // Change code below this line
        return(
            <div>
            <button onClick={this.toggleDisplay}>
            Toggle Display
            </button>
            {this.state.display && <h1>Displayed!</h1>}
            </div>
        )
    }
}