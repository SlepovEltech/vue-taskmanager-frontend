<template>
  <div>
    <div v-if="task" class="col s6 offset-s3">
      <h1>{{task.title}}</h1>
      <form @submit.prevent="submitHandler">
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea v-model="description" style="min-height: 50px" id="description" class="materialize-textarea"></textarea>
          <label for="description">Описание задачи</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

        <div v-if="task.status === 'active'">
          <input type="text" ref="datepicker">
          <button class="btn blue" type="submit" style="margin-right: 1em;">Обновить</button>
          <button class="btn" style="" type="submit" @click="completeTask">Завершить</button>
        </div>

      </form>
    </div>
    <h1 v-else>Task not found</h1>

  </div>

</template>

<script>

export default {
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null,
  }),
  computed:{
    task(){
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  mounted(){
    this.chips = M.Chips.init(this.$refs.chips , {
      placeholder: 'Task tags',
      data: this.task.tags
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      setDefaultDate: true,
      defaultDate: new Date(this.task.deadline)
    })

    this.description = this.task.description;
    console.log(this.task.deadline)
    setTimeout(()=>{M.updateTextFields()}, 0)
  },
  methods:{
    submitHandler(){
      this.$store.dispatch('updateTask',{
        id: this.task.id,
        description: this.description,
        tags: this.chips.chipsData,
        deadline: this.date.date
      });
      this.$router.push('/list');
    },
    completeTask(){
      this.$store.dispatch('completeTask', this.task.id)
      this.$router.push('/list');

    }
  },
  destroyed(){
    if(this.date && this.date.destroy){
      this.date.destroy()
    }
    if(this.chips && this.chips.destroy){
      this.chips.destroy()
    }
  }

}
</script>

<style scoped>

</style>