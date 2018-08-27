//All property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified.
// If you want to use em, for example, you wrap the value and the units in quotes, like {fontSize: "4em"}.
 //Other than the length values that default to px, all other property values should be wrapped in quotes.

 const styles = {
    color:"purple", fontSize:40, border:"2px solid purple"
  }
 class Colorful extends React.Component {
   render(){
       // Change code below this line
       return (
        //    <div style={{color:"yellow", fontSize=24}}>Style Me! </div>
        <div style={styles}>Style Me!</div> 
        // change code above this line
        )
   }
 }