import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/components/Dashboard.vue';
import TheWelcomeView from '@/components/TheWelcome.vue';

const routes = [
  { path: '/', component: DashboardView },
  { path: '/the-welcome', component: TheWelcomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
