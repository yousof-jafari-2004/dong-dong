<template>
    <div>
        <div>
            <h1>درخواست های دوستی</h1>
        </div>
        <div class="mt-5 w-full">
            <div class="w-full px-5 py-3 rounded-xl bg-sky-500 text-white text-sm">
                <span>درخواست های تازه</span>
            </div>
            <div v-if="requests.length > 0" class="md:w-full flex flex-col gap-2 mt-2">
                <div class="w-full px-5 py-3 rounded-xl bg-gray-100 text-sm items-center flex gap-3">
                    <div class="flex-1">
                        <span>نام</span>
                    </div>
                    <div class="flex-1 flex gap-3 items-center">
                        <span>عملیات</span>
                    </div>
                </div>
                <div v-for="(req, index) in requests" :key="index" class="w-full px-5 py-3 rounded-xl bg-gray-100 text-sm items-center flex gap-3">
                    <div class="flex-1">
                        {{ req.user.name }}
                    </div>
                    <div class="flex-1 flex gap-3 items-center">
                        <button @click="accept(req.user.id, req.id)" class="px-3 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 duration-150">قبول</button>
                        <button @click="reject(req.user.id, req.id)" class="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 duration-150">رد</button>
                    </div>
                </div>
            </div>
            <div v-else class="w-full px-5 py-4 rounded-xl border border-yellow-500 bg-yellow-50 text-yellow-500 text-sm mt-5">
                <span>شما هیچ درخواستی ندارید</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useToast } from "vue-toastification";

const toast = useToast();

const store = useStore();

let loading = ref(false);

let requests = ref([]);

const accept = (id, reqId) => {
    store.dispatch('acceptFriend', {id, reqId})
        .then(() => {
            toast.success("به لیست دوستان شما اضافه شد")
            fetchAllReqs();
            store.dispatch('getUserData');
        })
}

const reject = (id, reqId) => {
    store.dispatch('rejectFriend', {id, reqId})
        .then(() => {
            toast.success("درخواست رد شد")
            fetchAllReqs();
            store.dispatch('getUserData');
        })
}

const fetchAllReqs = () => {
    loading.value = true;
    store.dispatch('fetchAllRequests')
        .then(() => {
            loading.value = false;
            requests.value = store.state.friends.friendRequests;
        })
}

onMounted(() => {
    fetchAllReqs();
    store.dispatch('getUserData');
})
</script>