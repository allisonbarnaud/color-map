
function App() {

  var colorRange = [];

  // triple for loop to iterate through all rgb values

  for (let r=0; r<32; (r++)) {
    for (let g=0; g<32; (g++)) {
      for (let b=0; b<32; (b++)) {
        var rgbValue = [r,g,b];
        colorRange.push(rgbValue);
      }
    }
  }

  return (
    <div className="App">
      <ul className="pixel-box">
        {
          colorRange.map((rgbValues)=> {
            return (
              <li style={{backgroundColor:"rgb("+([rgbValues[0]*8, rgbValues[1]*8, rgbValues[2]*8]).join(',') + ')'}} className="pixel"></li>
            )
          })
        }
      </ul>
      
    </div>
  );
}

export default App;
