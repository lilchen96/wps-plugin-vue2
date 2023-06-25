import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Root',
    component: () => import('@/views/root/index.vue')
  },
  // demo
  {
    path: '/demo-dialog',
    name: 'DemoDialog',
    component: () => import('@/views/demo/dialog/index.vue')
  },
  {
    path: '/demo-taskpane',
    name: 'DemoTaskpane',
    component: () => import('@/views/demo/taskpane/index.vue')
  }
];

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  next();
});
export default router;
