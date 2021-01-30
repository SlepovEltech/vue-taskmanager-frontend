import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
  },
  mutations: {
    addTask(state, task){
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, tags, deadline}){
      let idx = state.tasks.findIndex(t => t.id === id);
      let task = state.tasks[idx];

      state.tasks[idx] = {...task, deadline,description,tags};
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    completeTask(state, id){
      let idx = state.tasks.findIndex(t => t.id === id)
      state.tasks[idx].status = 'completed';
      localStorage.setItem('tasks', JSON.stringify(state.tasks));

    }
  },
  actions: {
    addTask({commit}, task){
      commit('addTask',task);
    },
    updateTask({commit}, task){
      commit('updateTask', task)
    },
    completeTask({commit}, id){
      commit('completeTask', id)
    }
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(t => t.id === id)
  }
})
