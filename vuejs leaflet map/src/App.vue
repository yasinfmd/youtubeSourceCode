<template>
  <div id="app">
    <div style="height: 1000px; width: 100%">



      <l-map
          @click="onCustomClick"
          @update:zoom="updateZoom"
          @update:center="updateCenter"
          :zoom="zoom"
          :center="center"
          style="height: 100%"
      >
        <l-circle  :lat-lng="circle.center" fillColor="black" :fillOpacity="0.7" color="red" :radius="100000"/>
        <l-tile-layer
            :url="url"
            :attribution="attribution"
        />
        <l-marker :draggable="true" @update:latLng="onDrag"  @click="onLogMarker(item)" :lat-lng="getCoord(item.lat,item.long)" v-for="item in coordArray" :key="item.id">
          <l-icon :icon-url="icon" :icon-size="iconSize" />
          <l-popup>
              {{item.name}}
          </l-popup>
        </l-marker>

      </l-map>
    </div>
  </div>
</template>

<script>
import { latLng ,Icon} from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip,LIcon, LCircle } from "vue2-leaflet";

import markerimage from './marketimage.png'
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
export default {
  name: 'App',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
    LCircle
  },
  methods:{
    getCoord(a,b){
        return latLng(a,b)
    },
    updateZoom(zoom){
      console.log('zoom',zoom)
    },
    updateCenter(center){
      console.log('center',center)
    },
    onDrag({lat,lng}){
        console.log('Sürüklenen enlem ve boylam bilgisi' ,lat,lng)
    },
    onLogMarker(item){
    console.log('item',item)
    },
    onCustomClick(item){
      const {latlng}=item;
      console.log('enlem boylam bilgisi',latlng)
    }
  },
    data() {
      return {
        zoom: 12,
        center: latLng(39.903416, 32.858900),
        url: 'https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=b90e089c365242a3a08dbb49a7084a61',
        attribution: 'Haritamız',
        coordArray:[{id:1,lat:39.749434,long:30.520655,name:'Eskişehir'},{id:2,lat:39.903416,long:32.858900,name:'Ankara'}],
        icon:markerimage,
        iconSize:[20,20],
        circle:{
          center: latLng(39.903416, 32.858900),
          radius:100000
        }
      };
    },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
