<template>
    <div class="flex flex-col items-center md:relative absolute md:bg-black  bottom-4 md:top-0  w-screen  ">

        <div
            class=" w-[90%] md:w-full max-w-7xl bg-black  frbc  h-fit px-2  py-2 md:py-4  rounded-full md:rounded-none  shadow-lg font-semibold text-white  ">

            <div class=" hidden md:flex ">
                <img class="h-8" src="../../public/Mondial-Logo.svg" />
            </div>

            <div class=" md:max-w-[60%] w-full md:w-fit gap-2 frbc md:text-sm lg:text-base ">
                <RouterLink to="/">
                    <div class=" md:hidden frbc md:gap-2 bg-white p-2 md:px-4 rounded-full">
                        <s-home-2-bold class=" text-primary " />
                    </div>
                </RouterLink>

                <RouterLink to="cart">
                    <div class=" frbc gap-2  b p-2  md:px-4 rounded-full">
                        <s-cart-3-bold />
                        <p class=" hidden md:block dark:text-text ">Cart</p>
                    </div>
                </RouterLink>

                <RouterLink to="wishList">
                    <div class=" frbc gap-2  b p-2  md:px-4 rounded-full">
                        <s-heart-bold />
                        <p class=" hidden md:block dark:text-text ">Wish list</p>
                    </div>
                </RouterLink>

                <RouterLink to="orders">
                    <div class=" frbc gap-2  b p-2  md:px-4 rounded-full">
                        <s-reorder-bold />
                        <p class=" hidden md:block dark:text-text ">Orders</p>
                    </div>
                </RouterLink>

                <RouterLink to="profile">
                    <div class=" frbc gap-2  b p-2  md:px-4 rounded-full">
                        <i-person-circle-sharp />
                        <p class=" hidden md:block dark:text-text ">Profile</p>
                    </div>
                </RouterLink>
            </div>

        </div>

    </div>
</template>

<script setup>

</script>
