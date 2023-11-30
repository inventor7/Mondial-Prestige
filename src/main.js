import "./assets/style.css";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import "preline/preline";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  // something vue-i18n options here ...
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  //import messages from "./locales/en.json";
  messages: {
    en: en,
    ar: ar,
  },
});
const app = createApp(App);

app.use(router);
app.use(i18n);
app.use(createPinia());

app.mount("#app");
