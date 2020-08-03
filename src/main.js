import Vue from 'vue'
import App from './App.vue'

var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})

var example2 = new Vue({
  el: '#example-3',
  methods: {
    say: function(message) {
      alert(message)
    },
    warn: function(message,event) {
      if (event) event.preventDefault()
      alert(message)
    }
  }
})