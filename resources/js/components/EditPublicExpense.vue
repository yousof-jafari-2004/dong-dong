<template>
    <div class="h-full w-full bg-black fixed top-0 left-0 opacity-5"></div>
    <div class="h-full w-full fixed top-0 left-0 flex items-center z-10 justify-center text-xs overflow-y-scroll">
        <div class=" bg-white md:w-1/3 w-72 rounded-xl  shadow-xl border">
            <div class="w-full bg-gray-50 text-gray-700 rounded-xl p-5 flex items-center justify-between">
                <h3 class="text-xl">ویرایش هزینه</h3>
                <button @click="$emit('closeEdit')" class="border flex items-center justify-center border rounded-xl w-10 h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
                </button>
            </div>
            <div class="w-full p-5">
                <div v-if="errors.name || errors.buyer_id || errors.counting_order || errors.public || errors.total_payment" class="mb-5 bg-red-100 border border-red-500 p-5 rounded-xl">
                    <ul class="flex flex-col gap-5 text-red-500 text-sm">
                        <li v-if="errors.name">لطفا نام هزینه را وارد کنید</li>
                        <li v-if="errors.buyer_id">لطفا خرید کننده را وارد کنید</li>
                        <li v-if="errors.total_payment">لطفا هزینه را وارد کنید</li>
                        <li v-if="errors.counting_order">لطفا نام مرحله را وارد کنید</li>
                    </ul>
                </div>
                <form @submit.prevent="updateGroup">
                    <div class="flex flex-col gap-5">
                        <div class="w-full">
                            <div class="flex-1 flex dark">
                                <input v-model="group.name" type="text" class="rounded-none rounded-xl bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="نام گروه">
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex-1 flex dark flex-col gap-1">
                                <span class="text-sm">خرید کننده</span>
                                <select v-model="group.buyer_id" class="w-full px-3 py-2 rounded-xl">
                                    <option :value="store.state.user.user.name.id">{{ store.state.user.user.name.name }}</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">
                                        {{ user.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex-1 flex dark">
                                <select @change="setPeoples" class="w-full px-3 py-2 rounded-xl">
                                    <option selected>انتخاب دوستان</option>
                                    <option :value="store.state.user.user.name.id">{{ store.state.user.user.name.name }}</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">
                                        {{ user.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="rounded-xl py-2 p-2 border flex gap-3 text-sm flex-wrap">
                                <button type="button" v-for="user in group.users" :key="user.id" @click="removeFromList(user.id)" class="px-3 py-2 rounded-xl bg-sky-500 text-white flex items-center gap-3">
                                    <span>{{ user.name }}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="10" height="10"><path d="M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z"/></svg>
                                </button>
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex-1 flex flex-col gap-2 dark">
                                <input v-model="group.total_payment" type="text" class="rounded-none rounded-xl bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="میزان هزینه، مثلا : 50000">
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex-1 flex flex-col gap-2 dark">
                                <input v-model="group.counting_order" type="number" class="rounded-none rounded-xl bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150" placeholder="مرحله خرید ، مثلا : 1">
                            </div>
                        </div>
                        <div class="w-full">
                            <div class="flex-1 flex items-center justify-right dark">
                                <span class="text-sm">عمومی</span>
                                <input v-model="group.public" type="checkbox" class="rounded-none rounded-xl bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 duration-150">
                            </div>
                        </div>
                        <div class="w-full">
                            <button type="submit"  class="w-full flex items-center justify-center px-3 py-3 rounded-xl bg-gradient-to-b from-blue-500 to-sky-500 text-white hover:from-blue-600 hover:to-sky-600 duration-150">
                                <span v-if="!loading">ثبت</span>
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
        </div>
    </div>
</template>

<script setup>
import { defineProps, onMounted, ref, defineEmits } from 'vue';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';

const toast = useToast();

const emits = defineEmits(['closeEdit'])

const props = defineProps(['currentExpense', 'group']);

const store = useStore();

let group = ref({
    name: '',
    users: [],
    buyer_id: '',
    counting_order: '',
    total_payment: '',
    public: true,
    group_id: props.group.id,
})

let users = ref([]);

let errors = ref({
    name: '',
    buyer_id: '',
    counting_order: '',
    total_payment: '',
    public: '',
    // group_id: props.group.id,
})


// push the selected users to array
const setPeoples = id => {
    let currentUser = {id: 0, name: ''};
    for(let i = 0; i < group.value.users.length; i++ )
    {
        if(group.value.users[i].id == id.target.value)   
        {
            return;
        }
    }
    users.value.forEach(user => {
        if(store.state.user.user.name.id == id.target.value)
        {
            currentUser.name = store.state.user.user.name.name;
            currentUser.id = store.state.user.user.name.id;
        }else if(user.id == id.target.value)
        {
            currentUser.name = user.name;
            currentUser.id = user.id;
        }
    });
    group.value.users.push(currentUser)
}

// when clicked on the users list, delete them from the array
const removeFromList = id => {
    for(let i = 0; i < group.value.users.length; i++ )
    {
        if(group.value.users[i].id == id)   
        {
            group.value.users.splice(i, 1);
        }
    }
}

// create new group
const updateGroup = () => {
    let data = {
        expense_id: props.currentExpense,
        name: group.value.name,
        users: group.value.users,
        buyer_id: group.value.buyer_id,
        counting_order: group.value.counting_order,
        total_payment: group.value.total_payment,
        group_id: props.group.id,
        public: group.value.public,
    }
    loading.value = true;
    store.dispatch('updatePublicExpense', data)
        .then(res => {
            loading.value = false;
            if(res)
            {
                errors.value.name = res.name ? res.name : null;
                errors.value.buyer_id = res.buyer_id ? res.name : null;
                errors.value.counting_order = res.counting_order ? res.counting_order : null;
                errors.value.total_payment = res.total_payment ? res.total_payment : null;
                errors.value.public = res.public ? res.public : null;
            }else {
                toast.success("با موفقیت ویرایش شد")
                emits('closeEdit');
            }  
        })
}


let loading = ref(false);

let currentExpense = ref({});

onMounted(() => {
    store.dispatch('fetchAllFriends')
        .then(() => {
            users.value = store.state.friends.friends;
        })
    store.dispatch('fetchCurrentPublicExpense', { id : props.currentExpense })
        .then(() => {
            currentExpense.value = store.state.publicExpense.currentExpense[0];
            group.value.name = currentExpense.value.name;
            group.value.buyer_id = currentExpense.value.buyer.id;
            group.value.counting_order = currentExpense.value.counting_order;
            group.value.total_payment = currentExpense.value.total_payment;
            group.value.public = currentExpense.value.public;
            group.value.group_id = currentExpense.value.group_id;
            group.value.users = currentExpense.value.users;
            
        })
})

</script>

<style>

</style>