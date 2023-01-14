import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

import Pusher from 'pusher-js';
import Echo from "laravel-echo"

const pusherKey = 'public-key-123';
const pusherCluster = 'mt1';

const VueEchoConfig = {
  broadcaster: 'pusher',
  key: pusherKey,
  cluster: pusherCluster,
  encrypted: false,
  wsHost: '127.0.0.1',
  wsPort: 6001,
  forceTLS: false,
  disableStats: false,
};

const VuePusherConfig = new Pusher(pusherKey, VueEchoConfig);

const echo = new Echo({
  ...VueEchoConfig,
  client: VuePusherConfig,
});

echo.channel('weather-station')
  .listen('WeatherStationUpdateEvent', async (data: any) => {
    console.log('new message received')
    console.log(data)
  })



/* Theme variables */
import '@/theme/variables.css';
import "@/theme/tailwind.css";
import "@/assets/vendor/wather-icons/sass/weather-icons.scss";


const app = createApp(App)
  .use(IonicVue)
  .use(router)
  ;

router.isReady().then(() => {
  app.mount('#app');
});
