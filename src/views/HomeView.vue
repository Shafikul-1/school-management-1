<script setup>
import RightSideView from './Home/RightSideView.vue';
import LeftSideView from './Home/LeftSideView.vue';
import FooterView from './FooterView.vue';
import SliderView from './Home/SliderView.vue';

</script>

<template>
  <SliderView/>

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <RightSideView/>
      </div>
      <div class="col-md-6">
       
      </div>
      <div class="col-md-3">
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