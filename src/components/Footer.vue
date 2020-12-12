<template>
  <div id="v-footer">
    <div
      class=" bg-veryLightGray dark:bg-darkBlue text-xs md:text-sm dark:text-gray-400 flex px-5 sm:px-10 md:px-20 items-center justify-between py-4 border-t border-gray-200 dark:border-gray-600"
    >
      <div>
        by VitalyFromItaly, {{new Date().getFullYear()}}
      </div>
      <div>Task from
       <a class="focus:outline-none text-blue-400 hover:text-blue-700" href="https://www.frontendmentor.io">Frontend Mentor</a>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v-footer",
};
</script>