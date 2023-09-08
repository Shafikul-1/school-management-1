<script setup>
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';
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
         <h1>Best Of Board page</h1>
      </div>
      <div class="col-md-3">
        <LeftSideView/>
      </div>
    </div>
  </div> 

  <Footer/>
</template>
