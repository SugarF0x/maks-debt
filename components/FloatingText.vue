<script setup lang="ts">
const text = `
максим блядь
где открытка
ты сделал открытку?
где моя открытка
сука максим
ты заебал
сколько лет прошло
сколько можно напоминать
это так трудно?
она там из золота?
Открытка (masterwork)
открытка приди
макароны сгнили уже
завяли помидоры
я тебя захуярю
урод блядь
чмо
дурак
дырочка
открытка
открыточка
открытуська
я так много прошу?
дрянь
дешёвка
полушка
конструктор красного цвета
Мерил Писькин
Я ? лет
Микки-Макс
Блинский блядь, я скучаю(
Бля, щас бы в дьяблу
small penis
А для чего сайт то?
Camis
`.split('\n').filter(e => !!e)

const height = ref(window.innerHeight)
const width = ref(window.innerWidth)

interface Item {
  id: string
  text: string
  top: number
  left: number
}

const items = reactive<Item[]>([])

onMounted(() => {
  window.addEventListener('resize', () => {
    height.value = window.innerHeight
    width.value = window.innerWidth
  })

  setInterval(() => {
    if (items.length >= 12) items.shift()

    const id = `id-${Date.now()}`
    items.push({
      text: text[Math.floor(Math.random() * text.length)],
      top: Math.floor(Math.random() * height.value),
      left: Math.floor(Math.random() * width.value),
      id
    })

    setTimeout(() => { document.getElementById(id)?.classList.add('text-visible') }, 100)
    setTimeout(() => { document.getElementById(id)?.classList.remove('text-visible') }, 2500)
  }, 250)
})
</script>

<template>
  <div
    v-for="item in items"
    :key="item.id"
    :id="item.id"
    :style="`top: ${item.top}px; left: ${item.left}px; transform: translateX: 100px`"
    class="floating-text"
  >
    {{ item.text }}
  </div>
</template>

<style scoped lang="scss">
.floating-text {
  position: absolute;
  opacity: 0;
  transition: opacity .5s ease-in-out;
}

.text-visible {
  opacity: .5;
}
</style>
