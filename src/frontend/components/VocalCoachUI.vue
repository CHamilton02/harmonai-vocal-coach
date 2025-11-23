<script setup>
import Record from "@/frontend/components/Record.vue";
</script>

<script>
export default {
  name: 'VocalCoachUI',
  data() {
    return {
      // Represents the current state of the app
      // 'idle', 'recording', 'analyzing', 'results'
      appState: 'idle', // 'idle', 'recording', 'analyzing', 'results'
      analysis: null, // To store results from the backend
    };
  },
  methods: {
    // This method will be triggered by an event from a child component
    // or after the recording is processed.
    showResults() {
      // Mock analysis data
      this.analysis = {
        vocalRange: {
          type: 'Baritone',
          low: 'G2',
          high: 'F4',
        },
        timbre: {
          brightness: 75, // out of 100
          richness: 60,
        },
        tone: ['Clear', 'Warm'],
        improvements: [
          { id: 1, title: 'Breathing Support', description: 'Practice diaphragmatic breathing to sustain notes longer.' },
          { id: 2, title: 'Pitch Accuracy', description: 'Use pitch training apps to improve your accuracy on scales.' },
        ],
      };
      this.appState = 'results';
    },
    // Method to go back to the initial state
    resetApp() {
      this.appState = 'idle';
      this.analysis = null;
    }
  }
};
</script>

<template>
  <div id="app-container">
    <header>
      <h1>Vocal Coach AI</h1>
      <p>Analyze your voice and discover your potential.</p>
    </header>

    <main>
      <Record />
    </main>
  </div>
</template>

<style scoped>
/* Add some modern styling */
#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

header {
  margin-bottom: 40px;
}

h1 {
  color: #42b983;
}

.card {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #36a473;
}

.results-container ul {
  list-style-type: none;
  padding: 0;
}

.results-container li {
  margin-bottom: 10px;
}
</style>