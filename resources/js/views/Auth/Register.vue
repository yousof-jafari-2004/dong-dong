<template>
    <div class="">
        <form class="w-full" @submit.prevent="register">
            <div class="flex flex-col w-full gap-5">
                <div class="w-full rounded-xl px-5 py-3 text-gray-700 bg-gray-50 border">
                    <h3 class="text-xl">ثبت نام در سامانه</h3>
                </div>
                <div v-if="errors.name || errors.user_name || errors.password" class="bg-red-100 border border-red-500 p-5 rounded-xl">
                    <ul class="flex flex-col gap-5 text-red-500 text-sm">
                        <li v-if="errors.name">لطفا نام و نام خانوادگی را وارد کنید</li>
                        <li v-if="errors.user_name">این نام کاربری قبلا گرفته شده</li>
                        <li v-if="errors.password">لطفا تایید گذرواژه را برسی کنید، رمز عبور حداقل 8 کارکتر دارد</li>
                    </ul>
                </div>
                <div class="flex md:flex-row flex-col gap-5 w-full">
                    <div class="flex-1 flex dark">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <input v-model="user.name" type="text" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="نام و نام خانوادگی">
                    </div>
                    <div class="flex-1 flex dark">
                        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                            </svg>
                        </span>
                        <input v-model="user.user_name" type="text" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="نام کاربری">
                    </div>
                </div>
                <div class="flex">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                        <svg fill="currentColor" class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
                    </span>
                    <input v-model="user.password" type="password" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="گذرواژه">
                </div>
                <div class="flex">
                    <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md">
                        <svg fill="currentColor" class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"/><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"/></svg>
                    </span>
                    <input v-model="user.password_confirmation" type="password" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="تایید گذرواژه">
                </div>
                <div class="flex flex-col justify-between gap-5">
                    <button type="submit" class="w-full text-center flex items-center justify-center px-3 py-3 rounded-xl bg-gradient-to-b from-blue-500 to-sky-500 text-white hover:from-blue-600 hover:to-sky-600 duration-150">
                        <span v-if="!loading">ثبت نام</span>
                        <span v-else class="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="shape-rendering: auto; display: block; background: transparent;" width="30" height="30" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g>
                            <circle fill="#ffffff" r="4" cy="50" cx="60">
                                <animate begin="-0.67s" keyTimes="0;1" values="95;35" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
                                <animate begin="-0.67s" keyTimes="0;0.2;1" values="0;1;1" dur="1s" repeatCount="indefinite" attributeName="fill-opacity"></animate>
                            </circle>
                            <circle fill="#ffffff" r="4" cy="50" cx="60">
                                <animate begin="-0.33s" keyTimes="0;1" values="95;35" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
                                <animate begin="-0.33s" keyTimes="0;0.2;1" values="0;1;1" dur="1s" repeatCount="indefinite" attributeName="fill-opacity"></animate>
                            </circle>
                            <circle fill="#ffffff" r="4" cy="50" cx="60">
                                <animate begin="0s" keyTimes="0;1" values="95;35" dur="1s" repeatCount="indefinite" attributeName="cx"></animate>
                                <animate begin="0s" keyTimes="0;0.2;1" values="0;1;1" dur="1s" repeatCount="indefinite" attributeName="fill-opacity"></animate>
                            </circle>
                            </g><g transform="translate(-15 0)">
                            <path transform="rotate(90 50 50)" fill="#ffffff" d="M50 50L20 50A30 30 0 0 0 80 50Z"></path>
                            <path fill="#ffffff" d="M50 50L20 50A30 30 0 0 0 80 50Z">
                                <animateTransform keyTimes="0;0.5;1" values="0 50 50;45 50 50;0 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                            </path>
                            <path fill="#ffffff" d="M50 50L20 50A30 30 0 0 1 80 50Z">
                                <animateTransform keyTimes="0;0.5;1" values="0 50 50;-45 50 50;0 50 50" dur="1s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                            </path>
                            </g><g></g></g><!-- [ldio] generated by https://loading.io --></svg>
                        </span>
                    </button>
                    <router-link :to="{ name: 'Login' }" class="text-sky-500">حساب ساخته اید؟ اینجا کلیک کنید</router-link>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref } from 'vue';
import router from '../../router';
let loading = ref(false);

let user = ref({
    name: '',
    user_name: '',
    password: '',
    password_confirmation: '',
});

let errors = ref({
    name: '',
    user_name: '',
    password: '',
});

const store = useStore();

const register = () => {
    let data = {
        name: user.value.name,
        user_name: user.value.user_name,
        password: user.value.password,
        password_confirmation: user.value.password_confirmation,
    }
    loading.value = true;
    store.dispatch('register', data)
        .then(res => {
            loading.value = false;
            if(res)
            {
                errors.value.name = res.name ? res.name : null;
                errors.value.user_name = res.user_name ? res.user_name : null;
                errors.value.password = res.password ? res.password : null;
            }else {
                router.push({ name: "Home" })
            }
        })
}
</script>