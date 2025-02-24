import axios from 'axios';
import axiosClient from '../../axios';


const group = {
    state: {
        groups: [],
    },

    actions: {
        async createGroup({ commit }, data)
        {
            return await axiosClient.post('groups/create', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },

        async allGroups({ commit })
        {
            return await axiosClient.get('groups')
                .then(res => {
                    commit('setGroups', res.data);
                })
        },

        async deleteGroup({ commit }, id)
        {
            return await axiosClient.delete(`groups/delete/${id}`)
        }
    },


    mutations: {
        setGroups(state, data)
        {
            state.groups = data.data;
        }
    }
};

export default group;