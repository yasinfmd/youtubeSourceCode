import './App.css';
import World from "@svg-maps/world";
import {SVGMap , CheckboxSVGMap } from 'react-svg-map'
/*import 'react-svg-map/lib/index.css'*/
function App() {

  return (
    <div className="App">
        <CheckboxSVGMap onChange={(e)=>{
            console.log(e)
        }} locationClassName="location" className="mysvg" map={World} />
       {/* <SVGMap onLocationClick={(e)=>{
            console.log('e',e.target.id,e.target.getAttribute('name'),e.target.ariaLabel)
        }} onLocationMouseOver={()=>{}} onLocationMouseMove={()=>{}} onLocationMouseOut={()=>{

        }} locationClassName="location" className="mysvg" map={World} />*/}
    </div>
  );
}

export default App;
