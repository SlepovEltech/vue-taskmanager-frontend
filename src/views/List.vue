<template>
  <div>
    <h1>Список задач</h1>
    <hr>
    <table v-if="tasks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Имя</th>
        <th>Срок</th>
        <th>Описание</th>
        <th>Статус</th>
        <th>Открыть</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(task,idx) of tasks" :key="task.id">
          <td>{{idx+1}}</td>
          <td>{{task.title}}</td>
          <td>{{new Date(task.deadline).toLocaleDateString() }}</td>
          <td>
            <div>
              {{task.description}}
            </div>
          </td>
          <td>{{task.status}}</td>
          <td>
            <router-link tag="button" class="btn btn-small" :to="{path : '/task/'+task.id}" >
               Open
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Task not found</p>
  </div>
</template>

<script>

export default {
  name: "List",
  computed:{
    tasks(){
      return this.$store.getters.tasks
    }
  }


}
</script>

<style scoped>
  .td {
    max-width : 250px;
  }

  .text{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>