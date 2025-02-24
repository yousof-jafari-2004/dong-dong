<template>
    <div class="w-full px-5 fixed bottom-5">
        <div class="w-full px-5 py-4 border bg-white rounded-xl ">
            <div class="w-full">
                <ul class="flex gap-1 flex-nowrap">
                    <li class="flex-1">
                        <router-link :to="{ name: 'Users' }" :class="'px-2 border-b-2 py-2 ' + ($route.name == 'Users' ? 'border-sky-500' : '') ">
                            <span>افراد</span>
                        </router-link>
                    </li>
                    <li class="flex-1">
                        <router-link :to="{ name: 'Groups' }" :class="'px-2 border-b-2 py-2 ' + ($route.name == 'Groups' ? 'border-sky-500' : '') ">
                            <span>گروه</span>
                        </router-link>
                    </li>
                    <li class="flex-1">
                        <router-link :to="{ name: 'Expense' }" :class="'px-2 border-b-2 py-2 ' + ($route.name == 'Expense' ? 'border-sky-500' : '') ">
                            <span>خرج ها</span>
                        </router-link>
                    </li>
                    <li class="flex-1">
                        <router-link :to="{ name: 'TotalMoney' }" :class="'px-2 border-b-2 py-2 ' + ($route.name == 'TotalMoney' ? 'border-sky-500' : '') ">
                            <span>حساب</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>