<template>
  <div id="app">
    <div
      v-for="(item, index) in result"
      :key="index"
      @click="videoId = item.id.videoId"
    >
      {{ item.id.videoId }}
    </div>
    <div>
      <youtube
        :video-id="videoId"
        :player-vars="playerVars"
        @playing="playing"
      ></youtube>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  created() {
    this.fetchYoutubeData();
  },
  data() {
    return {
      playerVars: {
        autoplay: 1,
      },
      result: [],
      videoId: "lG0Ys-2d4MA",
      apiKey: "AIzaSyDlHgVhtmFgdCz6r7nbZivrnZbWhAFyPXQ",
    };
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
    async fetchYoutubeData() {
      const { data } = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?key=${this.apiKey}&part=snippet&q=beggin&maxResults=20`
      );
      this.result = data.items;
      console.log(this.result);
      console.log("result", data);
    },
  },
};
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
