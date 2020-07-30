import Vue from 'vue'
import App from './App.vue'

var app = new Vue({
  el: '#app',
  data: {
    message: '안녕하세요 Vue!'
  }
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '이 페이지는' + new Date() + ' 에 로드 되었습니다.'
  }

})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'JavaScript 배우기' },
      { text: 'Vue 배우기' },
      { text: '무언가 멋진 것을 만들기'}
    ]
  }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: '안녕하세요! Vue.js!'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: '안녕하세요 Vue!'
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: ' <li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: 'Vegetables' },
      {id: 1, text: 'Cheese' },
      {id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

var data = { a : 1 } 
var vm = new Vue({
  el : '#example',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch 는 인스턴스 메서드
vm.$watch('a', function (newVal, oldVal) {
  // 'vm.a' 가 변경되면 호출되는 메서드
}) 