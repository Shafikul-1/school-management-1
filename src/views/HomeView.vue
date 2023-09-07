<script setup>
import RightSideView from './Home/RightSideView.vue';
import LeftSideView from './Home/LeftSideView.vue';
import FooterView from './FooterView.vue';
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
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <FooterView/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>