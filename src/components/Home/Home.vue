<script setup>
import 'swiper/css';
import { ref } from 'vue';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import Products from './Products.vue';
import Overview from './Overview.vue';
import About from './About.vue';
import Project from './Project.vue';
import LatestNews from './LatestNews.vue';

const modules = ref([Navigation, Pagination, Mousewheel, Keyboard])
</script>

<template>
    <div>
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :loop="true"
            :modules="modules" class="mySwiper">
            <swiper-slide v-for="item in 4" class="h-[550px]">
                <div class="2xl:h-[70vh] xl:h-[60vh] lg:h-[50vh] md:h-[40vh] h-[30vh] md:bg-cover bg-contain bg-no-repeat"
                    :style="{ 'backgroundImage': 'url(src/assets/images/img' + item + '.jpg)' }">
                    <div class="absolute md:block hidden bg-[#00000059] top-0 bottom-0 left-0 right-0"></div>
                </div>
            </swiper-slide>
        </swiper>
        <products />
        <Overview />
        <About />
        <Project />
        <hr>
        <LatestNews />
    </div>
</template>

<style>
.swiper-pagination-bullet {
    opacity: 1;
    background: rgb(110, 213, 231);
}

.swiper-pagination-bullet-active {
    background: #fff;
}

.swiper-button-next,
.swiper-button-prev {
    color: #fff;
}

@media only screen and (max-width: 640px) {

    .swiper-button-next,
    .swiper-button-prev {
        display: none;
    }
}
</style>