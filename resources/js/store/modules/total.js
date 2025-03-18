import axios from 'axios';
import axiosClient from '../../axios';


const total = {
    state: {
        total: [],
        allPayments: [],
    },

    actions : {
        async fetchTotalPayment({commit}, id)
        {
            return await axiosClient.get(`total/all/${id}`)
                .then(res => {
                    commit("setTotal",res.data)
                })
        },
        async fetchAllPayment({commit})
        {
            return await axiosClient.get('total/all')
                .then(res => {
                    commit('setAllPayments' , res.data)
                })
        }
    },

    mutations: {
        setTotal(state, data)
        {
            state.total = data;
        },
        setAllPayments(state, data)
        {
            state.allPayments = data;
        }
    }
}

export default total;