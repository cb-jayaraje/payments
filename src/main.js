import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './index.css'
import store from './store/index.js'

import vClickOutside from "click-outside-vue3"


// createApp(App).mount('#app')

const app = createApp(App);

// app.directive('click-outside', {
//     mounted(el, binding, vnode) {
//       el.clickOutsideEvent = function(event) {
//         if (!(el === event.target || el.contains(event.target))) {
//           binding.value(event, el);
//           console.log("check click ", binding.value(event, el))
//         }
//       };
//       document.body.addEventListener('click', el.clickOutsideEvent);
//     },
//     unmounted(el) {
//       document.body.removeEventListener('click', el.clickOutsideEvent);
//     }
//   });


  app.use(vClickOutside)

  

app.use(store)
app.use(router)

app.mount('#app')
