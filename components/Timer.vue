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
  <h4 class="timer-title">Время просрочки</h4>
  <h5 class="timer">{{ time }}</h5>
</template>

<style scoped lang="scss">
.timer-title {
  font-size: 1em;
}

.timer {
  font-size: 1em;
}
</style>
