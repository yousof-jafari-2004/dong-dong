import axios from 'axios';
import axiosClient from '../../axios';


const friends = {
    state: {
        friends: [],
        friendRequests: [],
        searchedFriend: [],
    },

    actions: {
        async findFriend({ commit }, user){
            await axiosClient.post('friend/find', user)
                .then(res => {
                    commit('setSearchedFriend', res.data)
                })
        },
        async sendRequest({ commit }, id){
            await axiosClient.post('friend/request', id)
        },
        async fetchAllRequests({ commit })
        {
            await axiosClient.get('friend/requests')
                .then(res => {
                    commit('setFriendRequests', res.data)
                })
        },
        async fetchAllFriends({ commit })
        {
            await axiosClient.get('friend/all')
                .then(res => {
                    commit('setFriends', res.data)
                })
        },
        async removeFriend({ commit }, id)
        {
            await axiosClient.post('friend/remove', id)
        },
        async acceptFriend({ commit }, id)
        {
            await axiosClient.post('friend/accept', id)
        },
        async rejectFriend({ commit }, id)
        {
            await axiosClient.post('friend/reject', id)
        },
    },

    mutations: {
        setFriends(state, data)
        {
            state.friends = data;
        },
        setSearchedFriend(state, data)
        {
            state.searchedFriend = data;
        },

        setFriendRequests(state, data)
        {
            state.friendRequests = data;
        }
    },
}

export default friends;