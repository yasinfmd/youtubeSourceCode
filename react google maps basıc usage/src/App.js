import './App.css';
import {Wrapper, Status} from "@googlemaps/react-wrapper";
import {useEffect, useRef, useState} from "react";


const MapComponent=()=>{
    const ref=useRef(null)
    const [map,setMap]=useState(null)
    const [center,setCenter]=useState({lat:39.925533,lng:32.866287})

    useEffect(()=>{
        if(ref.current && !map){
            setMap(new window.google.maps.Map(ref.current))
        }
    },[ref,map])

    const createMarker=()=>{
        return new window.google.maps.Marker({
            position:center,
            map,
            draggable:true,
            optimized:true
        })
    }

    const createInfoWindow=()=>{
        const text="Merhaba"
        return new window.google.maps.InfoWindow({
            content:text
        })
    }

    useEffect(()=>{
        if(map){
            map.setOptions({center,zoom:5})
           const marker= createMarker()
            marker.addListener('click',(e)=>{
                console.log('event',e)
                const popup=createInfoWindow()
                popup.open(map,marker)
            })
            marker.addListener('drag',(e)=>{
                console.log('event',e.latLng.lat(),e.latLng.lng())
            })
            marker.addListener('dragend',(e)=>{
                console.log('event',e)

            })
        }
    },[center,map])

    return(
        <div ref={ref} style={{width:'100%',height:'100%'}}>

        </div>
    )
}
function App() {
    const render = (status) => {
        if(status===Status.LOADING)return <div>Yükleniyor</div>
        if(status===Status.FAILURE)return <div>Hata</div>
        return  <div>{status}</div>

    }
    return (
        <div className="App" style={{height:'600px'}}>
            <Wrapper apiKey='AIzaSyB_lRaEo4WFw-1kXMjVgrV9zr19dH5CvC0' render={render} language="tr">
                    <MapComponent />
            </Wrapper>
        </div>
    );
}

export default App;
