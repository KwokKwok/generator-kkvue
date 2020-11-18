import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const toPath = to.path;
  // if (to.path != ("/login")) {
  //   if (!Getters.loginUser) {
  //     try {
  //       await User.getLoginInfo();
  //       next({ path: to.fullPath, replace: true });
  //       return;
  //     } catch {

  //     }
  //     if (!Getters.loginUser) {
  //       next(`/login?redirect=${toPath}`);
  //       return;
  //     }
  //   }
  // }
  // next();

  if (to.meta.title) {
    document.title = `${to.meta.title}`
  } else {
    document.title = process.env.VUE_APP_NAME
  }
});

export default router
