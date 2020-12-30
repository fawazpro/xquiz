<template>
  <div class="home">
    <form @submit.prevent="access" method="get">
      <div v-if="loading" class="loader"></div>
    <input type="number" v-model="formData.code" id="access" placeholder="Enter Quiz Code">
      <input class="btn" type="submit" value="Enter">

    </form>
  </div>
</template>

<script>
import { mapActions} from 'vuex';

export default {
  name: 'Home',
  data: function() {
    return{
      formData:{
         code: ''
      },
      loading: false
    }
  },
  methods:{
    ...mapActions(['saveQuiz']),
    access() {
      this.loading = true;
      this.axios.get('quiz/quiz?code='+this.formData.code).then((res)=>{
        this.saveQuiz(res.data)
        console.log(res.data)
        this.loading = false
        this.$router.push({name: 'Signin'})
      }, (err)=>{
        console.log(err.message+' Incorrect code '+ this.code);
        this.loading = false;
      })
      console.log(this.formData.code);

    }
    }
  }
</script>

<style scoped>
  #access{
    height: 2rem;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    text-align: center;
  }
</style>
