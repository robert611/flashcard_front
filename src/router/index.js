import { createRouter, createWebHistory } from 'vue-router';
import DashboardPageView from '@/components/DashboardPage.vue';
import LoginPageView from '@/components/LoginPage.vue';
import RegisterPageView from '@/components/RegisterPage.vue';

const routes = [
  { path: '/', component: DashboardPageView },
  { path: '/login', component: LoginPageView },
  { path: '/register', component: RegisterPageView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
