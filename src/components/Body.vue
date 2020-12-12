<template>
  <div id="this-body" class="text-sm px-5 sm:px-10 md:px-20 ">
    <div class="md:flex md:justify-between md:justify-items-auto py-5 ">
      <Search />
      <div id="filter"
        class="bg-veryLightGray whitespace-nowrap shadow-lg w-1/2 sm:w-1/3 md:w-auto dark:bg-darkBlue rounded-md  px-3 py-4 flex justify-between relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none flex">
          <h1 class=" pr-8 md:pr-16">Filter by Region</h1>
          <svg
            :class="isOpen ? 'block' : 'hidden'"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-down"
            class="svg-inline--fa fa-chevron-down fa-w-10 text-gray-400 w-5 h-5 focus:outline-none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
            ></path>
          </svg>
          <svg
            :class="isOpen ? 'hidden' : 'block'"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="angle-up"
            class="svg-inline--fa fa-angle-up fa-w-10 text-gray-400 w-5 h-5 focus:outline-none "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"
            ></path>
          </svg>
        </button>
        <div
          v-if="!isOpen"
          class="absolute right-0 w-full z-10 bg-veryLightGray dark:bg-darkBlue text-gray-500 dark:text-gray-300 rounded-lg mt-10 shadow-xl overflow-hidden">
          <a
            v-for="region in regions"
            :key="region.id"
            @click="$emit('chosenRegion', region.name), (isOpen = !isOpen)"
            class="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-veryDarkBlue"
            >
            {{ region.name }}
          </a>
        </div>
      </div>
    </div>
    <CountryCards :countries="countries" />
  </div>
</template>
<script>
import CountryCards from "../components/CountryCards.vue";
import Search from "../components/Search.vue";
export default {
  name: "this-body",
  props: ["countries"],
  components: {
    CountryCards,
    Search
  },
  data() {
    return {
      isOpen: true,
      regions: [
        {
          id: 1,
          name: "Africa"
        },
        {
          id: 2,
          name: "Americas"
        },
        {
          id: 3,
          name: "Asia"
        },
        {
          id: 4,
          name: "Europe"
        },
        {
          id: 5,
          name: "Oceania"
        }
      ]
    };
  },
};
</script>