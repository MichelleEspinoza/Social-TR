<template>
  <a
    v-if="facebook"
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    ><img
      :class="size"
      src="@/assets/svg/fb-icon.svg"
      target="_blank"
      rel="noopener noreferrer"
      alt="Facebook"
  /></a>
  <a
    v-if="twitter"
    href="https://twitter.com/?lang=en"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    ><img :class="size" src="@/assets/svg/tw-icon.svg" alt="Twiter"
  /></a>
  <a
    v-if="instagram"
    href="https://www.instagram.com/"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    ><img :class="size" src="@/assets/svg/inst-con.svg" alt="Instagram"
  /></a>
  <a
    v-if="linkein"
    :class="size"
    href="https://www.linkedin.com/"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    ><img src="@/assets/svg/ln-icon.svg" alt="Linkein"
  /></a>
  <a
    v-if="telegram"
    :class="size"
    href="https://web.telegram.org/z/"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    ><img src="@/assets/svg/tl-icon.svg" alt="Telegram"
  /></a>
  <a
    v-if="discord"
    :class="size"
    href="https://discord.com/"
    target="_blank"
    rel="noopener noreferrer"
    type="button"
    ><img
      class="w-[22px] h-[22px]"
      src="@/assets/svg/ds-icon.svg"
      alt="Discord"
  /></a>
</template>
<script lang="ts">
  export default {
    name: 'ButtonSocialMediaComponent',
  };
</script>

<script setup lang="ts">
  defineProps<{
    size?: string;
    facebook?: boolean;
    twitter?: boolean;
    instagram?: boolean;
    linkein?: boolean;
    telegram?: boolean;
    discord?: boolean;
  }>();
</script>
