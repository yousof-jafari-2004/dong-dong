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
        }
    ],
});

export default router;