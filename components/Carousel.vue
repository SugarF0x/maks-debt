<script setup lang="ts">
const cards = ref([
  'Здравствуйте',
  'Меня зовут Максим',
  'И я открыточный аферист',
  'Я обманываю людей',
  'Ввожу их в заблуждение',
  'Внушаю надежду',
  'Веру в открытку',
  'А потом',
  'Не дарюю её 7 лет',
])

const width = ref(window.innerWidth)
onMounted(() => {
  window.addEventListener('resize', () => {
    width.value = window.innerWidth
  })
})

const scale = computed(() => Math.min(1, width.value / 1000))
const spacer = computed(() => scale.value * 420 + 'px')
</script>

<template>
  <div class="pad-my-ass" />
  <div class="container">
    <div class="carousel">
      <div
        v-for="(title, index) in cards"
        :key="title"
        class="card"
        :style='`
          background-image: url(/carousel/${index + 1}.jpeg);
          transform: rotateY(${index * Math.floor(360 / cards.length)}deg) translateZ(430px);
        `'
      >
          <span>
            {{ title }}
          </span>
      </div>
    </div>
  </div>
  <div class="spacer" />
</template>

<style scoped lang="scss">
.pad-my-ass {
  height: 2rem;
}

.spacer {
  height: v-bind(spacer);
}

.container {
  position: relative;
  width: 320px;
  margin: 0 auto;
  perspective: 1000px;
  transform: scale(v-bind(scale));
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
  background-repeat:no-repeat;
  background-position: center center;

  span {
    margin: auto;
  }
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
