import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from './../views/Home.vue';
const routes = [
  {
    path: '/',
    redirect: {
      path: '/home',
    },
  },
  {
    path: '/home',
    component: () => import('./../views/home.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
