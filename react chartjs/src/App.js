import './App.css';
import { Doughnut, Bar, Pie, Radar, Line } from "react-chartjs-2"
import { useEffect, useState } from 'react';
function App() {
  const [isDataReady, setIsDataReady] = useState(false)
  const [data, setData] = useState(null)
  const fetchData = async () => {
    const _result = await fetch("https://api.collectapi.com/corona/countriesData", {
      method: "GET",
      headers: {
        "authorization": "apikey 3e4LVGgYU9oJl5eQGuSzKK:4j4DkY4yfkCFlU7tPuME4L"
      }
    })
    const colors = ["#7BB112", "#201D26", "#9E8E96", "#9C124C", "#E85B1E"]
    const { result } = await _result.json()
    console.log("data", result.find((item) => item.country === "Turkey"))
    setData({
      labels: result.slice(0, 5).map((item) => item.country),
      datasets: [{
        backgroundColor: colors,
        data: result.slice(0, 5).map((item) => Number(item.totalCases.split(",").join(""))),
        hoverBackgroundColor: "purple",
        hoverBorderColor: "black",
        hoverBorderWidth: 5,
        borderColor: "yellow",
        borderWidth: 2,
        borderRadius: 20,
        borderAlign: "inner",
        label: "Takımlar DataSet",
        hoverOffset: 50,
        spacing: 20,
        offset: 10,
        transitions: 2000,
        normalized: true,
        circumference: 360
      }]
    })
    //
  }
  useEffect(() => {
    fetchData()
  }, [])
  useEffect(() => {
    if (data) {
      setIsDataReady(true)
    }
  }, [data])
  return (
    <div className="App">

      <div style={{ width: "800px", height: "800px" }}>
        {isDataReady && <Doughnut
          options={{
            responsive: true,
            maintainAspectRatio: true,
            onClick: (e, activeElement) => {
              console.log("e", e)
              console.log("activeElement", activeElement)
              // const datasetIndex = activeElement[0].datasetIndex
              // const dataIndex = activeElement[0].index
              // const datasetlabel = e.chart.data.datasets[datasetIndex].label
              // const value = e.chart.data.datasets[datasetIndex].data[dataIndex]
              // const label = e.chart.data.labels[dataIndex]
              // console.log(datasetIndex, dataIndex, datasetlabel, value, label)


            },
            cutout: "70%",
            onHover: (e) => {
              // console.log("ehover", e)
            },
            animation: {
              //animateRotate: true,
              //animateScale: true,
              //delay: 1000,
              // duration: 3000,
              //  loop: true,
              // easing: "linear",

              onComplete: (e) => {
                // console.log("animasyontamam", e)
              },
              onProgress: (e) => {
                //console.log("animasyon işliyor", e)

              }
            },
            plugins: {
              tooltip: {
                bodyColor: "red",
                padding: 20,
                callbacks: {
                  afterBody: (ctx) => {
                    return "Yasin"
                  },
                  footer: () => {
                    return "Merhaba Footer"
                  },
                  afterTitle: () => {
                    return "Title After"
                  },
                  title: () => {
                    return "Başlık"
                  },
                }

              },
              title: {
                align: "center"
              },
              legend: {
                align: "start",
                position: "bottom",
                reverse: true,
                labels: {
                  color: "blue",
                  usePointStyle: true,
                },
                onHover: (e) => {
                  console.log("labelHover", e)
                },
                onClick: (e) => {
                  console.log("tıklanan label", e)
                }
              }
            }
          }}
          data={data}
          id='CustomChart'
          className='customChart'
          redraw
        />}
      </div>
    </div>
  );
}

export default App;
