<template>
  <button @click="openModal=!openModal">
    Modal Aç
  </button>
  <teleport to="body">
    <div class="modal" v-if="openModal">
    <div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cupiditate dicta dignissimos expedita
        fuga fugiat, fugit ipsam, iusto libero maxime minima nobis odio, optio perspiciatis reprehenderit similique
        veniam vero.
      </div>
      <div>Adipisci at consequuntur magni nostrum optio quos temporibus. Accusamus ad aliquid animi at consequuntur
        ducimus eaque eligendi illum ipsum modi molestiae necessitatibus nostrum quam quidem quos, reprehenderit rerum
        sint veritatis!
      </div>
      <div>Aspernatur beatae distinctio dolore ducimus eius eligendi expedita illum neque nostrum numquam odio omnis
        perferendis perspiciatis provident, quam ratione recusandae sint suscipit ullam veritatis! Ab enim error officia
        omnis soluta!
      </div>
      <div>Earum eligendi, itaque maxime omnis quasi quidem rerum suscipit. Asperiores beatae corporis et facere iste,
        magnam obcaecati quia sint. Atque cumque dolores facere incidunt laboriosam odio quod totam unde voluptatum?
      </div>
      <div>Accusamus at blanditiis consectetur delectus distinctio dolor explicabo id impedit magnam, necessitatibus
        nihil non pariatur quas quidem repellat, sequi similique sint sunt tempore ullam, ut vel voluptatum. Delectus,
        deserunt, voluptatum.
      </div>

      <div @click="openModal=false">Kapat </div>
    </div>
    </div>
  </teleport>
  <div id="hello">
    Merhaba Dünya

  </div>
  <teleport to="#hello">
      <div v-if="show"> Merhaba Ben Işınlandım ve Geldim :)</div>
  </teleport>
  <button @click="show=!show">Işınla Beni</button>

  <div class="classTeleport">
    Ben Bir Class Teleport Kapsayıcısıyım
  </div>
  <teleport to=".classTeleport">
    <div v-if="classTeleportShow"> Class Teleport Shoowww</div>
  </teleport>
  <button @click="classTeleportShow=!classTeleportShow">Işınla Beni</button>


</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      classTeleportShow:false,
      show:false,
      openModal:false
    }
  }
}
</script>

<style>
.modal{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0,0,0,.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 50%;
  height: 50%;
  padding: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
