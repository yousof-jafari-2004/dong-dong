<template>
    <div class="w-full bg-gray-100 p-5 rounded-xl">
        <div class="w-full">
            <h1>افزودن</h1>
        </div>
        <div v-if="error" class="mt-5">
            <div class="w-full rounded-xl bg-yellow-50 border px-5 py-3 border-yellow-500 text-yellow-500">
                <span class="text-sm">{{ error }}</span>
            </div>
        </div>
        <div class="mt-5">
            <form @submit.prevent="findFriend">
                <div class="flex md:flex-row flex-col gap-5 text-sm">
                    <div class="flex-1 flex dark">
                        <input v-model="search" type="text" class="rounded-xl bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="نام کاربری مثلا :jafariyousef24">
                    </div>
                    <div class="flex">
                        <button type="submit" class="w-full text-center flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-b from-blue-500 to-sky-500 text-white hover:from-blue-600 hover:to-sky-600 duration-150">
                            <span v-if="!loading">جستجو</span>
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
                    </div>
                </div>
            </form>
        </div>
        <div v-if="searched" class="mt-5 flex flex-col gap-5">
            <div v-if="friend.length > 0">
                <div class="w-full">
                    <div class="w-full mb-3">
                        <span class="text-sky-500">کاربران یافت شده:</span>
                    </div>
                    <div class="w-full rounded-xl bg-white px-3 py-2 flex items-center justify-between">
                        <span class="text-sm">{{ friend[0].name }}</span>
                        <div v-if="friend[0].requested" class="px-3 py-4 bg-yellow-500 rounded-xl text-xs text-white">
                            <span>درخواست فرستاده شد</span>
                        </div>
                        <div v-else-if="friend[0].is_friend" class="px-3 py-4 bg-yellow-500 rounded-xl text-xs text-white">
                            <span>شما با این کاربر دوست هستیدx</span>
                        </div>
                        <button v-else @click="sendFriendRequest(friend[0].id)" class="px-3 py-4 bg-green-500 rounded-xl text-xs text-white">
                            <span v-if="sending">...</span>
                            <span v-else>فرستادن درخواست</span>
                        </button>
                    </div>
                </div>
            </div>
            <div v-else class="w-full rounded-xl bg-yellow-50 border px-5 py-3 border-yellow-500 text-yellow-500">
                <span class="text-sm">کاربری با این نام کاربری وجود ندارد</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';

const toast = useToast();

const store = useStore();

let loading = ref(false);

let search = ref('');

let error = ref('');

let searched = ref(false);

let friend = ref([]);

let sending = ref(false);

const findFriend = () => {
    if(search.value == '') 
    {
        error.value = 'لطفا نام کاربری را وارد کنید';
    }else {
        searched.value = true;
        error.value = '';
        loading.value = true;
        store.dispatch('findFriend', {'user_name': search.value})
            .then(() => {
                loading.value = false;
                friend.value = store.state.friends.searchedFriend;
            })
    }
}

const sendFriendRequest = id => {
    sending.value = true;
    store.dispatch('sendRequest', { id })
        .then(() => {
            toast.success("ارسال شد")
            sending.value = false;
            findFriend()
        })

}
</script>