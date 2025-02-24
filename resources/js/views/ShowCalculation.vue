<template>
    <div class="">
        <div class="w-full rounded-xl flex items-center justify-between">
            <h3 class="text-xl">لیست خرج ها</h3>
            <router-link :to="{ name:'TotalMoney' }" class="px-5 py-3 rounded-xl bg-sky-500 text-white text-sm border border-sky-500 hover:bg-white hover:text-sky-500 duration-150">بازگشت</router-link>
        </div>
        <div class="grid grid-cols-1 gap-5 mt-5">
            <div class="col-span-1">
                <div v-if="!loading" class="p-5 border rounded-xl grid md:grid-cols-3 gap-5 grid-cols-1">
                    <div v-for="total in data" :key="total.buyer" class="col-span-1 text-sm">
                        <div class="w-full rounded-xl overflow-hidden border">
                            <div class="w-full bg-sky-500 text-white px-5 py-3 flex items-center justify-between">
                                <span>{{ total.buyer_name }}</span>
                                <span>{{ total.total_pay }} <span class="text-xs">تومان</span></span>
                            </div>
                            <div class="w-full px-5 py-2">
                                <ul>
                                    <li v-for="people in total.group" :key="people.id" class="py-2 border-b">
                                        <div class="flex items-center justify-between">
                                            <span>{{ people.name }}</span>
                                            <span>{{ people.each }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="p-5 border rounded-xl grid md:grid-cols-3 gap-5 grid-cols-1">
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
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

const store = useStore();

const data = ref([])

const route = useRoute();

let loading = ref(true);

const setData = () => {
    data.value = store.state.total.total;
}

console.log(store);

onMounted(() => {
    store.dispatch('fetchTotalPayment', route.params.id)
        .then(() => {
            setData()
            loading.value = false;
        })
})
</script>