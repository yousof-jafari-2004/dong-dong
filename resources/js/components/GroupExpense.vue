<template>
  <div class="p-5 border-b">
    <CreateGroupExpense :group="props.group" v-if="showCreate"  @closeCreate="toggle"/>
    <div class="w-full flex items-center justify-between">
        <h3 class="text-sm">لیست هزینه ها</h3>
        <button @click="showCreate = !showCreate" class="px-5 py-2 rounded-xl bg-blue-500 text-white border border-blue-500 duration-150 hover:bg-white hover:text-blue-500">+</button>
    </div>
    <div class="mt-3 md:mb-0 mb-20">
      <div v-if="loading" class="grid md:grid-cols-3 grid-cols-2 gap-5">
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-1">
            <div class="border bg-gray-50 rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                    <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>  
                            <div class="h-2 bg-slate-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div v-else class="grid md:grid-cols-3 grid-cols-2 gap-5">
        <div v-for="expense in expenses" :key="expense.id" class="col-span-2 duration-150 text-xs">
            <div class="w-full rounded-xl overflow-hidden border">
                <div class="w-full bg-sky-500 text-white px-5 py-3 flex items-center justify-between">
                    <span>{{ expense.name }}</span>
                </div>
                <div class="w-full px-5 py-2">
                    <ul>
                        <li class="py-2 flex gap-3 items-center border-b">
                            <span>هزینه:</span>
                            <span>{{ expense.total_payment }} تومان</span>
                        </li>
                        <li class="py-2 flex gap-3 items-center border-b">
                            <span>خرید کننده :</span>
                            <span>{{ expense.buyer.name }}</span>
                        </li>
                        <li class="py-2 flex gap-3 items-center border-b">
                            <span>ایجاد کننده هزینه:</span>
                            <span>{{ expense.user.name }}</span>
                        </li>
                        <li class="py-2 flex gap-3 items-center border-b">
                            <span>تاریخ :</span>
                            <span>{{ expense.created_at }}</span>
                        </li>
                        <li class="py-2 flex gap-3 items-center border-b">
                            <span>وضعیت :</span>
                            <span :class="expense.public ? 'text-green-500' : 'text-red-500'">{{ expense.public ? 'عمومی' : 'خصوصی' }}</span>
                        </li>
                        <li class="py-2 flex flex-col gap-3 items-right">
                            <span>شرکت کننده گان:</span>
                            <div class="flex items-center flex-wrap gap-1">
                              <div v-for="user in expense.users" :key="user.id" class="px-3 py-1 rounded-xl bg-blue-500 text-white">
                                <span>{{ user.name }}</span>
                              </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="w-full bg-gray-50 px-5 py-2 border-t flex md:flex-row flex-col gap-3 justify-between items-center">
                    <div class="flex items-center justify-between gap-3">
                      <button @click="deleteExpense(expense.id)" class="items-center">
                          <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6.98996C8.81444 4.87965 15.1856 4.87965 21 6.98996" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8.00977 5.71997C8.00977 4.6591 8.43119 3.64175 9.18134 2.8916C9.93148 2.14146 10.9489 1.71997 12.0098 1.71997C13.0706 1.71997 14.0881 2.14146 14.8382 2.8916C15.5883 3.64175 16.0098 4.6591 16.0098 5.71997" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 13V18" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M19 9.98999L18.33 17.99C18.2225 19.071 17.7225 20.0751 16.9246 20.8123C16.1266 21.5494 15.0861 21.9684 14 21.99H10C8.91389 21.9684 7.87336 21.5494 7.07541 20.8123C6.27745 20.0751 5.77745 19.071 5.67001 17.99L5 9.98999" stroke="#FF0000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </button>
                      <!-- {{ expense.user.id }} -->
                      <button v-if="expense.user.id == store.state.user.user.name.id" class="text-yellow-500">
                          <span>ویرایش</span>
                      </button>
                    </div>
                    <div class="">
                        <span>مرحله حساب : {{ expense.counting_order }}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import CreateGroupExpense from './CreateGroupExpense.vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps(['group']);

let loading = ref(true);

let expenses = ref([]);

let showCreate = ref(false);

const toggle = () => {
  showCreate.value = !showCreate.value;
}

const fetchAllPublicExpense = () => {
  store.dispatch('fetchAllPublicExpense', {id: props.group.id})
    .then(() => {
      expenses.value = store.state.publicExpense.publicExpenses;
      loading.value = false;
    })
};

const deleteExpense = id => {

}

onMounted(() => {
  fetchAllPublicExpense();
})
</script>

<style>

</style>