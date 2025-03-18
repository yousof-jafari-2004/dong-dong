import axios from 'axios';
import axiosClient from '../../axios';


const publicGroups = {
    state: {
        groups: [],
    },

    actions: {
        async createPublicGroup({ commit }, data)
        {
            return await axiosClient.post('public-groups/create', data)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    return err.response.data.error ? err.response.data.error : err.response.data.errors;
                })
        },

        async allPublicGroups({ commit })
        {
            return await axiosClient.get('public-groups')
                .then(res => {
                    commit('setPublicGroups', res.data);
                })
        },

        async deletePublicGroup({ commit }, id)
        {
            return await axiosClient.delete(`groups/delete/${id}`)
        }
    },


    mutations: {
        setPublicGroups(state, data)
        {
            state.groups = data.data;
        }
    }
};

export default publicGroups;