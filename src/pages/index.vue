<template >
    <ClientLayout>
        <Navbar />
        <div class=" flex flex-row justify-between items-center w-full mt-2 ">
            <img class="h-6" src="../assets/mondial.svg" alt="">
            <div class=" relative bg-secondary rounded-full p-1 ">
                <div class="absolute w-[6px] h-[6px] rounded-full top-1 right-1 bg-red-500"></div>
                <m-notification-fill class="text-text" />
            </div>
        </div>

        <SearchBar class="mt-4" />

        <!-- Slider -->
        <div data-hs-carousel='{
            "loadingClasses": "opacity-0"
        }' class="relative my-6 w-full ">
            <div class="hs-carousel relative overflow-hidden w-full bg-white rounded-lg flex flex-col">
                <div class="hs-carousel-body flex-grow flex flex-nowrap transition-transform duration-700 opacity-0">
                    <div class="hs-carousel-slide">
                        <Banner text="Page 1" />
                    </div>
                    <div class="hs-carousel-slide">
                        <Banner text="Page 2" />
                    </div>
                    <div class="hs-carousel-slide">
                        <Banner text="Page 3" />
                    </div>
                </div>
            </div>

            <div class="hs-carousel-pagination flex justify-center absolute -bottom-5 md:-bottom-7 start-0 end-0 space-x-2">
                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-2 h-2 md:w-3 md:h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-2 h-2 md:w-3 md:h-3 border border-gray-400 rounded-full cursor-pointer"></span>
                <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-2 h-2 md:w-3 md:h-3 border border-gray-400 rounded-full cursor-pointer"></span>
            </div>
        </div>
    </ClientLayout>
</template>

<script setup>
import ClientLayout from '../layouts/ClientLayout.vue';


</script>

