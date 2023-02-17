import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader';
import VueSocialSharing from 'vue-social-sharing'
import "./styles/defaultstyle.scss"

loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(VueSocialSharing)
  .mount('#app')
