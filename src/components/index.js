import Vue from 'vue'
import Message from './Message'
import Modal from './Modal'

//Vue.component('Message', Message)
const components = {
    Message,
    Modal
}

for (const [key, value] of Object.entries(components)) {
    Vue.component(key, value)
}
