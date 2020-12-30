<template>
  <div class="signin">
    <form @submit.prevent="sign" method="post">
      <div v-if="loading" class="loader"></div>
      <h4>Register/Login</h4>
      <div :disabled="loading" class="form-group">
        <!-- <label for="">Email</label> -->
        <input type="email" class="form-control" v-model="formData.email" aria-describedby="helpId" placeholder="Input your email address">
      </div>
      <div :disabled="loading" class="form-group">
        <!-- <label for="">Password</label> -->
        <input type="password" class="form-control" v-model="formData.password" aria-describedby="helpId">
      </div>
      <button type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data: function () {
    return{
      success: false,
      error: false,
      loading: false,
      formData: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    
  },
  methods:{
    sign(){
      this.loading = true;
      this.axios.post('quiz/users', this.formData).then((res)=>{
        console.log(res.data)
        this.loading = false
        this.$router.push({name: 'Quiz'})
      }, (err)=>{
        console.log('The email address already exists');
        this.loading = false;
      })
      console.log(this.formData.email);
    }
  }
}
</script>
<style scoped>
  input{
    height: 2rem;
    font-size: 1.8rem;
    border-radius: 0.5rem;
    text-align: center;
  }
</style>
