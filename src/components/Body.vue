<template>
  <div id="this-body" class="text-sm ">
    <!-- input and filter section below-->
    <div class=" flex justify-between justify-items-auto py-5 ">
      <form method="get" class="relative">
        <button type="submit" class="absolute inset-y-0 pl-5">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            class="svg-inline--fa fa-search fa-w-16 text-gray-300 w-5 h-5  "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            ></path>
          </svg>
        </button>
        <input
          v-model="search"
          type="search"
          @change="onChange"
          class="bg-darkBlue  pr-48 rounded-md py-4 pl-16 focus:outline-none"
          placeholder="Search for a country..."
        />
      </form>
      <div
        id="filter"
        class="bg-darkBlue rounded-md px-3 py-4 flex justify-between relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none flex">
          <h1 class="pr-16">Filter by Region</h1>
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
          class="absolute right-0 w-full z-10 bg-darkBlue text-gray-300 rounded-lg mt-10 shadow-xl overflow-hidden">
          <a
            v-for="region in regions"
            :key="region.id"
            @click="$emit('chosenRegion', region.name), (isOpen = !isOpen)"
            class="block px-4 py-2 hover:bg-veryDarkBlue"
            href="#">
            {{ region.name }}
          </a>
        </div>
      </div>
    </div>
    <CountryCards :countries="countries" @clickedCountry="clickedCountry" />
  </div>
</template>
<script>
import CountryCards from "../components/CountryCards.vue";
import {bus} from "../main";
export default {
  name: "this-body",
  props: ["countries"],
  components: {
    CountryCards,

  },
  data() {
    return {
      chosenCountry: [],
      //borderCountries: [],
      //borders: [],
      isOpen: true,
      search: "",
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
  methods: {
    onChange(event) {
      this.$emit("search", event.target.value);
      //console.log(event.target.value);
    },
    clickedCountry(countryObj) {
        bus.$emit("chosenCountry", countryObj)
    }
  },

};
</script>