<template>
    <div class="text-gray-700">
        <Header></Header>
        <div v-if="user.token" class="grid md:grid-cols-4 grid-cols-1 gap-5 px-5">
            <div class="col-span-1 md:block hidden">
                <Menu/>
            </div>
            <div class="md:col-span-3 col-span-1">
                <div class="p-5 border w-full md:mt-28 mt-28 rounded-xl">
                    <RouterView />
                </div>
            </div>
        </div>
        <div v-else class="px-5">
            <div class="p-5 w-full md:mt-28 mt-28 rounded-xl">
                <RouterView />
            </div>
        </div>
        <div v-if="user.token" class="md:hidden block">
            <MobileMenu/>
        </div>
    </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import MobileMenu from './components/MobileMenu.vue';
import { useStore } from 'vuex';
import { ref, onMounted } from 'vue';

const store = useStore();

let user = ref({});

onMounted(() => {
    user.value = store.state.user.user;
});
</script>