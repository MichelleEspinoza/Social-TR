<template>
  <div>
    <Cover />
    <About />
    <Introduction />
    <!--<Portafolio />-->
    <Testimonial />
    <Faq />
    <!-- <Login /> -->
  </div>
</template>

<script setup lang="ts">
  import About from '~~/components/HomePage/About.vue';
import Cover from '~~/components/HomePage/Cover.vue';
import Introduction from '~~/components/HomePage/Introduction.vue';
  // import Portafolio from '~~/components/HomePage/Portfolio.vue';
  import Faq from '~~/components/HomePage/Faq.vue';
import Testimonial from '~~/components/HomePage/Testimonial.vue';
</script>
