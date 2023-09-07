<script setup>
import RightSideView from './Home/RightSideView.vue';
import LeftSideView from './Home/LeftSideView.vue';
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <RightSideView/>
      </div>
      <div class="col-md-4">
        <LeftSideView/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>