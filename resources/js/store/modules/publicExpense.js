import axios from 'axios';
import axiosClient from '../../axios';


const publicExpense = {
    state: {
        groups: [],
        publicExpenses: [],
        steps: [],
        total: [],
        currentExpense: [],
    },

    actions: {
        async createPublicExpense({ commit }, data)
        {
            return axiosClient.post('public-expense/create', data)
                .then(res => {
                })
                .catch(err => {
                    return err.response.data.errors ? err.response.data.errors : err.response.data.error;
                })
        },

        async fetchAllPublicExpense({ commit }, data)
        {
            return axiosClient.post('public-expense', data)
                .then(res => {
                    commit('setExpenses', res.data.data);
                })
        },

        async fetchPublicSteps({ commit }, data)
        {
            return axiosClient.post('public-expense/steps', data)
                .then(res => {
                    commit('setPublicSteps', res.data)
                })
        },

        async fetchTotalPublicPayment({commit}, data)
        {
            return await axiosClient.post(`public-expense/total-payment`, data)
                .then(res => {
                    commit("setPublicTotal",res.data)
                })
        },

        async fetchCurrentPublicExpense({ commit }, data)
        {
            return await axiosClient.post(`public-expense/edit`, data)
                .then(res => {
                    commit("setCurrentExpense",res.data.data)
                })
        },

        async updatePublicExpense({ commit }, data)
        {
            return axiosClient.post('public-expense/update', data)
                .then(res => {
                })
                .catch(err => {
                    return err.response.data.errors ? err.response.data.errors : err.response.data.error;
                })
        },
    },

    mutations: {
        setExpenses(state, data)
        {
            state.publicExpenses = data;
        },
        setPublicTotal(state, data)
        {
            state.total = data;
        },
        setPublicSteps(state, data)
        {
            state.steps = data;
        },
        setCurrentExpense(state, data)
        {
            state.currentExpense = data;
        }
    }
}

export default publicExpense;
