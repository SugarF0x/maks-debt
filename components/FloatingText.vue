<script setup lang="ts">
import text from '@/assets/prompts.json'

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
