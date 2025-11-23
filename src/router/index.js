import { createRouter, createWebHistory } from 'vue-router';
import VocalCoachUI from '../frontend/components/VocalCoachUI.vue';
import ResultsPage from '../frontend/components/ResultsPage.vue';
import PitchGame from '@/frontend/components/PitchGame.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VocalCoachUI,
  },
  {
    path: '/results',
    name: 'Results',
    component: ResultsPage,
    props: true,
  },
  {
    path: '/exercise',
    name: 'Exercise',
    component: PitchGame
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
