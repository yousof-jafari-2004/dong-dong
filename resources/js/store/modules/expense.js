import axios from 'axios';
import axiosClient from '../../axios';


const expense = {
    state: {
        expenses: [],
    },

    actions: {
        async createExpense({ commit }, data)
        {
            return await axiosClient.post('expenses/create', data)
                .then(res => {
                })
                .catch(err => {
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },

        async allExpenses({ commit })
        {
            return await axiosClient.get('expenses')
                .then(res => {
                    commit('setExpenses', res.data);
                })
        },

        async deleteExpense({ commit }, id)
        {
            return await axiosClient.delete(`expenses/delete/${id}`)
                .then(res => {
                    console.log(res);
                })
        }
    },

    mutations: {
        setExpenses(state, data){
            state.expenses = data.data;
        }
    },
}

export default expense;