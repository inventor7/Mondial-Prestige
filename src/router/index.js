import { createRouter, createWebHistory } from "vue-router/auto";

import { useI18n } from "vue-i18n";

const router = createRouter({
  history: createWebHistory(),
  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
});

router.afterEach((to, from, failure) => {
  if (!failure) {
    setTimeout(() => {
      HSStaticMethods.autoInit();
    }, 100);
  }
});

export default router;
