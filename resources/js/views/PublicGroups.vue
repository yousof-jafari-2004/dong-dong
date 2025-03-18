<template>
    <div v-if="!showChat" class="text-sm flex flex-col">
        <CreatePublicGroup v-if="showCreate" @refreshGroups="getGroups" @closeCreate="toggle"/>
        <div class="w-full flex items-center justify-between">
            <div class="flex-1">
                <h1 class="text-xl">گروه های اجتماعی</h1>
            </div>
            <div class="w-full flex-1 rounded-xl flex items-center justify-between">
                <button @click="toggle" class="px-5 py-2 rounded-xl bg-sky-500 text-white border-2 border-sky-500 hover:bg-white hover:text-sky-500 duration-150 text-xl">+</button>
            </div>
        </div>
        <div v-if="loading" class="flex flex-col gap-1 mt-5">
            <div class="col-span-1">
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
                <div class="border bg-gray-50 rounded-xl p-4 w-full mx-auto">
                    <div class="animate-pulse flex space-x-4">
                        <div class="rounded-xl bg-slate-200 h-12 w-14 ml-2"></div>
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
        <div v-else class="w-full mt-5">
            <div class="w-full flex flex-col gap-1">
                <button type="button" v-for="(group, index) in groups" :key="index"  @click="toggleChat(group)" class="flex-1 bg-gray-50 rounded-xl p-2 flex flex-col gap-2">
                    <div class="flex items-center gap-5">
                        <div class="h-12 w-14 rounded-xl bg-gray-500"></div>
                        <div class="flex flex-col gap-1">
                            <h3 class="text-md">{{ group.name }}</h3>
                            <span class="text-xs text-sky-500">تعداد اعضاء {{ group.peoples.length }}</span>
                        </div>
                        <div class="md:block hidden h-full p-3 bg-white border text-gray-500 rounded-xl">
                            <span>ممد : </span>
                            <span class="text-xs">qui reiciendis iure dolorum porro!</span>
                        </div>
                    </div>
                    <div class="md:hidden block h-full p-3 bg-white border text-gray-500 rounded-xl">
                        <span>ممد : </span>
                        <span class="text-xs">qui reiciendis iure dolorum porro!</span>
                    </div>
                </button>
            </div>
        </div>
    </div>
    <div v-else>
        <GroupChat :group="selectedGroup" @closeChat="toggleChat"/>
    </div>
</template>

<script setup>
import CreatePublicGroup from '../components/CreatePublicGroup.vue';
import GroupChat from './../components/GroupChat.vue';
import { onMounted, ref } from 'vue';
import store from '../store';

let selectedGroup = ref(false);

let showChat = ref(false);

let loading = ref(true);

let showCreate = ref(false);

let groups = ref([]);

const toggleChat = theGroup => {
    if(theGroup) 
    {
        selectedGroup.value = theGroup;
    }else {
        selectedGroup.value = {};
    }
    showChat.value = !showChat.value;
}

const toggle = () => {
    showCreate.value = !showCreate.value;
}

const getGroups = () => {
    loading.value = true;
    store.dispatch('allPublicGroups')
        .then(() => {
            loading.value = false;
            groups.value = store.state.publicGroups.groups;
        })
}


onMounted(() => {
    getGroups();
})
</script>