<template>
  <div id="not-found" class="text-center px-10 sm:px-20 bg-white text-gray-700 dark:bg-veryDarkBlue dark:text-gray-400">
  <Back />
    <div class="pt-10 text-5xl">Error 404.
     <p class="pt-10">No country was chosen, or written value was not corrent</p></div>
    <div class="pt-24 pb-60 text-5xl leading-normal">Unfortunately, nothing is found. <br class="py-10">Please
    <router-link :to="{name:'home'}" class="hover:bg-gray-700 bg-gray-500 dark:bg-gray-400 dark:text-gray-200 px-2 hover:text-gray-100 dark:hover:text-gray-500 rounded-md"> go back</router-link> to main page to explore the world.</div>
  </div>
</template>
<script>
import Back from '../components/Back.vue'
export default {
  name: "not-found",
  components:{
    Back
  }
};
</script>