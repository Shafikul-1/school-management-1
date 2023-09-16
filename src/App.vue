<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
const timeStart = ref()
// function updateTime() {
//   const now = new Date();
//   const hours = String(now.getHours()).padStart(2, '0');
//   const minutes = String(now.getMinutes()).padStart(2, '0');
//   const seconds = String(now.getSeconds()).padStart(2, '0');
//   const currentTime = `${hours}:${minutes}:${seconds}`;
//   timeStart.value = currentTime
// }

function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = String(hours % 12 || 12).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const currentTime = `${formattedHours}: ${minutes}:${seconds} ${ampm}`;
  timeStart.value = currentTime
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Call the function initially to display the time immediately
updateTime();

</script>

<template> 
<h3 class="time">Time: {{ timeStart }}</h3>

  <RouterView />
</template>


<style scoped>
.time{
  position: absolute;
    top: 0px;
    z-index: 4;
    left: 40%;
    color: white;
    animation: fadeIn 2s ease-in-out forwards, colorChange 5s infinite alternate;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes colorChange {
  0% {
    color: #ff7f50; /* Start color */
  }
  100% {
    color: #00ced1; /* End color */
  }
}
</style>