<template>
    <div class="">
        <div class="w-full rounded-xl flex items-center justify-between">
            <h3 class="text-xl">لیست خرج ها</h3>
        </div>
        <div class="grid grid-cols-1 gap-5 mt-5">
            <div class="col-span-1">
                <div v-if="!loading" class="p-5 border rounded-xl grid md:grid-cols-5 gap-5 grid-cols-2">
                    <div v-for="total in data" :key="total" class="col-span-1 text-sm">
                        <router-link :to="{ name: 'ShowCalculation', params: { id: total } }" class="w-full">
                            <div class="rounded-xl w-full p-5 border">
                                <span class="text-center text-sm">محاسبات مرحله {{ total }}</span>
                            </div>
                        </router-link>
                    </div>
                </div>
                <div v-else class="p-5 border rounded-xl grid md:grid-cols-5 gap-5 grid-cols-2">
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

const store = useStore();

const data = ref([]);

let loading = ref(true);

const setData = () => {
    data.value = store.state.total.allPayments;
}

onMounted(() => {
    store.dispatch('fetchAllPayment')
        .then(() => {
            setData()
            loading.value = false;
        })
})
</script>