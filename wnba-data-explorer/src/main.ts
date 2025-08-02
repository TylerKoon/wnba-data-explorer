import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { GiBasketballBasket, GiBasketballJersey, GiBasketballBall, BiCalendar3, GiMoneyStack, CoHome} from "oh-vue-icons/icons";

addIcons(GiBasketballBasket, GiBasketballJersey, GiBasketballBall, BiCalendar3, GiMoneyStack, CoHome);


const app = createApp(App)

app.use(router)
app.component("v-icon", OhVueIcon);

app.mount('#app')
