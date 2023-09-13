<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import navbar from '../components/navbar.vue';
import Slider from '../components/Slider.vue';
const allDetalis = ref([])
const loading = ref(true)
const url = 'https://jsonplaceholder.typicode.com/photos'
onMounted(async () => {
    try {
        const response = await axios.get(url)
        const result = response.data
        allDetalis.value = result
        loading.value = false
    } catch (error) {
        console.error('Your Error => ' + error)
    }
})
const loadingImage = [
{image: 'https://i.gifer.com/ZZ5H.gif'},
{image: 'https://i.gifer.com/ZZ5H.gif'},
{image: 'https://i.gifer.com/ZZ5H.gif'},
{image: 'https://i.gifer.com/ZZ5H.gif'},
{image: 'https://i.gifer.com/ZZ5H.gif'},
]
</script>

<template>
<Slider/>
<navbar/>
    <div class="col-md-12" v-if="loading">
        <div class="row">
            <div class="col-md-3 my-3"  v-for="(load, index) in loadingImage" :key="index">
                <div class="card"  aria-hidden="true">
                    <img :src="load.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow"><span class="placeholder col-6"></span></h5>
                        <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-4"></span>
                        <span class="placeholder col-6"></span>
                        <span class="placeholder col-8"></span>
                        </p>
                        <a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="conatainer">
        <div class="row">
            <div class="col-md-3 my-3"  v-for="(data, index) in allDetalis" :key="index"> 
                <div class="card">
                    <img :src="data.thumbnailUrl" alt="">
                    <div class="card-body">
                        <h2>{{ data.title }}</h2>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<style scoped>

</style>