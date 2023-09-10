<!-- <script setup>
const axios = require('axios');

const url = 'https://raw.githubusercontent.com/Shafikul-1/school-management-1/master/data/db.json';

axios.get(url)
  .then(response => {
    // Handle the JSON data here
    const jsonData = response.data;
    console.log(jsonData);
  })
  .catch(error => {
    // Handle errors here
    console.error('Error fetching data:', error);
  });


</script>
<template>
    <h2>Test Page</h2>
</template>

<style scoped>

</style> -->


<template>
    <div>
      <div class="fas" v-for="(item, index) in allData" :key="index">
        <p>{{ item.className }}</p>
        <div v-for="rout in item.classRotine">
            <p>{{ rout.dayName }}</p>
            <div class="" v-for="allDet in rout.subjectAndTime">
                <p>{{ allDet.name }}</p>
                <p>{{ allDet.time }}</p>
            </div>
        </div>
      </div>
      <div v-if="loading">Loading data...</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const allData = ref([]);
  const loading = ref(true);
  
  const url = 'https://raw.githubusercontent.com/Shafikul-1/school-management-1/master/data/db.json';
  
  onMounted(async () => {
    try {
      const response = await axios.get(url);
      const jsonData = response.data;
      console.log(jsonData.allreotren);
  
      allData.value = jsonData.allreotren;
      loading.value = false; // Set loading to false once data is received
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  });
  </script>
  
  <style scoped>
  </style>
  
  
  <style scoped>
  .fas{
    margin: 6px 16px;
    letter-spacing: 4px;
  }
  </style>
  


<!-- fetch(url)
.then(res => res.json())
.then(result => {console.log(result)})
.catch(erro => {console.log(erro)}) -->