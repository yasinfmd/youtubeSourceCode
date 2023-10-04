import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);
import 'react-grid-layout/css/styles.css'

const App=()=>{
  const layouts = [
    { i: "1", x: 0, y: 0, w: 1, h: 2 },
    { i: "2", x: 1, y: 0, w: 2, h: 2 },
    { i: "3", x: 1, y: 2, w: 1, h: 2 },
    { i: "4", x: 0, y: 2, w: 1, h: 2 },
    { i: "5", x: 2, y: 2, w: 1, h: 4 },
    { i: "6", x: 0, y: 4, w:2, h: 2 },
  ];
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return(
      <>
      
      <ResponsiveGridLayout
        compactType='vertical'
        autoSize
        className="layout"
        isBounded
        containerPadding={[20,20]}
        layouts={{lg:layouts}}
        onResize={()=>{}}
        cols={{ lg:3,  }}
      >
        <div key="1" className="item" style={{backgroundColor:getRandomColor()}}>1</div>
        <div key="2" className="item" style={{backgroundColor:getRandomColor()}}>2</div>
        <div key="3" className="item" style={{backgroundColor:getRandomColor()}}>3</div>
        <div key="4" className="item" style={{backgroundColor:getRandomColor()}}>4</div>
        <div key="5" className="item" style={{backgroundColor:getRandomColor()}}>5</div>
        <div key="6" className="item" style={{backgroundColor:getRandomColor()}}>6</div>

      </ResponsiveGridLayout>
      </>
  )
}
export default App