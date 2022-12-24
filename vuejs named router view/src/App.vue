<template>
  <header>Burası bir header</header>

  <div class="content-wrapper">
    <div class="sidebar">
      <router-view name="leftSideBar"/>
    </div>
 
    <div class="content"> <router-view/> </div>
  </div>
</template>

<style>
body{
  overflow: hidden;
}
#app{
  overflow: hidden;
  height: 100vh;
}
.content-wrapper{
  display: flex;
}

.content{
  margin-left: 260px;
}
.sidebar{
  padding-top: 200px;
  width: 250px;
  background-color: #fff;
  border-right: 2px dashed #42b983;
  position: absolute;
  top: -84px;
  height:calc(100vh + 84px);

}
header{
  margin-left: 300px;
  padding: 32px;
  background-color: #fff;
  border-bottom: 2px dashed #2c3e50;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
