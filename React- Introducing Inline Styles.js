// You apply inline styles to JSX elements similar to how you do it in HTML, but with a few JSX differences. 
//<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
//JSX elements use the style attribute, but because of the way JSX is transpiled, you can't set the value to a string.
// Instead, you set it equal to a JavaScript object. Here's an example:

//<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>
// Note that you can optionally set the font size to be a number, 
//omitting the units "px", or write it as "72px".

class Colorful extends React.Component {
    render() {
      return (
        <div style={{color:"red", fontSize:72}}>Big Red</div>
      );
    }
  };
  
