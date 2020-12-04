<template>
  <div id="top">
    <div class="bg-veryLightGray dark:bg-darkBlue flex px-10 sm:px-20 text-gray-700 dark:text-gray-300 items-center justify-between py-4 shadow-md">
    <h1 class="text-md sm:text-2xl bolder"> Where in the World?</h1>
      <button @click="$emit('switchMode')" class="flex space-x-3 items-center hover:bg-gray-200 dark:hover:bg-veryDarkBlue rounded-3xl pl-3 py-2 focus:outline-none">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="moon"
          class="svg-inline--fa fa-moon fa-w-16 w-4 h-4 rotate-180"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          ></path>
        </svg>
        <span class="text-sm sm:text-2xl ">Dark Mode</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "top"
};
</script>