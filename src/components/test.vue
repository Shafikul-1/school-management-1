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
  }
];

const fastWithRandomIds = fast.map((item, index) => {
  if (index === 0) {
    return {
      id: index + 1,
      ...item
    };
  } else {
    return item;
  }
});

console.log(fastWithRandomIds);
</script>

<style   scoped>

</style>