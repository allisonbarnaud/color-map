
function App() {

  // color range array which will hold all rgb values
  var colorRange = [];

  // triple for loop to iterate through all rgb values
  // For loops cut down to 32 increments to lessen processing requirements, rgb values adjusted (x8) during rendering of the pixels

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
