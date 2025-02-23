import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '@/components/Dashboard.vue';
import LoginView from '@/components/Login.vue';
import RegisterView from '@/components/Register.vue';

const routes = [
  { path: '/', component: DashboardView },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
