<script setup>
const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab alias quas excepturi, delectus sapiente nemo? Nostrum voluptatem, corrupti asperiores numquam accusantium, provident nulla iusto repellat ea accusamus saepe temporibus aut?";
const paragraphLength = 5;
const truncatedText = text.split(' ').slice(0, paragraphLength).join(' ');
</script>

<template>
  <p>{{ truncatedText }}</p>
</template>

