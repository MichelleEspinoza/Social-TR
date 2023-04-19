<template>
  <div id="faq" class="h-screen lg:grid lg:grid-cols-7">
    <div
      class="col-span-4 lg:col-span-3 xl:col-span-4 flex justify-center h-full items-center absolute lg:relative max-[480px]:pl-[40px] max-[480px]:pr-[40px]"
    >
      <img src="@/assets/svg/home-page-faq.svg" alt="Spiral helix" />
      <div
        class="bg-green-500 w-[30rem] h-[30rem] blur-[175px] rounded-full absolute max-[480px]:w-full"
      />
    </div>
    <div
      class="flex justify-center items-center h-full w-full col-span-3 lg:col-span-4 xl:col-span-3 max-[480px]:pl-[40px] max-[480px]:pr-[40px]"
    >
      <div class="flex flex-col gap-5 row-span-3 mx-auto lg:mx-0">
        <div class="flex justify-start items-center">
          <h1 class="text-7xl mb-5 mx-auto lg:mx-0 z-40 title">FAQ</h1>
        </div>
        <Dropdown
          v-for="faq in faqDetails"
          :key="faq.summary"
          :summary="faq.summary"
          :details="faq.details"
        />
      </div>
    </div>
  </div>
  <div id="blog"></div>
</template>
<script lang="ts">
  export default {
    name: 'FaqComponent',
    data() {
      return {
        faqDetails: [
          {
            summary: 'How does crypto copytrading work?',
            details: 'A cryptocurrency is a ',
          },
          {
            summary: 'How to copy Traders',
            details: 'A cryptocurrency is a ',
          },
          {
            summary: 'Who should I follow/copy?',
            details: 'A cryptocurrency is a ',
          },
          {
            summary: 'How do I start?',
            details: 'A cryptocurrency is a ',
          },
          {
            summary: 'Is it safe?',
            details: 'A cryptocurrency is a ',
          },
        ],
      };
    },
  };
</script>
