<script setup>
import { RouterLink } from 'vue-router'
import {headOfDetails, NecessaryWebsite} from '../../../data/data'
// console.log(HeadTeacherData)
</script>

<template>
<!-- Head Teacher Detalis -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 rightSideBg">
                <h2 class="fs-4 text-center py-2 bg-success rounded">Head Teacher List</h2>
                <div class="overflow-auto teacherDetalisHeight " >
                    <template v-for="(teacherDetails, index) in headOfDetails" :key="index" >
                        <div class="card headTeacherList mx-auto my-3  shadow bg-body-tertiary rounded">
                            <img :src="teacherDetails.sirDetails.image" class="card-img-top" alt="...">
                            <div class="card-body">
                                <p class="card-text text-capitalize">{{ teacherDetails.sirDetails.appellation }}</p>
                                <h5 class="card-title text-capitalize">{{ teacherDetails.sirDetails.name }}</h5>
                                <p class="card-text"><span>{{ teacherDetails.sirDetails.massage.split(' ').slice(0, 15).join(' ') }}</span> <RouterLink to="/teaher-details" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover text-capitalize">read more ...</RouterLink></p>
                            </div>
                        </div>
                    </template> 
                </div>
            </div>
        </div>
    </div>

<!-- Necessary website links -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 rightSideBg">
                <h2 class="fs-4 text-center text-capitalize py-2 bg-success rounded">Necessary website links</h2>
                <ul class="otherWebsiteLInk">
                    <li v-for="(otherWebsite, index) in NecessaryWebsite" :key="index" class=" ">
                        <a :href="otherWebsite.link" target="_blank" class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">
                            <samp class="text-dark">{{ otherWebsite.name }}</samp> 
                            <i class="fa-solid fa-right-from-bracket newTapOpenLink"></i>
                        </a>
                    </li> 
                </ul>
            </div>
        </div>
    </div>

<!-- Emargency Hotline -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12 rightSideBg">
                <h2 class="fs-4 text-center text-capitalize py-2 bg-success rounded">Emergency hotline</h2>
                <div class="">
                    <img class="h-100 w-100" src="https://github.com/Shafikul-1/allImage/blob/main/SchoolImage/national-helpline.jpg?raw=true" alt="">
                </div>
            </div>
        </div>
    </div>

<!-- Korona Virus Hotline -->
    <div class="container-fluid">
        <div class="row ">
            <div class="col-md-12 rightSideBg">
                <h2 class="fs-4 text-center text-capitalize py-2 bg-success rounded">Communication to prevent corona virus</h2>
                <div class="">
                    <a href="https://corona.gov.bd/">
                        <img class="w-100 h-100" src="https://github.com/Shafikul-1/allImage/blob/main/SchoolImage/corona.jpeg?raw=true" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
 
 <!-- Korona Virus Hotline -->
    <div class="container-fluid">
        <div class="row ">
            <div class="col-md-12 rightSideBg">
                <h2 class="fs-4 text-center text-capitalize py-2 bg-success rounded">What to do to prevent dengue</h2>
                <div class="">
                    <a href="https://bangladesh.gov.bd/site/page/91530698-c795-4542-88f2-5da1870bd50c">
                        <img class="w-100 h-100" src="https://github.com/Shafikul-1/allImage/blob/main/SchoolImage/dengue.jpeg?raw=true" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
 
<!-- Korona Virus Hotline -->
  <div class="container-fluid">
        <div class="row ">
            <div class="col-md-12 rightSideBg">
                <h2 class="fs-4 text-center text-capitalize py-2 bg-success rounded">Our location on the map</h2>
                <div class="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.5483641246735!2d88.78583226674353!3d24.914688961177074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc8127a7c91887%3A0x17a18469721858be!2z4Kas4KaV4Ka-4Kaq4KeB4KawIOCmuOCmsOCmleCmvuCmsOCmvyDgpqrgp43gprDgpr7gpqXgpq7gpr_gppUg4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kef!5e0!3m2!1sen!2sbd!4v1694023569241!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
 
</template>

<style scoped>
.teacherDetalisHeight{
    height: 22rem;
}
.rightSideBg{
    border-radius: 6px;
    background: rgba(222, 222, 160, 0.434);
    padding: 1rem .7rem;
    margin: 0.5rem 0;
    transition-duration: 0.5s;
}
.rightSideBg:hover{
    box-shadow: -1px 2px 4px 1px #a683c6;
    transition-duration: 0.5s;
    background: white;
}
.otherWebsiteLInk{
    padding: 0px 0px 0px 20px;
}
.otherWebsiteLInk li{
    list-style: square;
}
.newTapOpenLink{
    margin-left: 9px;
    rotate: 329deg;
    font-size: 19px;
}
</style>