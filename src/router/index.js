import { createRouter, createWebHistory } from 'vue-router'
import VocalCoachUI from '../frontend/components/VocalCoachUI.vue'
import ResultsPage from '../frontend/components/ResultsPage.vue'
import PitchGame from '@/frontend/components/PitchGame.vue'

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
    component: PitchGame,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const state = history.state

  if (to.path != '/results') {
    next()
    return
  }

  if (
    !state.results ||
    !state.url ||
    Object.keys(state.value || {}).length === 0
  ) {
    next({ name: 'Home' })
  } else {
    next()
  }
})

export default router
