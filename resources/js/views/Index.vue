<template>
    <div>
        <div class="p-5 w-full rounded-xl bg-sky-600 text-center flex flex-col gap-5">
            <div>
                <p id="demo" class="text-2xl leading-10 text-white"></p>
                <p class="text-sm leading-10 text-white">ساخت و تهییه توسط اتاق 102 ابوذر و جناب آقای ایلیا</p>
            </div>
            <div v-if="!user.token" class="w-full flex md:flex-row flex-col gap-5">
                <div class="flex-1 p-2 rounded-xl bg-white flex gap-5 flex-col">
                    <router-link :to="{ name: 'HowToUse' }" class="border px-5 py-4 rounded-xl">راهنمای استفاده از  برنامه</router-link>
                </div>
                <div class="flex-1 p-2 rounded-xl bg-white flex gap-5 flex-col">
                    <router-link :to="{ name: 'Register' }" class="border px-5 py-4 rounded-xl">ثبت نام و شروع استفاده</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

let user = ref({});

let i = 0;
let txt = 'با دونگ دونگ، دونگ هاتو حساب کن!';
let speed = 100;
const typeWriter = () => {

    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

onMounted(() => {
    user.value = store.state.user.user;
    typeWriter();
})

</script>