<template>
  <div class="quiz">
    <p>{{que}}</p>
    <div>
        <span>Option 1: {{opt1}}</span><br>
        <span>Option 2: {{opt2}}</span><br>
        <span>Option 3: {{opt3}}</span><br>
        <span>Option 4: {{opt4}}</span><br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quizlets',
  props: {
    que: String,
    opt1: String,
    opt2: String,
    opt3: String,
    opt4: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
span{
    display: block;
}
</style>
