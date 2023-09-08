<script setup>
import Slider from '../components/Slider.vue';
import RightSideView from './Home/RightSideView.vue';
import CenterView from './Home/CenterView.vue';
import LeftSideView from './Home/LeftSideView.vue';  
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';
</script>

<template> 
<Slider/>
<Navbar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <RightSideView/>
      </div>
      <div class="col-md-6">
        <CenterView/>
      </div>
      <div class="col-md-3">
        <LeftSideView/>
      </div>
    </div>
  </div> 

  <Footer/>
</template>

<style scoped>

</style>