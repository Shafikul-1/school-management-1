<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
let allData = ref([])
const heading = ref()
const loading = ref(true)
let url = 'https://raw.githubusercontent.com/Shafikul-1/school-management-1/master/data/latestNews.json'
onMounted(async () => {
    try {
        let res = await axios.get(url)
        console.log(res.data)
        let jsonData = res.data
        allData.value = jsonData.post.slice(0, 4);
        console.log(jsonData)
        heading.value = jsonData.heading
        loading.value = false
    } catch (error) {
        console.log('all handing error =>'+ error)
    }
})

const showOther = ()=>{

}
</script>

<template>

    <div class="container-fluid" >
        <div class="row" >
            <div class="">
                <h2>{{ heading }}</h2>
                <hr class="border border-danger border-2 opacity-50 w-50">
            </div>
            <div class="row">
                <div class="col-md-6 mt-2"  v-for="(postData, index) in allData" :key="index" >
                    <div class="card position-relative"> 
                        <button class="btn dateBtn">{{ postData.date }}</button>
                        <img v-bind="postData.image" class="card-img-top">
                        <div class="card-body">
                            <!-- <div class="">{{ index }}</div> -->
                            <h5 class="card-title">{{ postData.title }}</h5>
                            <p class="card-text">{{ postData.paragrape.split(' ').slice(0, 10).join(' ') }}</p>
                            <a :href="postData.button.link" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-capitalize">{{ postData.button.buttontext }} <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <h1 class="" v-if="loading">loading....</h1>
    <RouterLink to="/all-news" class="btn btn-success w-100 mt-3" @click="showOther()">Show All Result</RouterLink>
</template>

<style scoped> 
.dateBtn{
    background: gainsboro;
    width: 49%;
    padding: 0 0px;
    position: absolute;
    top: 6px;
    left: 9px;
} 
</style>