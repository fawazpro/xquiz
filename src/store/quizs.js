import axios from 'axios';
const state = {
    todos:[],
    quiz:[]
}

const getters = {
    allTodos: (state)=> state.todos,
    allQuiz: (state)=> state.quiz.questions,
};

const actions = {
    async fetchTodos({commit}){
        const reponse = await axios.get('quiz/users');
        commit('setTodos', reponse.data);
    },
    saveQuiz({commit},data){
        commit('setQuizs', data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    setQuizs: (state, data) => (state.quiz = data),
};

export default {
    state,
    getters,
    actions,
    mutations
};