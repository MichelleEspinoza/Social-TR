<template>
  <div>
    <div
      class="grid grid-cols-6 items-center p-3 backdrop-blur-3xl bg-[#ffffff18] transition-all duration-700 rounded-[24px] border border-white/10 w-[20rem] sm:w-[30rem] max-[350px]:max-w-[250px]"
      :class="
        isOpen
          ? 'scale-110 h-auto absolute z-10 shadow-green-500/50 shadow-2xl'
          : 'scale-100 h-16 '
      "
      @focusout="isOpen = false"
    >
      <h5 class="font-[500] col-span-5">{{ summary }}</h5>
      <div class="flex items-center h-full justify-end w-full col-span-1">
        <button
          :class="isOpen ? 'rotate-180' : 'rotate-0'"
          class="transition-transform duration-200"
          @click="toggleDropdown"
        >
          <img src="@/assets/svg/faq-arrow.svg" alt="Arrow down" />
        </button>
      </div>
      <Transition name="text">
        <div v-if="isOpen" class="col-span-6">
          <p class="text-white/50">{{ details }}</p>
        </div>
      </Transition>
    </div>
    <div :class="isOpen ? 'block h-16' : 'hidden'" />
  </div>
</template>
<script>
  export default {
    name: 'DropdownComponent',
    props: {
      summary: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
    },
  };
</script>

<style>
  .text-enter-active {
    transition: all 0.3s ease-out;
  }

  .text-leave-active {
    transition: all 0.3s ease-out;
  }

  .text-enter-from,
  .text-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
