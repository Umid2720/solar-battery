<script setup>
import 'swiper/css';
import { ref } from 'vue';
import 'swiper/css/pagination'
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';

const modules = ref([Navigation, Pagination, Mousewheel, Keyboard])
</script>

<template>
    <div>
        <swiper :cssMode="true" :navigation="true" :pagination="true" :mousewheel="true" :keyboard="true" :loop="true"
            :modules="modules" class="mySwiper">
            <swiper-slide v-for="item in 4"><img :src="'src/assets/images/img' + item + '.jpg'"
                    :alt="'img' + item + '.jpg'" />
            </swiper-slide>
        </swiper>
    </div>
</template>
<style></style>