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

var ex1_vm = new Vue({
  el: '#example',
  data: {
    message: '안녕하세요'
  },
  computed: {
    // 계산된 getter. 우리가 작성한 함수가 ex1_vm.reverseMessage의 getter 함수로 사용된다.
    reverseMessage: function() {
      // 'this'는 ex1_vm을 가리킨다
      return this.message.split('').reverse().join('')
    },
    methods: {
      reverseMessage: function() {
        return this.massage.split('').reverse().join('')
      }
    }
  }

})

var ex2_vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo bar'
  },
  watch: {
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  computed: {
    fullName:  {
      // getter
      get: function() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }

})

Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
    ',
    props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn',
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }

})