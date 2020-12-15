<template>
  <div id="back" class="dark:bg-veryDarkBlue dark:text-gray-400">
 <button
      @click="$router.push({ name: 'home' }), $emit('close')"
      class=" w-32 shadow-2xl  text-md bg-gray-100 dark:bg-darkBlue px-8 py-3 my-10 font-light focus:outline-none text-white flex items-center rounded-md"
    >
      <div class="flex items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="arrow-left"
          class="svg-inline--fa fa-arrow-left w-5 h-5 mr-3 text-gray-600 dark:text-gray-300 "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
          ></path>
        </svg>
        <span class="text-gray-800 dark:text-gray-300"> Back</span>
      </div>
    </button >
  </div>
</template>
<script>
export default {
  name: 'back',
}
</script>