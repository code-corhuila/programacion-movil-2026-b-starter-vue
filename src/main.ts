import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'

import App from '@/app/App.vue'
import router from '@/app/router'

/* CSS basico de Ionic (requerido para que los componentes funcionen) */
import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'

/* Utilidades CSS opcionales */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

/* Modo oscuro segun el sistema */
import '@ionic/vue/css/palettes/dark.system.css'

/* Variables del tema */
import '@/app/theme/variables.css'

const app = createApp(App).use(IonicVue).use(router)

router.isReady().then(() => {
  app.mount('#app')
})
