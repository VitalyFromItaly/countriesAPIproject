<template>
  <div id="top">
    <div class=" bg-veryLightGray dark:bg-darkBlue flex px-5 sm:px-10 md:px-20 text-gray-700 dark:text-gray-300 items-center justify-between py-4 shadow-xl">
    <h1 class="text-md sm:text-2xl bolder"> Where in the World?</h1>
    <ThemeSwitcher />
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from '../components/ThemeSwitcher.vue'
export default {
  name: "top",
  components: {
    ThemeSwitcher
  }
};
</script>