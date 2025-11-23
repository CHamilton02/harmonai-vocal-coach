import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Analysis from '@/frontend/Analysis.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Analysis', component: Analysis },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;