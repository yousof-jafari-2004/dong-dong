<template>
    <div class="w-full p-5 bg-white border-b fixed top-0 left-0">
        <router-link :to="{ name: 'Index' }" class="flex items-center justify-between">
            <h1>دونگ دونگ</h1>
            <div class="flex items-center justify-center gap-5">
                <router-link v-if="store.state.user.user.token == 'undefined' || store.state.user.user.token == null" :to="{ name: 'Register' }" class="flex items-center px-5 gap-3 py-2 border rounded-xl">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    <span>ورود | عضویت</span>
                </router-link>
                <div v-else class="flex items-center justify-center gap-5">
                    <button  class="text-sm px-3 py-2 border rounded-xl flex items-center gap-3">
                        <div class="h-6 w-6 rounded-full bg-gray-500">
    
                        </div>
                        <span>{{ store.state.user.user.name.name }}</span>
                    </button>
    
                    <button @click="logout" v-if="store.state.user.user.token != 'undefined' || store.state.user.user.token != null" class="px-3 py-2 bg-red-500 text-white text-sm rounded-xl flex items-center gap-3">
                        <span>خروج</span>
                    </button>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const logout = () => {
    store.commit('logout');
}
</script>