<template>
  <div class="signin">
    <h2>Quiz</h2>
    <HelloWorld msg="/"></HelloWorld>
    <!-- <div v-for="quiz in allQuiz" :key="quiz.id"> -->
      <Quizlets :que=question[0][0] :opt1=question[0][1] :opt2=question[0][2] :opt3=question[0][3] :opt4=question[0][4]></Quizlets>
      <button @click="prev" :disabled="quizstart">Previous Question</button>
      <button @click="next" :disabled="quizend">Next Question</button>


      <button v-show="quizfinish">Submit</button>
    <!-- </div> -->
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters} from 'vuex';
import HelloWorld from '@/components/HelloWorld.vue';
import Quizlets from '@/components/Quizlets.vue';

export default {
  name: 'Home',
  data: ()=>{
    return{
      question:[],
      index: 0,
      quizend: true,
      quizfinish: false,
      quizstart: true,
    }
  },
  methods:{
    next(){
      console.log('Next Clicked' + this.quizfinish);
      localStorage.qid = this.index++;
      console.log(this.index);
      this.quizended();
    },
    prev(){
      console.log('Prev Clicked');
      localStorage.qid = this.index--;
      console.log(this.index);
      this.quizstarted();
    },
    quizstarted(){
      console.log(this.index+'is --- to');
      console.log(this.$store.getters.allQuiz.length);

      if(this.index == 0){
        return true;
      }else{
        return false;
      }
    },
    quizended(){
      if(this.index+1 == this.$store.getters.allQuiz.length){
        return true;
      }else{
        
        return false;
      }
    }
  },
  components: {
    HelloWorld,
    Quizlets
  },
  computed:{
    ...mapGetters(['allQuiz'])
  },
  created(){
    localStorage.qid = 0;  },
  mounted(){
    if(localStorage.qid){
      this.index = localStorage.qid;
    }else{
      this.index = 0;
    }

  },
  watch:{
    index(){
      localStorage.qid = this.index;
      this.question = this.$store.getters.allQuiz[this.index];
      this.quizend = this.quizended();
      this.quizfinish = this.quizended();
      this.quizstart = this.quizstarted();
    }
  }
}
</script>
