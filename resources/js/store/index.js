import { createStore } from "vuex";
import user from "./modules/user";
import group from "./modules/group";
import expense from "./modules/expense";
import total from "./modules/total";
import friends from './modules/friends';

const store = createStore({
    modules: {
        user: user,
        group: group,
        expense: expense,
        total: total,
        friends: friends,
    },
});

export default store;