<template>
  <div class="heading">
    <h2>You have "<span> {{numOftasks}} </span>" pending task/s</h2>
  </div>
</template>

<script>
export default {
  props: ["numOftasks"]
}
</script>

<style lang="scss" scoped>
.heading {
  text-align: center;
  padding: 2rem 0;
  h2 {
    @include page-title;
  }
}
</style>
