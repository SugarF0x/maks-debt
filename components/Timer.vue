<script setup lang="ts">
import { onMounted, ref } from '@vue/runtime-core'
import { formatDuration, intervalToDuration } from 'date-fns'
import { ru } from "date-fns/locale"

const dueDate = new Date('2019-05-26T21:00:00.000Z')

function getFormattedTime() {
  return formatDuration(intervalToDuration({
    start: dueDate,
    end: new Date()
  }), { locale: ru })
}

const time = ref(getFormattedTime())

onMounted(() => {
  setInterval(() => {
    time.value = getFormattedTime()
  }, 1000)
})
</script>

<template>
  <h2>Просрочка составляет:</h2>
  <div>{{ time }}</div>
</template>

<style scoped lang="scss">

</style>
