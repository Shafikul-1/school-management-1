<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const item = ref([])
const loading = ref(true)

onMounted(async () => {
    const url = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=b726bfb9e3d346a9a6221c7846ca357b'
    const fetchData = await axios.get(url)
    loading.value = false
    console.log(fetchData.data.articles)
    item.value = fetchData.data.articles
})

</script>

<template>
    <h3>This is a demo Content</h3>
 
</template>