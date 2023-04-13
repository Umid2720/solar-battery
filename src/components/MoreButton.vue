<template>
    <button class="bg-[#ff6500] px-5 py-[5px] text-white group rounded-full hover:bg-[#083054] duration-500 overflow-hidden">
        <router-link to="" class="flex gap-x-3">More <span class="font-bold ">>>></span>
            <div
                class="absolute bg-white scale-0 shadow-[0_0_50px_18px_rgba(250,247,247,0.85)] group-hover:animate-[effect_1s_ease]">
            </div>
        </router-link>
    </button>
</template>


<style>
@keyframes effect {
    0% {
        transform: translateX(-20px);
    }

    100% {
        transform: scale(1);
        transform: translateX(200px);
    }
}
</style>
