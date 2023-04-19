<template>
  <div class="grid grid-cols-5 h-screen overflow-hidden bg-black">
    <div
      class="absolute bg-yellow/40 p-[20rem] blur-[402px] rounded-full top-0 left-0 -translate-x-[40rem]"
    />
    <div class="col-span-3 bg z-10">
      <div class="rect" />
    </div>
    <div class="col-span-2"></div>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    title: 'Login',
    layout: 'empty',
    meta: [
      {
        name: 'description',
        content: 'Login to your account',
      },
    ],
  });
</script>

<style>
  .bg {
    background-image: url('/backgrounds/login-signup.svg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;
  }

  .rect {
    position: absolute;
    width: 766px;
    height: 200px;
    left: 0px;
    bottom: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 42.34%);
  }
</style>
