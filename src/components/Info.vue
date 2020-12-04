<template>
  <div id="info" class="px-20">
    <router-link :to="{name: 'home'}"
      class=" w-32 shadow-2xl  text-md bg-gray-100 dark:bg-darkBlue px-8 py-3 my-10 font-light text-white flex items-center rounded-md"
    >
      <div @click="$emit('cleanInfoPage')" class="flex items-center">
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
    </router-link>
    <div v-if="chosenCountry1 !=0" class="grid grid-cols-2 gap-x-20 items-center pb-64">
      <img :src="chosenCountry1.flag" alt="" class=" w-auto" />
      <div id="text-info">
        <h1 class="bolder text-2xl dark:text-white py-5">
          {{ chosenCountry1.name }}
        </h1>
        <div class="grid grid-cols-2 gap-x-full items-center text-gray-700 dark:text-white">
          <div>
            <p class="py-1 bolder">
              Native Name:<span class="text-gray-500 dark:text-gray-300">
                {{ chosenCountry1.nativeName }}</span
              >
            </p>
            <p class="py-1  bolder">
              Population:<span class="text-gray-500 dark:text-gray-300">
                {{ chosenCountry1.population }}</span
              >
            </p>
            <p class="py-1  bolder">
              Region:<span class="text-gray-500 dark:text-gray-300">
                {{ chosenCountry1.region }}</span
              >
            </p>
            <p class="py-1  bolder">
              Sub Region:<span class="text-gray-500 dark:text-gray-300">
                {{ chosenCountry1.subregion }}</span
              >
            </p>
          </div>
            <div>
              <p class="py-1  bolder">
                Capital:<span class="text-gray-500 dark:text-gray-300">
                  {{ chosenCountry1.capital }}</span
                >
              </p>
              <p class="py-1  bolder">
                Top Level Domain:<span class="text-gray-500 dark:text-gray-300">
                  {{ chosenCountry1.topLevelDomain[0] }}</span
                >
              </p>
              <p class="py-1  bolder">
                Currencies:<span class="text-gray-500 dark:text-gray-300">
                  {{ chosenCountry1.currencies[0].name }},
                  {{ chosenCountry1.currencies[0].symbol }}</span
                >
              </p>
              <p class="py-1  bolder">
                Languages:<span class="text-gray-500 dark:text-gray-300">
                  {{ chosenCountry1.languages[0].name }}</span
                >
              </p>
            </div>
        </div>
        <div class="flex items-center">
          <h1 class="py-20 text-xl ">Border Countries:</h1>
          <div href="#" class="bg-veryLightGray shadow-md dark:bg-darkBlue py-2 rounded-md px-3 mx-1 cursor-pointer text-gray-800 dark:text-gray-200"
          @click="$emit('clikedBorderCountry', borderCountry)" v-for="borderCountry in borderCountries.slice(0,3)" :key="borderCountry.index">
          {{borderCountry.name}}
          </div>
        </div>
      </div>

    </div>
    <div v-else class="text-center pb-64">
    <h1 class="p-20 text-3xl">No country was chosen, or written value was not corrent</h1>
    <h1 class="p-16 text-3xl">Please go back to the main page to explore the world</h1>

    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  props: ["chosenCountry1", 'borderCountries'],
  data() {
    return {
    };
  },
  methods: {
  },
  components: {},
  computed: {}
};
</script>