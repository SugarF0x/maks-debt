<script setup lang="ts">
const giftees = [
  'Валик',
  'Мел (бабач) (не скланяется)'
]
</script>

<template>
  <h2 class="giftees-title">
    За это время открытку подарили:
  </h2>
  <div class="giftees">
    <div v-for="t in giftees">
      {{ t }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.giftees-title {
  margin-top: 2rem;
}

.giftees {
  margin: 2rem 0;
}
</style>
