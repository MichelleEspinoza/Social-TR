<template>
  <div
    class="bg-white text-black dark:text-white dark:bg-black min-h-screen px-4 xl:px-[80px]"
  >
    <Header />
    <main class="mb-auto">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup>
  useHead({
    title: 'Social Trader - Home',
  });
  onMounted(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    document.documentElement.classList.toggle('dark', isDark);
  });
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,900&display=swap');
</style>
