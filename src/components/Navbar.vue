<script setup>
import Animation from './AnimationIcon.vue';
import Twitter from '../assets/Icons/TwitterIcon.vue';
import Youtube from '../assets/Icons/YoutubeIcon.vue';
import WhatsApp from '../assets/Icons/WhatsAppIcon.vue';
import Facebook from '../assets/Icons/FacebookIcon.vue';
import Linkedin from '../assets/Icons/LinkedinIcon.vue';
</script>

<template>
    <div>
        <div class="container mx-auto mb-5">
            <div class="flex justify-between items-center">
                <div class="my-6">
                    <img src="../assets/images/logo.png" alt="logo">
                </div>
                <div class="flex gap-x-4">
                    <Animation>
                        <Facebook class="cursor-pointer" />
                    </Animation>
                    <Animation>
                        <WhatsApp class="cursor-pointer" />
                    </Animation>
                    <Animation>
                        <Twitter class="cursor-pointer" />
                    </Animation>
                    <Animation>
                        <Youtube class="cursor-pointer" />
                    </Animation>
                    <Animation>
                        <Linkedin class="cursor-pointer" />
                    </Animation>
                </div>
            </div>
            <ul class="flex gap-x-10">
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/">Home</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/company">Company</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/products">Products</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/company">Company</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/projects">Projects</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/news">News</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/downloads">Downloads</router-link></li>
                <li class="hover:text-[#ff6500] duration-300"><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
        </div>
    </div>
</template> 