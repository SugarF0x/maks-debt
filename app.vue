<script setup lang="ts">
const cards = ref([
  ['This is something', 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['Very special', 'https://images.pexels.com/photos/1258865/pexels-photo-1258865.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['Special is the key', 'https://images.pexels.com/photos/808466/pexels-photo-808466.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['For you', 'https://images.pexels.com/photos/1394841/pexels-photo-1394841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['Just give it', 'https://images.pexels.com/photos/969679/pexels-photo-969679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['A try', 'https://images.pexels.com/photos/1834400/pexels-photo-1834400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['And see', 'https://images.pexels.com/photos/1415268/pexels-photo-1415268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['How IT Works', 'https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
  ['Woow', 'https://images.pexels.com/photos/1175135/pexels-photo-1175135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'],
])
</script>

<template>
  <Background>
    <div class="container">
      <div class="carousel">
        <div
          v-for="([title, url], index) in cards"
          :key="title"
          class="card"
          :style='`
          background-image: url(${url});
          transform: rotateY(${index * Math.floor(360 / cards.length)}deg) translateZ(430px); }
        `'
        >
          <span>
            {{ title }}
          </span>
        </div>
      </div>
    </div>
    <div class="content">
      <Timer />
    </div>
  </Background>
</template>

<style lang="scss">
body {
  margin: 0;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
}

.container {
  position: relative;
  width: 320px;
  margin: 0 auto;
  perspective: 1000px;
}

.carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: rotate360 60s infinite forwards linear;
}

.card {
  position: absolute;
  width: 300px;
  height: 187px;
  top: 20px;
  left: 10px;
  right: 10px;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.3);
  display: flex;

  span {
    margin: auto;
  }
}

.content {
  padding-top: 420px;
}

@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

</style>
