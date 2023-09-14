<script setup>
import { ref, onMounted } from 'vue'
import Slider from '../../components/Slider.vue';
import Navbar from '../../components/Navbar.vue';
import LeftSideView from '../Home/LeftSideView.vue';
import RightSideView from '../Home/RightSideView.vue';
import Footer from '../../components/Footer.vue';
import axios from 'axios';

// const govorningDetalis = [
//   {
//     image: 'https://randomuser.me/api/portraits/women/21.jpg',
//     title: 'Card title',
//     subtitle: 'Subtitle',
//     detalis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     linkAll: [
//       {
//         linkText: '+8801756867220',
//         icon: 'fa fa-mobile',
//       },
//       {
//         linkText: 'shafikul@gamil.com',
//         icon: 'fa fa-envelope-o'
//       },

//     ]

//   },
//   {
//     image: 'https://randomuser.me/api/portraits/women/28.jpg',
//     title: 'Card title',
//     subtitle: 'Sub title',
//     detalis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     linkAll: [
//       {
//         linkText: '+8801756867220',
//         icon: 'fa fa-mobile',
//       },
//       {
//         linkText: 'shafikul@gamil.com',
//         icon: 'fa fa-envelope-o'
//       },

//     ]

//   },
//   {
//     image: 'https://randomuser.me/api/portraits/women/77.jpg',
//     title: 'Card title',
//     subtitle: '',
//     detalis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     linkAll: [
//       {
//         linkText: '+8801756867220',
//         icon: 'fa fa-mobile',
//       },
//       {
//         linkText: 'shafikul@gamil.com',
//         icon: 'fa fa-envelope-o'
//       },

//     ]

//   },
//   {
//     image: 'https://randomuser.me/api/portraits/women/78.jpg',
//     title: 'Card title',
//     subtitle: '',
//     detalis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     linkAll: [
//       {
//         linkText: '+8801756867220',
//         icon: 'fa fa-mobile',
//       },
//       {
//         linkText: 'shafikul@gamil.com',
//         icon: 'fa fa-envelope-o'
//       },

//     ]

//   },
//   {
//     image: 'https://randomuser.me/api/portraits/women/72.jpg',
//     title: 'Card title',
//     subtitle: '',
//     detalis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     linkAll: [
//       {
//         linkText: '+8801756867220',
//         icon: 'fa fa-mobile',
//       },
//       {
//         linkText: 'shafikul@gamil.com',
//         icon: 'fa fa-envelope-o'
//       },

//     ]

//   },
//   {
//     image: 'https://randomuser.me/api/portraits/women/38.jpg',
//     title: 'Card title',
//     subtitle: '',
//     detalis: "Some quick example text to build on the card title and make up the bulk of the card's content.",
//     linkAll: [
//       {
//         linkText: '+8801756867220',
//         icon: 'fa fa-mobile',
//       },
//       {
//         linkText: 'shafikul@gamil.com',
//         icon: 'fa fa-envelope-o'
//       },

//     ]

//   },
  
// ]

const govorningDetalis = ref([])
const loading = ref(true)
onMounted(async () => {
  try {
    const url = 'https://raw.githubusercontent.com/Shafikul-1/school-management-1/master/data/governing.json'
    const response = await axios.get(url)
    const result = response.data
    console.log(result.allData)
    govorningDetalis.value = result.allData
    loading.value = false 
  } catch (error) {
    console.log(' Your Error => ' + error)
  }
})
</script>

<template>
<!-- All pages will have it -->
<Slider/>
<Navbar/>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <RightSideView/>
      </div>
<!-- Current Page Content -->
      <div class="col-md-6">
<!-- Right Side Content -->
        <div class="">
          <h1 class="text-center">Governing Page</h1>
<!-- Design Component -->
          <div class="d-flex justify-content-center">
            <i class="designLine fa-solid fa-ellipsis"></i>
            <i class="designLine fa-brands fa-centos"></i>
            <i class="designLine fa-solid fa-ellipsis"></i>
         </div>
         <ul class="list-unstyled d-flex text-capitalize gap-2">
          <li>Home /</li>
          <li>governing /</li>
         </ul>
        </div>

<!-- All Work Start -->
<div class="" v-if="loading">loading....</div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
                <div class="container mx-auto mt-4">
                  <div class="row">
                    <div class="col-md-6" v-for="(allDetalis, index) in govorningDetalis" :key="index">
                      <div class="card">
                        <img :src="allDetalis.image" class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">{{ allDetalis.title }}</h5>
                          <h6 class="card-subtitle mb-2">{{ allDetalis.subtitle }}</h6>
                          <!-- <p class="card-text">{{ allDetalis.detalis.split(' ').slice(0, 10).join(' ') }} ....</p> -->
                          <hr>
                          <div class="" v-for="(detalisLink, index) in allDetalis.linkAll" :key="index">
                            <RouterLink to="/" class="btn mr-2"><i :class="detalisLink.icon"></i> {{ detalisLink.linkText }}</RouterLink> 
                          </div>
                        </div>
                      </div>
                    </div>    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

<!-- Left Side Content -->
      <div class="col-md-3">
        <LeftSideView/>
      </div>
    </div>
  </div> 
<!-- Footer Content -->
  <Footer/>
</template>

<style scoped>
.designLine{
  font-size: 3rem;
}
:root {
  --gradient: linear-gradient(to left top, #DD2476 10%, #FF512F 90%) !important;
}

body {
  background: #111 !important;
}

.card {
  background: #222;
  border: 1px solid #dd2476;
  color: rgba(250, 250, 250, 0.8);
  margin-bottom: 2rem;
}

.btn {
  border: 5px solid;
  border-image-slice: 1;
  background: var(--gradient) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: #71f086 !important;
  border-image-source:  var(--gradient) !important; 
  text-decoration: none;
  transition: all .4s ease;
}

.btn:hover, .btn:focus {
      background: var(--gradient) !important;
  -webkit-background-clip: none !important;
  -webkit-text-fill-color: #fff !important;
  border: 5px solid #fff !important; 
  box-shadow: #222 1px 0 10px;
  text-decoration: underline;
}
</style>