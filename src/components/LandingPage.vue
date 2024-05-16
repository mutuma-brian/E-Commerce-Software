<template>
  <div>
    <button @click="obtainData">GET DATA</button>
    <div class="scroll-container">
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ index }}: {{ item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      items: [] 
    };
  },
  methods: {
    obtainData() {
      const apiURL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
      fetch(apiURL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Response is not okay');
          }
          return response.json();
        })
        .then(data => {
          this.items = data.data;
        })
        .catch(error => {
          console.log('Unsuccessful : ', error);
        });
    }
  }
}
</script>

<style>
.scroll-container {
  height: 200px; 
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
}

.scroll-container ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scroll-container li {
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.scroll-container li:last-child {
  border-bottom: none;
}
</style>
