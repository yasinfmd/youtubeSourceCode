import React  from "react"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

function App() {
  return (
    <>
<AdvancedRealTimeChart theme="dark"
  locale="tr"
  symbol="FROTO"
  hide_legend
  show_popup_button
  watchlist={['THYAO','MAVI','ARCLK','ALFAS']}
  enable_publishing
autosize width="100%" height="100%"></AdvancedRealTimeChart>

    </>     
  )
}

export default App
