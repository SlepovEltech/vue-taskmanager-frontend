<template>
  <div>
    <div class="col s6 offset-s3 ">
      <h1>Создать задачу</h1>
      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input  v-model="title" id="title" type="text" class="validate" required>
          <label for="title" class="active">Название</label>
          <span class="helper-text" data-error="Title is required" ></span>
          <span class="character-counter" style="float: right; font-size: 12px;">{{title.length}}/128</span>

        </div>

        <div class="chips" ref="chips"></div>

        <div class="input-field">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="description">Описание</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/2048</span>
        </div>

        <input type="text" ref="datepicker">
        <div class="center-align">
          <button class="btn darken-3" type="submit" >Создать задачу</button>

        </div>
      </form>
    </div>
  </div>
</template>


<script>

export default {
  name: "Create",
  data: () => ({
    description: '',
    title: '',
    chips: null,
    date: null,
  }),
  mounted(){
    this.chips = M.Chips.init(this.$refs.chips , {
      placeholder: 'Tags'
    })
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    })
  },
  methods:{
    submitHandler(){
      const task ={
        title : this.title,
        description : this.description,
        id : Date.now(),
        status : 'active',
        tags : this.chips.chipsData,
        deadline : this.date.date
      }
      console.log(task);
      this.$store.dispatch('addTask', task);
      this.$router.push('/list');
    },

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
