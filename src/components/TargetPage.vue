<script setup>
defineProps({
    masageName: String,
    pageName: String
})
</script>

<template>
    <div class="">
        <div class="section-header position-relative">
            <h2 class="section-title text-center wow fadeInDown animated" style="visibility: visible; animation-name: fadeInDown;">{{ masageName }}</h2>
        </div>
        <ul class="list-unstyled">
            <li class="text-capitalize">{{ pageName }} /</li>
        </ul>
    </div>
</template>
<style scoped>
.section-header .section-title:after{
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: -29px;
    left: 50%;
    margin-left: -12px;
    border: 5px solid #45aed6;
    border-radius: 20px;
    background: #fff;
}
.section-header .section-title:before{
    content: "";
    position: absolute;
    width: 140px;
    bottom: -16px;
    left: 50%;
    margin-left: -70px;
    height: 1px;
    background: #45aed6;
}
</style>
 