import axios from 'axios';
import axiosClient from '../../axios';


const chat = {
    state: {
        chats: [],
    },

    actions: {
        async connect()
        {

        },
        async sendMessage({ commit }, data)
        {
            await axiosClient.post('message/create', data);
        },

        async fetchAllMessages({ commit }, data)
        {
            await axiosClient.post('message', data)
                .then(res => {
                    commit('setChats', res.data);
                })
        },
    },

    mutations: {
        setChats(state, data)
        {
            state.chats = data;
            console.log(state.chats);
        }
    },
}

export default chat;