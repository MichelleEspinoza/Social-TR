<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="xl:px-[5vh] max-laptop:hidden block font-['Poppins'] not-italic">
    <div class="lines-cover top-0 left-[50px]"></div>
    <div
      class="absolute left-[-60px] bottom-[0px] w-[10%] h-[80%] bg-greenShadow blur-[400px]"
    ></div>
    <div
      class="bg-[url('../../assets/svg/desktop-cover.svg')] bg-no-repeat bg-cover bg-[left_calc(25%)_top_calc(15%)]"
    >
      <div class="h-full w-full flex justify-center items-start">
        <span class="flex flex-col">
          <div class="lines-cover left-[36.65%] top-0"></div>
          <TitleCover />
          <div class="lines-cover left-[63%] top-0"></div>
          <div class="mt-[7vh] text-center relative top-[-5vh]">
            <GetStartButton />
          </div>
        </span>
      </div>
      <CardInformation class="mb-[5vw]" />
    </div>
    <div class="lines-cover top-0 right-[50px]"></div>
    <div
      class="absolute w-[10%] h-[90%] right-[0px] top-[0px] bg-blueShadow blur-[332px]"
    ></div>
  </div>
  <DeviceCover class="font-['Poppins'] not-italic" />
</template>
<script setup lang="ts">
  import DeviceCover from '~~/components/Cover/Device.vue';
  import CardInformation from '~~/components/Cover/CardInformation.vue';
  import TitleCover from '~~/components/Cover/Title.vue';
  import GetStartButton from '~~/components/Button/GetStartButton.vue';
</script>
