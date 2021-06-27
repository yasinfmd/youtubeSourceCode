<template>
  <div id="app">
    <button @click="login()">Giriş Yap</button>
    Login mi ? {{ isLogin }}
    <button @click="logOut()">Çıkış Yap</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    async logOut() {
      const result = await this.$gAuth.signOut();
      this.isLogin = false;
      console.log(`result`, result);
    },
    async login() {
      const googleUser = await this.$gAuth.signIn();
      console.log("googleUser", googleUser);
      console.log("getId", googleUser.getId());
      console.log("getBaseProfile", googleUser.getBasicProfile());
      console.log("getAuthResponse", googleUser.getAuthResponse());
      console.log(
        "getAuthResponse$G",
        this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
      );
      this.isLogin = this.$gAuth.isAuthorized;
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
