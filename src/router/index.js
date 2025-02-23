import { createRouter, createWebHistory } from 'vue-router';
import DashboardPageView from '@/components/DashboardPage.vue';
import LoginPageView from '@/components/LoginPage.vue';
import RegisterPageView from '@/components/RegisterPage.vue';
import LogoutComponent from '@/components/LogoutComponent.vue';

const routes = [
  { path: '/', component: DashboardPageView },
  { path: '/login', component: LoginPageView },
  { path: '/register', component: RegisterPageView },
  { path: '/logout', component: LogoutComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
