<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer
    class="text-center text-gray-300 dark:text-white dark:bg-black pt-24 border-t font-['Poppins'] not-italic font-[500]"
  >
    <div class="flex justify-between dark:bg-black">
      <a href="#!" type="button"><Logo width="96" height="32" /></a>
      <span class="md:flex hidden md:block font-[500]">
        <a class="text-whitehite pr-4"><p class="pr-4">Privacy Policy</p></a>
        <a class="text-whitehite pl-4"><p>Terms of use</p></a>
      </span>
      <div class="flex justify-between items-center">
        <SocialMedia
          size="max-[350px]:ml-[10px] min-[351px]:ml-[20px] ml-[20px] min-h-[20px] min-w-[20px]"
          :facebook="true"
          :twitter="true"
          :linkein="true"
          :telegram="true"
          :discord="true"
        />
      </div>
    </div>
    <div
      class="text-center flex justify-between block md:hidden pt-twenty pb-6 md:pt-16.1 md:pb-10"
    >
      <span class="flex">
        <a class="text-gray-300 hover:bg-gray-700 pr-2 md:pr-4 underline"
          ><p>Privacy policy</p></a
        >
        <a class="text-gray-300 hover:bg-gray-700 pl-2 md:pl-4 underline"
          ><p>Term of use</p></a
        >
      </span>
    </div>
    <div
      class="text-gray-300 hover:bg-gray-700 text-center flex justify-between md:pt-16.1 pb-10"
    >
      <span>
        <p>
          All right reserved © {{ new Date().getFullYear() }} Social Trader
        </p></span
      >
    </div>
  </footer>
</template>

<script setup>
  import Logo from '~~/components/Header/Logo.vue';
  import SocialMedia from '~~/components/Buttons/ButtonSocialMedia.vue';
</script>
