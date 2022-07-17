import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Dialog from './components/Dialog.vue'
import ElButton from './components/Button.vue'
const app = createApp(App);
app.component('Dialog', Dialog);
app.use(Dialog)
app.component('ElButton', ElButton);
app.mount('#app')
