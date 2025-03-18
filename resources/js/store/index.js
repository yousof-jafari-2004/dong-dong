import { createStore } from "vuex";
import user from "./modules/user";
import group from "./modules/group";
import expense from "./modules/expense";
import total from "./modules/total";
import friends from './modules/friends';
import publicGroups from './modules/publicGroups';
import chat from './modules/chat';
import publicExpense from './modules/publicExpense';

const store = createStore({
    modules: {
        user: user,
        group: group,
        expense: expense,
        total: total,
        friends: friends,
        publicGroups: publicGroups,
        chat: chat,
        publicExpense: publicExpense,
    },
});

export default store;