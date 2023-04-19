<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="flex flex-col justify-between pb-5 laptop:hidden">
    <div>
      <div
        class="absolute w-[120px] h-[637px] l-[60px] t-[0] bg-greenShadow blur-[178px]"
      ></div>
      <img
        class="max-[359px]:pl-[3px] max-[359px]:ml-[3px] max-sm:pl-[0px] max-sm:pr-[0px] max-md:pl-[30px] max-md:pr-[30px] max-laptop:pl-[70px] max-laptop:pr-[70px] w-full h-full relative z-[1]"
        src="../../assets/images/cover.png"
        alt="Cover"
      />
      <span
        class="max-sm:top-[89vw] max-md:top-[77vw] max-md:text-[9vw] max-md:leading-[10vw] max-laptop:top-[69vw] max-laptop:text-[9vw] max-laptop:leading-[10vw] absolute z-[10] font-[800] text-center text-dark dark:text-white right-[0px] left-[0px]"
      >
        <div
          class="hidden dark:block max-sm:top-[0vw] max-md:blur-[40px] min-[641px]:top-[10vw] min-[641px]:blur-[90px] h-[104px] min-[641px]:h-[320px] dark:bg-darkShadow w-full absolute z-[1]"
        ></div>
        <TitleCover />
      </span>
    </div>
    <span
      class="max-sm:text-[3.7vw] max-sm:leading-[1.7] max-md:text-[3.0vw] max-md:leading-[1.7] max-sm:pt-[24px] max-md:pt-[24px] max-laptop:pt-[30px] max-laptop:text-[2.5vw] max-laptop:leading-[1.7] font-[500] text-center"
      ><p class="mt-[1px] relative z-[10] ml-[16px] mr-[16px]">
        Just subscribe to expert traders and
      </p>
      <p class="mt-[1px] relative z-[10] ml-[16px] mr-[16px]">
        watch the app copy their market moves
      </p>
    </span>

    <div class="w-full pt-8 mb-10 text-center relative z-[10]">
      <GetStartButton />
    </div>
    <CardInformation />

    <div
      class="absolute w-[120px] h-[664px] right-[0px] top-[0px] bg-blueShadow blur-[178px]"
    ></div>
  </div>
</template>
<script setup lang="ts">
  import CardInformation from './CardInformation.vue';
  import GetStartButton from '~~/components/Button/GetStartButton.vue';
  import TitleCover from '~~/components/Cover/Title.vue';
</script>
