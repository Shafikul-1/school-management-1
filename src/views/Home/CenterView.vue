<script setup>
import NoticSimpleCard from '../../components/NoticSimpleCard.vue'; 
import LatestNews from '../../components/LatestNews.vue';
import TargetPage from '../../components/TargetPage.vue';
</script>

<template> 
<div class="mt-3"></div>
<TargetPage class="text-capitalize" pageName="home" masageName="WelCome your School"/>
    <div class="container-fluid">
        <NoticSimpleCard/> 
        <LatestNews/>
    </div>
    
</template>
 
