// // store.js

import { createStore } from "vuex";
import axios from "axios";
// export default createStore({
//   state: {
//     todos: [],
//     received: [],
//     // dialog: false
//   },
//   mutations: {
//     SET_TODOS(state, todos) {
//       state.todos = todos;
//     },
//     SET_RECEIVED(state, received) {
//       console.log(state,"state")
//       console.log(received,"received")
//       state.received = [1,1,2,3,4,5];
//       console.log(state.received,"state.gfdbfdfd")

//     },
//     // SET_DIALOG(state, dialogStatus) {
//     //   state.dialog = dialogStatus;
//     // }
//   },
//   actions: {
//     async fetchTodos({ commit }) {
//       try {
//         const response = await axios.get('http://localhost:4800/todolist/fetchtodo');
//         // console.log(response.data,"12")
//         const a= response.data
//         commit('SET_RECEIVED',a );
//       } catch (error) {
//         console.error('Error fetching todos:', error);
//       }
//     },
//     async addTodo({ commit, state }, data) {
//       try {
//         const response = await axios.post('http://localhost:4800/todolist/addtodo', data);
//         commit('SET_TODOS', [...state.todos, response.data]);
//         // commit('SET_DIALOG', false);
//       } catch (error) {
//         console.error('Error creating todo:', error);
//       }
//     },
//     async deleteTodo({ commit, state}, todoId) {
//       try {
//         await axios.delete(`http://localhost:4800/todolist/deletetodo/${todoId}`);
//         const newTodos = state.todos.filter(todo => todo.id !== todoId);
//         commit('SET_TODOS', newTodos);
//       } catch (error) {
//         console.error('Error deleting todo:', error);
//       }
//     }
//   },
//   getters: {
//   TodoListData: state => {
//     console.log(state.received,'788465465')
//    return state.received;
//   }
//   }
// });

// store.js
// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

export default createStore({
  state: {
    received: [],
  },
  mutations: {
    // increment(state) {
    //   state.counter++;
    // },
    SET_RECEIVED(state, received) {
      console.log(received, "received");
      // state.received = received;
      state.received = received;
      console.log(state.received, "state.gfdbfdfd");

    },
  },
  actions: {
    async fetchTodos({ commit }) {
      try {
        const response = await axios.get(
          "http://localhost:4800/todolist/fetchtodo"
        );
        const a = response.data;
        commit("SET_RECEIVED", a);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    },
  },
  getters: {
    received(state) {
      console.log(state.received,"reciedensdjkvsdvjhkvfd")
      return state.received;
    },
  },
});
