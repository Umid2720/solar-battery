<template>
    <div class="bg-white flex py-10 justify-center gap-x-8 relative">
        <img src="../../assets/images/img2.jpg" alt="" width="600">
        <div class="max-w-md space-y-5">
            <h3 class="text-[#083054] text-xl font-bold">About SUNRUVER Solar</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, repudiandae. Blanditiis, accusamus amet iusto
                nesciunt, sunt, reprehenderit soluta a dolorem veniam odit neque. Id temporibus magnam, debitis eius
                repudiandae ad?</p>
            <button class="bg-[#ff6500] px-5 py-2 text-white rounded-full hover:bg-[#083054] duration-500 overflow-hidden">
                <router-link to="" class="flex items-center gap-x-5">More <span class="font-bold ">>>></span>
                    <div class="absolute bg-white jijij"></div>
                </router-link>
            </button>
        </div>
    </div>
</template>

<style>
.jijij {
    animation: effect 1s linear infinite;
    box-shadow: 0px 0px 30px 18px rgba(250, 247, 247, 0.85);
}

@keyframes effect {
    from {
        transform: translateX(0px);
    }

    to {
        transform: translateX(150px);
    }
}
</style>
