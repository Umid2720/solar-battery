<script setup>
import FacebookColorIcon from '../assets/Icons/FacebookColorIcon.vue';
import LinkedinColorIcon from '../assets/Icons/LinkedinColorIcon.vue';
import TwiitterColorIcon from '../assets/Icons/TwiitterColorIcon.vue';
import WhatsAppColorIcon from '../assets/Icons/WhatsAppColorIcon.vue';
import YoutubeColorIcon from '../assets/Icons/YoutubeColorIcon.vue';
import LocationIcon from '../assets/Icons/LocationIcon.vue';
import PhoneIcon from '../assets/Icons/PhoneIcon.vue';
import PhoneHomeIcon from '../assets/Icons/PhoneHomeIcon.vue';
import PostIcon from '../assets/Icons/PostIcon.vue';
import WorldIcon from '../assets/Icons/WorldIcon.vue';
import SendIcon from '../assets/Icons/SendIcon.vue';

</script>

<template>
    <div class="bg-[url('src/assets/images/img1.jpg')] bg-center bg-no-repeat bg-cover h-[70vh] py-5 text-white relative">
        <div class="absolute bg-[#00000077] inset-0">
            <div class="text-center py-10 space-y-5">
                <img src="../assets/images/logo.png" class="mx-auto" alt="logo.png">
                <p class="mx-auto max-w-[600px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa error
                    tempore dolor!
                    Corrupti fuga
                    necessitatibus, enim harum non unde similique voluptatum voluptatem consequuntur mollitia magni officiis
                    odit ipsa optio numquam?</p>
                <div class="flex justify-center gap-x-5">
                    <FacebookColorIcon class="cursor-pointer duration-500 rotate-icon" />
                    <WhatsAppColorIcon class="cursor-pointer duration-500 rotate-icon" />
                    <TwiitterColorIcon class="cursor-pointer duration-500 rotate-icon" />
                    <YoutubeColorIcon class="cursor-pointer duration-500 rotate-icon" />
                    <LinkedinColorIcon class="cursor-pointer duration-500 rotate-icon" />
                </div>
            </div>
            <div class="container mx-auto flex justify-between">
                <ul class="w-1/4">
                    <h4 class="text-xl mb-5">Get In Touch</h4>
                    <li>
                        <a href="" class="text-sm text-hite flex items-center gap-x-1">
                            <LocationIcon /> Lorem ipsum dolor sit amet.
                        </a>
                    </li>
                    <li>
                        <a href="" class="text-sm text-hite flex items-center gap-x-3">
                            <PhoneIcon /> Lorem ipsum dolor sit amet.
                        </a>
                    </li>
                    <li>
                        <a href="" class="text-hite flex items-center gap-x-3">
                            <PhoneHomeIcon /> Lorem ipsum dolor sit amet.
                        </a>
                    </li>
                    <li>
                        <a href="" class="text-hite flex items-center gap-x-3">
                            <PostIcon /> Lorem ipsum dolor sit amet.
                        </a>
                    </li>
                    <li>
                        <a href="" class="text-hite flex items-center gap-x-3">
                            <WorldIcon /> Lorem ipsum dolor sit amet.
                        </a>
                    </li>
                </ul>
                <ul class="w-1/4">
                    <h4 class="text-xl mb-5">Need Help</h4>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/company">Company</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/products">Products</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/news">News</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/contact-us">Contact Us</router-link>
                    </li>
                </ul>
                <ul class="w-1/4">
                    <h4 class="text-xl mb-5">Need Help</h4>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/company">Company</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/products">Products</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/news">News</router-link>
                    </li>
                    <li>
                        <router-link class="hover:underline cursor-pointer hover:hover:text-[#ff6500] duration-300"
                            to="/contact-us">Contact Us</router-link>
                    </li>
                </ul>
                <div class="w-1/4">
                    <h4 class="text-xl mb-5">Subscribe</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, accusantium!</p>
                    <input class="bg-slate-400 border-0 outline-0 rounded p-3 w-72 my-4 text-white placeholder-white"
                        placeholder="Your Email Address..." />
                    <button class="block bg-[#ff6500] flex items-end gap-x-2 px-4 py-2 rounded-lg">Submit
                        <SendIcon class="text-white"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
