import { createRouter, createMemoryHistory } from 'vue-router';
import Home from "./../views/Home.vue";
import Users from '../views/Users.vue';
import Groups from '../views/Groups.vue';
import Expense from '../views/Expense.vue';
import TotalMoney from '../views/TotalMoney.vue';
import Register from '../views/Auth/Register.vue';
import Login from '../views/Auth/Login.vue';
import ShowCalculation from '../views/ShowCalculation.vue';
import Index from '../views/Index.vue';
import HowToUse from '../views/HowToUse.vue';
import Profile from '../views/Profile.vue';
import Friends from '../views/Friends.vue';
import PublicGroups from '../views/PublicGroups.vue';
import Requests from '../views/Requests.vue';
import ShowTotalPublicCalculation from '../views/ShowTotalPublicCalculation.vue';


const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home,
        },
        {
            path: '/users',
            name: 'Users',
            component: Users,
        },
        {
            path: '/groups',
            name: 'Groups',
            component: Groups,
        },
        {
            path: '/expense',
            name: 'Expense',
            component: Expense,
        },
        {
            path: '/total-money',
            name: 'TotalMoney',
            component: TotalMoney,
        },
        {
            path: '/register',
            name: "Register",
            component: Register,
        },
        {
            path: '/login',
            name: "Login",
            component: Login,
        },
        {
            path: '/ShowCalculation/:id',
            name: "ShowCalculation",
            component: ShowCalculation,
        },
        {
            path: '/',
            name: "Index",
            component: Index,
        },
        {
            path: '/how-to-use',
            name: 'HowToUse',
            component: HowToUse,
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
        },
        {
            path: '/friends',
            name: 'Friends',
            component: Friends,
        },
        {
            path: '/public-groups',
            name: 'PublicGroups',
            component: PublicGroups,
        },
        {
            path: '/requests',
            name: 'Requests',
            component: Requests,
        },
        {
            path: '/show-total-public-calculation/:id/:group_id',
            name: 'ShowTotalPublicCalculation',
            component: ShowTotalPublicCalculation,
        }
    ],
});

export default router;