<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white dark:bg-black">
    <Logo />
    <div class="px-0 sm:px-0 lg:px-0 xl:px-4 hidden laptop:block">
      <div class="flex space-x-4 justify-between items-start w-full">
        <div class="flex-shrink-0 flex">
          <Logo width="96" height="32" class="pt-24 mr-[80px] lg:mr-0" />
          <span class="flex items-center pt-32">
            <SocialMedia
              size="w-5 h-5 ml-5"
              :facebook="true"
              :twiter="true"
              :instagram="true"
            />
          </span>
        </div>
        <span
          class="pt-32 normal text-sm font-['Poppins'] not-italic font-[500]"
        >
          <a
            href="#about"
            class="text-gray-300 dark:text-white dark:hover:gradiant-text-hover dark:hover:gradiant-text dark:active:gradiant-text-table-d dark:active:gradiant-text hover:gradiant-text-table-l hover:gradiant-text active:gradiant-text-hover active:gradiant-text px-3 py-2 rounded-md text-sm"
            aria-current="page"
            >What is it?</a
          >
          <a
            href="#instructions"
            class="text-gray-300 dark:text-white dark:hover:gradiant-text-hover dark:hover:gradiant-text dark:active:gradiant-text-table-d dark:active:gradiant-text hover:gradiant-text-table-l hover:gradiant-text active:gradiant-text-hover active:gradiant-text px-3 py-2 rounded-md text-sm"
            >Instruction</a
          >
          <a
            href="#portfolio"
            class="text-gray-300 dark:text-white dark:hover:gradiant-text-hover dark:hover:gradiant-text dark:active:gradiant-text-table-d dark:active:gradiant-text hover:gradiant-text-table-l hover:gradiant-text active:gradiant-text-hover active:gradiant-text px-3 py-2 rounded-md text-sm"
            >Portfolio</a
          >
          <a
            href="#testimonials"
            class="text-gray-300 dark:text-white dark:hover:gradiant-text-hover dark:hover:gradiant-text dark:active:gradiant-text-table-d dark:active:gradiant-text hover:gradiant-text-table-l hover:gradiant-text active:gradiant-text-hover active:gradiant-text px-3 py-2 rounded-md text-sm"
            >Testimonials</a
          >
          <a
            href="#faq"
            class="text-gray-300 dark:text-white dark:hover:gradiant-text-hover dark:hover:gradiant-text dark:active:gradiant-text-table-d dark:active:gradiant-text hover:gradiant-text-table-l hover:gradiant-text active:gradiant-text-hover active:gradiant-text px-3 py-2 rounded-md text-sm"
            >FAQ</a
          >
          <a
            href="#blog"
            class="text-gray-300 dark:text-white dark:hover:gradiant-text-hover dark:hover:gradiant-text dark:active:gradiant-text-table-d dark:active:gradiant-text hover:gradiant-text-table-l hover:gradiant-text active:gradiant-text-hover active:gradiant-text px-3 py-2 rounded-md text-sm"
            >Blog</a
          >
        </span>
        <span class="flex items-start">
          <span
            class="dark:bg-[#242528] bg-[#2f2f2f0a] mt-24 mr-15 flex items-center p-[1px] rounded-[8px]"
          >
            <span class="flex items-center p-[1px] z-[10]">
              <button
                id="theme-toggle"
                type="button"
                class="dark:bg-[#2b2c2f] bg-[#2f2f2f00] flex items-center p-[1px] rounded-[8px]"
                @click="toggleDarkMode"
              >
                <svg
                  id="theme-toggle-light-icon"
                  class="rounded w-7 h-7 p-[4px] text-[#EDEEF3] gradiant-icon dark:bg-[#292d35]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.0001 5.00002C10.4601 5.00002 10.8334 4.62752 10.8334 4.16669V2.50002C10.8334 2.03919 10.4601 1.66669 10.0001 1.66669C9.54008 1.66669 9.16675 2.03919 9.16675 2.50002V4.16669C9.16675 4.62752 9.54008 5.00002 10.0001 5.00002ZM10.0001 11.6667C9.08092 11.6667 8.33342 10.9192 8.33342 10C8.33342 9.08085 9.08092 8.33335 10.0001 8.33335C10.9192 8.33335 11.6667 9.08085 11.6667 10C11.6667 10.9192 10.9192 11.6667 10.0001 11.6667ZM10.0001 6.66669C8.16175 6.66669 6.66675 8.16169 6.66675 10C6.66675 11.8384 8.16175 13.3334 10.0001 13.3334C11.8384 13.3334 13.3334 11.8384 13.3334 10C13.3334 8.16169 11.8384 6.66669 10.0001 6.66669ZM15.8334 9.16669H17.5001C17.9601 9.16669 18.3334 9.53919 18.3334 10C18.3334 10.4609 17.9601 10.8334 17.5001 10.8334H15.8334C15.3734 10.8334 15.0001 10.4609 15.0001 10C15.0001 9.53919 15.3734 9.16669 15.8334 9.16669ZM5.00008 10C5.00008 9.53919 4.62675 9.16669 4.16675 9.16669H2.50008C2.04008 9.16669 1.66675 9.53919 1.66675 10C1.66675 10.4609 2.04008 10.8334 2.50008 10.8334H4.16675C4.62675 10.8334 5.00008 10.4609 5.00008 10ZM4.00566 4.2111C4.32566 3.8811 4.85316 3.8711 5.184 4.19027L6.38316 5.3486C6.714 5.66777 6.72316 6.1961 6.40316 6.52694C6.23983 6.6961 6.02233 6.7811 5.804 6.7811C5.59566 6.7811 5.38733 6.70444 5.22483 6.54777L4.02566 5.38944C3.69483 5.07027 3.68566 4.54194 4.00566 4.2111ZM14.1961 6.78144C14.4044 6.78144 14.6127 6.70394 14.7752 6.5481L15.9744 5.38977C16.3053 5.06977 16.3144 4.54144 15.9944 4.21144C15.6752 3.88144 15.1486 3.87144 14.8161 4.1906L13.6169 5.3481C13.2861 5.6681 13.2769 6.19644 13.5969 6.52644C13.7602 6.6956 13.9777 6.78144 14.1961 6.78144ZM9.16675 15.8334C9.16675 15.3725 9.54008 15 10.0001 15C10.4601 15 10.8334 15.3725 10.8334 15.8334V17.5C10.8334 17.9609 10.4601 18.3334 10.0001 18.3334C9.54008 18.3334 9.16675 17.9609 9.16675 17.5V15.8334ZM14.7751 13.4522C14.4442 13.133 13.9167 13.143 13.5967 13.473C13.2767 13.8039 13.2859 14.3322 13.6167 14.6514L14.8159 15.8097C14.9784 15.9664 15.1867 16.043 15.3951 16.043C15.6134 16.043 15.8309 15.958 15.9942 15.7889C16.3142 15.458 16.3051 14.9297 15.9742 14.6105L14.7751 13.4522ZM4.02591 14.6105L5.22508 13.4522C5.55675 13.133 6.08425 13.143 6.40341 13.473C6.72341 13.8039 6.71425 14.3322 6.38341 14.6514L5.18425 15.8097C5.02175 15.9664 4.81342 16.043 4.60508 16.043C4.38675 16.043 4.16925 15.958 4.00591 15.7889C3.68591 15.458 3.69508 14.9297 4.02591 14.6105Z"
                  />
                </svg>
                <svg
                  id="theme-toggle-dark-icon"
                  class="rounded-[8px] w-7 h-7 p-[4px] text-gray dark:text-white bg-[#e1e1e1] dark:bg-gradient-to-br from-purple via-bluelight to-yellow"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.65634 4.80639C6.28969 5.06598 5.95312 5.36662 5.64807 5.70687C3.55894 8.03211 3.62714 11.7528 5.79986 14.0003C6.94818 15.189 8.49101 15.8519 10.1438 15.8658C10.1622 15.8665 10.1812 15.8665 10.2003 15.8665C11.8319 15.8665 13.3637 15.2337 14.5193 14.0802C14.7599 13.8405 14.9784 13.5831 15.1742 13.3088C12.8673 13.5963 10.5024 12.8234 8.82246 11.1471C7.14324 9.47082 6.36596 7.11111 6.65634 4.80639ZM10.2002 17.3331C10.1768 17.3331 10.154 17.3331 10.1306 17.3324C8.08176 17.3148 6.16862 16.4935 4.74532 15.0203C2.04903 12.2302 1.9647 7.61266 4.55613 4.72719C5.36348 3.82745 6.34901 3.15063 7.48487 2.71579C7.75252 2.61166 8.05683 2.67619 8.26142 2.87858C8.466 3.08023 8.5342 3.38308 8.43521 3.65293C7.61539 5.89311 8.17416 8.42734 9.85851 10.1088C11.5436 11.7902 14.0844 12.3482 16.3319 11.5299C16.6018 11.4301 16.9054 11.5005 17.1063 11.7044C17.3072 11.9104 17.371 12.214 17.2676 12.4817C16.8834 13.4811 16.307 14.3684 15.5547 15.1186C14.1226 16.5485 12.2234 17.3331 10.2002 17.3331Z"
                  />
                </svg>
              </button>
            </span>
          </span>
          <LoginButton class="lg:ml-5 ml-[60px] xl:ml-[60px]" />
        </span>
      </div>
    </div>
    <DeviceNav />
  </nav>
</template>

<script setup lang="ts">
  import Logo from '~~/components/Header/Logo.vue';
  import SocialMedia from '~~/components/Buttons/ButtonSocialMedia.vue';
  import LoginButton from '~~/components/Button/LoginButton.vue';
  import DeviceNav from '~~/components/Header/Device.vue';

  // const showMenu = ref(false);
  // const toggleNav = () => (showMenu.value = !showMenu.value);
  onMounted(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    refreshLightIconBackground(isDark);
  });

  function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');

    refreshLightIconBackground(isDark);

    localStorage.setItem(
      'darkMode',
      document.documentElement.classList.contains('dark') ? 'true' : 'false'
    );
  }

  function refreshLightIconBackground(dark: boolean) {
    if (dark) {
      document
        .getElementById('theme-toggle-light-icon')
        ?.classList.remove('gradiant-icon');
    } else {
      document
        .getElementById('theme-toggle-light-icon')
        ?.classList.add('gradiant-icon');
    }
  }
</script>
