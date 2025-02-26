import axios from 'axios';
import axiosClient from './../../axios';

// let token = ;

const user = {
    state: {
        user: {
            name: localStorage.getItem('name') ? JSON.parse(localStorage.getItem('name')) : null,
            token: localStorage.getItem('token') ? localStorage.getItem('token') : null,
        },
        peoples: [],
    },

    actions: {
        // register new user
        async register({commit} , data)
        {
            return await axiosClient.post('auth/register', data)
                .then(res => {
                    commit("setUserData", res.data)
                })
                .catch(err => {
                    return err.response.data.errors;
                })
        },

        // login user
        async login({ commit }, data)
        {
            return await axiosClient.post('auth/login', data)
                .then(res => {
                    commit("setUserData", res.data)
                })
                .catch(err => {
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },
        // create new people
        async createUser({ commit }, data)
        {
            return await axiosClient.post('user/create', data)
                .then(res => {
                })
                .catch(err => {
                    console.log(err);
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },

        // get all the peoples
        async allUsers({ commit })
        {
            return await axiosClient.get('user')
                .then(res => {
                    commit('setUsers', res.data)
                })
        },

        // delete people
        async deleteUser({ commit }, id)
        {
            return await axiosClient.delete(`user/delete/${id}`)
        },

        // edit the loggined user name and user name
        async changeUserName({ commit }, data)
        {
            return axiosClient.post('edit-user/name', data)
                .then(res => {
                    commit('updateUserData', res.data)
                })
                .catch(err => {
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },

        // update loggined user password
        async updatePassword({ commit }, data)
        {
            return axiosClient.post('edit-user/password', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },
    },

    mutations: {
        setUserData(state, data)
        {
            state.user.name = data.user;
            state.user.token = data.token;
            localStorage.setItem('token', state.user.token);
            localStorage.setItem('name', JSON.stringify(state.user.name));
        },

        updateUserData(state, data)
        {
            state.user.name = data;
            localStorage.setItem('name', JSON.stringify(state.user.name));
        },

        logout(state)
        {
            state.user.name = null;
            state.user.token = null;
            localStorage.clear('token');
            localStorage.clear('name');
        },

        setUsers(state, data){
            state.peoples = data;
        },
    }
};

export default user;