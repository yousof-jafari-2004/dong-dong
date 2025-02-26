<template>
    <div class="w-full p-5 bg-white shadow fixed top-0 left-0">
        <div class="flex justify-between">
            <router-link :to="{ name: 'Index' }" class="flex items-center justify-between">
                <h1>دونگ دونگ</h1>
            </router-link>
            <div class="flex items-center justify-center gap-5">
                <router-link v-if="store.state.user.user.token == 'undefined' || store.state.user.user.token == null" :to="{ name: 'Register' }" class="flex items-center px-5 gap-3 py-2 border rounded-xl">
                    <span class="relative flex h-3 w-3">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                    <span>ورود | عضویت</span>
                </router-link>
                <div v-else class="super-menu text-sm">
                    <input type="checkbox"/>
                    <div class="fab px-5 py-2 rounded-xl border flex gap-3">
						<div class="h-6 w-6 rounded-full bg-gray-500"></div>
                        <div class="flex items-center gap-3 text-sm">
                            <span>{{ store.state.user.user.name.name }}</span>
                        </div>
                    </div>
                    <div class="fac border">
                        <router-link :to="{ name: 'Profile' }" :class="'w-full py-3 px-5 border-b flex gap-3 items-center rounded-xl mb-1 ' + ($route.name == 'Profile' ? 'bg-sky-500 text-white' : 'bg-gray-100') ">
                            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" :stroke="($route.name == 'Profile' ? '#FFFFFF' : '#000000')" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z" :stroke="($route.name == 'Profile' ? '#FFFFFF' : '#000000')" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M6.5 19.11C6.80719 17.8839 7.51529 16.7956 8.51178 16.0179C9.50827 15.2403 10.736 14.818 12 14.818C13.264 14.818 14.4917 15.2403 15.4882 16.0179C16.4847 16.7956 17.1928 17.8839 17.5 19.11" :stroke="($route.name == 'Profile' ? '#FFFFFF' : '#000000')" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
                            <span :class="($route.name == 'Profile' ? 'text-white' : 'text-gray-700') ">پروفایل</span>
                        </router-link>
						<button @click="logout" v-if="store.state.user.user.token != 'undefined' || store.state.user.user.token != null" class="w-full px-5 py-3 bg-red-500 hover:bg-red-600 duration-150 text-white text-sm rounded-xl flex items-center gap-3">
							<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M12.1303 13C13.8203 13 15.1903 11.63 15.1903 9.94C15.1903 8.25001 13.8203 6.88 12.1303 6.88C10.4403 6.88 9.07031 8.25001 9.07031 9.94C9.07031 11.63 10.4403 13 12.1303 13Z" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								<path d="M6.5 19.11C6.80719 17.8839 7.51529 16.7956 8.51178 16.0179C9.50827 15.2403 10.736 14.818 12 14.818C13.264 14.818 14.4917 15.2403 15.4882 16.0179C16.4847 16.7956 17.1928 17.8839 17.5 19.11" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
							<span>خروج</span>
						</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const router = useRouter();

const store = useStore();

const logout = () => {
    store.commit('logout')
		.then(() => {
			router.push({ name: 'Index' });
		})
}
</script>

<style scoped>

:root {
	 --background: #4285f4;
	 --icon-color: #344955;
	 --width: 50px;
	 --height: 50px;
	 --border-radius: 100%;
}
 .super-menu {
	 position: relative;
	 border-radius: 15px;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 /* margin-top: 6rem; */
}
 .super-menu .fab {
	 background: var(--background);
	 position: relative;
	 z-index: 3;
	 animation: fab-animation-reverse 0.4s ease-out forwards;
}
 .super-menu .fac {
	width: 200px;
	 border-radius: 10px;
	 position: absolute;
	 background: #fff;
	 z-index: 2;
	 padding: 0.3rem 0.3em;
	 opacity: 0;
	 top: -200px;
     left: 10px;
	 display: flex;
	 flex-direction: column;
	 justify-content: space-around;
	 align-items: center;
	 transition: opacity 0.2s ease-in, top 0.2s ease-in, width 0.1s ease-in;
}
 .super-menu .fac a {
	 color: var(--icon-color);
	 opacity: 0.8;

}
 .super-menu .fac a:hover {
	 transition: 0.2s;
	 opacity: 1;
	 color: #30444f;
}
 .super-menu input {
	 height: 100%;
	 width: 100%;
	 border-radius: var(--border-radius);
	 cursor: pointer;
	 position: absolute;
	 z-index: 5;
	 opacity: 0;
}
 .super-menu input:checked ~ .fab {
	 animation: fab-animation 0.4s ease-out forwards;
}
 .super-menu input:checked ~ .fac {
	 /* height: 150px; */
	 animation: fac-animation 0.4s ease-out forwards 0.1s;
	 top: 50px;
	 opacity: 1;
}
 @keyframes fac-animation {
	 0% {
		 transform: scale(1, 1);
	}
	 33% {
		 transform: scale(0.95, 1.05);
	}
	 66% {
		 transform: scale(1.05, 0.95);
	}
	 100% {
		 transform: scale(1, 1);
	}
}
 
</style>