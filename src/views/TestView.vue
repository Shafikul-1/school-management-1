
<!-- 
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
      console.log(jsonData);
  
      allData.value = jsonData.allreotren;
      loading.value = false; // Set loading to false once data is received
    } catch (error) {
      // Handle errors here
      console.error('Error fetching data:', error);
    }
  });

  console.log('data => ' + allData)
  </script>
  
  <style scoped>
  </style>
  
  
  <style scoped>
  .fas{
    margin: 6px 16px;
    letter-spacing: 4px;
  }
  </style>
  
 -->

<!-- 
 <template>
  <div>
    <div style="border: 3px solid;" v-for="(item, index) in displayedItems" :key="index">
      <code>{{ index }}</code>
      <h1>{{ item.name }}</h1>
      <h1>{{ item.second }}</h1>
    </div>
    <button @click="showNextItems">Show Next 3</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const items = [
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  {
    name: 'fast',
    second: 'seconded'
  },
  
  // Add more items here
];
// const displayedItems = ref([]);
// const numberOfItemsToShow = ref(3);
// const startIndex = ref(0);
// const showNextItems = () => {
//   const endIndex = startIndex.value + numberOfItemsToShow.value;
//   displayedItems.value.push(...items.slice(startIndex.value, endIndex));
//   startIndex.value = endIndex;
// };

const numberOfItemsToShow = ref(3);
const startIndex = ref(0);
const displayedItems = ref(items.slice(startIndex.value, startIndex.value + numberOfItemsToShow.value));
const noMoreItems = computed(() => startIndex.value >= items.length);

const showNextItems = () => {
  const endIndex = startIndex.value + numberOfItemsToShow.value;
  if (endIndex <= items.length) {
    displayedItems.value.push(...items.slice(startIndex.value, endIndex));
    startIndex.value = endIndex;
  } else {
    alert('No more items to show');
  }
};
</script> -->








<template>
  <h2>Test</h2>
</template>

<script setup>
const fast = [
  {
    fast: 'one',
    second: 'two',
    three: {
      name: 'shafikul',
      secondName: 'islam'
    }
  },
  {
    fast: 'one',
    second: 'two',
    three: {
      name: 'shafikul',
      secondName: 'islam'
    }
  },
  
  {
    fast: 'one',
    second: 'two',
    three: {
      name: 'shafikul',
      secondName: 'islam'
    }
  },
  {
    fast: 'one',
    second: 'two',
    three: {
      name: 'shafikul',
      secondName: 'islam'
    }
  },
  {
    fast: 'one',
    second: 'two',
    three: {
      name: 'shafikul',
      secondName: 'islam'
    }
  },

];

const fastWithIds = [];

for (let i = 0; i < fast.length; i++) {
  const newItem = {
    id: i + 1,
    ...fast[i]
  };
  fastWithIds.push(newItem);
}

console.log(fastWithIds);
</script>

<style   scoped>

</style>