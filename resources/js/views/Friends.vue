<template>
    <div>
        <div class="mb-28 md:mb-0">
            <div class="w-full rounded-xl flex items-center justify-between">
                <h3 class="text-md">لیست دوستان شما</h3>
                <button @click="findFriend = !findFriend" :class="'text-xs px-5 py-2 rounded-xl text-white border duration-150 ' + (!findFriend ? 'bg-sky-500 border-sky-500 hover:bg-white hover:text-sky-500' : 'bg-red-500 border-red-500 hover:bg-white hover:text-red-500')">
                    <span v-if="!findFriend">افزودن دوست جدید</span>
                    <span v-if="findFriend">بستن</span>
                </button>
            </div>
            <div v-if="findFriend" class="mt-5">
                <AddFriend/>
            </div>
            <div>
                <div v-if="loading">
                    loading
                </div>
                <div v-else>
                    <div>
                        <div class="mt-5 w-full px-5 py-3 rounded-xl bg-sky-500 text-white text-sm">
                            <span>لیست دوستان</span>
                        </div>
                        <div v-if="friends.length > 0" class="md:w-full flex flex-col gap-2 mt-2">
                            <div v-for="(friend, index) in friends" :key="index" class="w-full px-5 py-3 justify-between rounded-xl bg-gray-100 text-sm items-center flex gap-3">
                                <div>
                                    {{ friend.name }}
                                </div>
                                <div class="flex gap-3 items-center">
                                    <button @click="deleteFriend(friend.id)" class="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 duration-150">حذف دوست</button>
                                </div>
                            </div>
                        </div>
                        <div v-else class="w-full px-5 py-4 rounded-xl border border-yellow-500 bg-yellow-50 text-yellow-500 text-sm mt-5">
                            <span>شما هیچ دوستی ندارید</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AddFriend from '../components/AddFriend.vue';
import { useStore } from 'vuex';
import { useToast } from "vue-toastification";

const toast = useToast();

let findFriend = ref(false);

let friends = ref([]);

let loading = ref(false);

const store = useStore();

const deleteFriend = id => {
    store.dispatch('removeFriend', {id})
        .then(() => {
            toast.success("از لیست دوستان حذف شد")
            fetchAllFriends();
        })
}

const fetchAllFriends = () => {
    loading.value = true;
    store.dispatch('fetchAllFriends')
        .then(() => {
            loading.value = false;
            friends.value = store.state.friends.friends;
        })
}

onMounted(() => {
    fetchAllFriends();
})

</script>
