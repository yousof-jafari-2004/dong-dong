<template>
    <div class="w-full fixed md:w-1/2 overflow-x-hidden overflow-y-scroll w-full h-full top-0 left-0 bg-white">
        <div class="w-full bg-sky-500 px-5 py-3 text-white flex items-center justify-between">
            <div class="flex flex-col gap-2">
                <h3>{{ props.group.name }}</h3>
                <div>
                    <button @click="toggleShowMember" class="px-3 py-1 rounded-xl bg-white text-xs text-sky-500">{{ props.group.peoples.length }} عضو</button>
                </div>
            </div>
            <button @click="$emit('closeChat')" class="px-3 py-2 rounded-xl bg-white text-sky-500 text-xs">
                <span>بازگشت</span>
            </button>
        </div>
        <div v-if="selectedComponent == 'chat'" class="border p-5 flex flex-col gap-3 h-3/5 md:h-4/6 bg-white overflow-x-hidden overflow-y-scroll">
            <div v-for="(chat, index) in chats" :key="index">
                <div v-if="chat.sended_by_me" class="w-full rounded-xl px-3 py-2 bg-blue-500 text-white text-xs">
                    <span>{{ chat.text }}</span>
                </div>
                <div v-else class="flex items-center gap-1 ">
                    <div class="flex-1 w-full rounded-xl px-3 py-2 text-xs bg-gray-100">
                        <!-- <span>{{ sended_by_me }}</span> -->
                        <span>{{ chat.text }}</span>
                    </div>
                    <div class="py-1 px-2 rounded-full bg-gray-700 text-xs text-white">
                        {{ chat.user.name }}
                    </div>
                </div>
            </div>
        </div>
        <GroupExpense :group="props.group" v-if="selectedComponent == 'addExpense'"/>
        <totalGroupCalculationVue :group="props.group" v-if="selectedComponent == 'totalCalculation'"/>
        <div class="w-full items-center md:relative fixed bottom-0 bg-white flex justify-end gap-5 md:mt-3 px-3 py-5">
            <button @click="selectedComponent = 'chat'" :class="(selectedComponent == 'chat') ? 'border rounded-xl px-3 py-2 text-sm bg-blue-500 text-white border-blue-500 duration-150' : 'border rounded-xl px-3 py-2 text-sm duration-150' ">
                <span>چت</span>
            </button>
            <button @click="selectedComponent = 'addExpense'" :class="(selectedComponent == 'addExpense') ? 'border rounded-xl px-3 py-2 text-sm bg-blue-500 text-white border-blue-500 duration-150' : 'border rounded-xl px-3 py-2 text-sm duration-150' ">
                <span>افزودن هزینه</span>
            </button>
            <button @click="selectedComponent = 'totalCalculation'" :class="(selectedComponent == 'totalCalculation') ? 'border rounded-xl px-3 py-2 text-sm bg-blue-500 text-white border-blue-500 duration-150' : 'border rounded-xl px-3 py-2 text-sm duration-150' ">
                <span>حساب کلی</span>
            </button>
        </div>
        <div v-if="selectedComponent == 'chat'">
            <form @submit.prevent="sendChat">
                <div class="flex items-center flex-row p-3 gap-3">
                    <input v-model="text" type="text" class="flex-1 w-full border rounded-xl px-3 py-2 text-sm" placeholder="تایپ کنید">
                    <input type="submit" class="bg-blue-500 rounded-xl px-3 py-2 text-white text-sm" :value="sendingLoading ? '...' : 'ارسال'">
                </div>
            </form>
        </div>
        <div v-if="showMembers">
            <div class="w-full bg-black fixed top-0 left-0 h-full opacity-5"></div>
            <div class="w-full fixed top-0 left-0 h-full flex items-center justify-center text-sm">
                <div class="">
                    <div class="bg-sky-500 p-5 text-white rounded-t-xl flex items-center justify-between">
                        <h3>اعضا :</h3>
                        <button @click="showMembers = !showMembers" class="border flex items-center bg-white justify-center border rounded-xl w-10 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
                        </button>
                    </div>
                    <div class="p-1 bg-white rounded-b-xl">
                        <div class="flex flex-col gap-1">
                            <div  v-for="user in props.group.peoples" :key="user.id">
                                <EachUserInGroup  :user="user"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { ref, onMounted, watch } from 'vue';
import EachUserInGroup from './EachUserInGroup.vue';
import GroupExpense from './GroupExpense.vue';
import totalGroupCalculationVue from './totalGroupCalculation.vue';

const store = useStore();

let props = defineProps(['group']);

let showMembers = ref(false);

let text = ref('');

let chats = ref([]);

let sendingLoading = ref(false);

let selectedComponent = ref('addExpense');

// connect();

// watch(props.group, async (newVal, oldVal) => {
//     if(oldVal.id)
//     {
//         disconnect(oldVal);
//     }
//     connect();
// })

// connect the frontend to chanel if the chat was updated
// const connect = () => {
//     fetchAllChats();
//     console.log('work');
//     window.Echo.private("chat." + props.group.id)
//         .listen('.message.new', () => {
//             fetchAllChats();
//         })   
// }

// disco
// const disconnect = (group) => {
//     window.Echo.leave("chat." + group.id);
// }

const sendChat = () => {
    sendingLoading.value = true;
    store.dispatch('sendMessage', { text: text.value, group_id:props.group.id })
        .then(() => {
            text.value = "";
            sendingLoading.value = false;
            fetchAllChats()
        })
}

const toggleShowMember = () => {
    showMembers.value = !showMembers.value;
}

const fetchAllChats = () => {
    store.dispatch('fetchAllMessages', { group_id: props.group.id })
        .then(() => {
            chats.value = store.state.chat.chats;
        })
}

onMounted(() => {
    fetchAllChats();
    // connect();
})
</script>

<style>

</style>