<template>
  <div id="info" class="px-5 sm:px-10 md:px-20 mb-auto">
    <Back />
    <div
      v-if="country"
      class="md:grid md:grid-cols-2 md:gap-x-20  items-start pb-5"
    >
      <img :src="country.flag" alt="" class=" w-auto shadow-lg" />
      <div id="text-info">
        <h1 class="bolder text-2xl dark:text-white py-5 md:py-0 md:pb-5">
          {{ country.name }}
        </h1>
        <div
          class="grid grid-cols-2 gap-x-full items-center text-gray-700 dark:text-white"
        >
          <div>
            <p class="py-1 bolder">
              Native Name:<span class="text-gray-500 dark:text-gray-300">
                {{ country.nativeName }}</span
              >
            </p>
            <p class="py-1  bolder">
              Population:<span class="text-gray-500 dark:text-gray-300">
                {{ country.population.toLocaleString('de-DE') }}</span
              >
            </p>
            <p class="py-1  bolder">
              Region:<span class="text-gray-500 dark:text-gray-300">
                {{ country.region }}</span
              >
            </p>
            <p class="py-1  bolder">
              Sub Region:<span class="text-gray-500 dark:text-gray-300">
                {{ country.subregion }}</span
              >
            </p>
          </div>
          <div>
            <p class="py-1  bolder">
              Capital:<span class="text-gray-500 dark:text-gray-300">
                {{ country.capital }}</span
              >
            </p>
            <p class="py-1  bolder">
              Top Level Domain:<span class="text-gray-500 dark:text-gray-300">
                {{ country.topLevelDomain[0] }}</span
              >
            </p>
            <p class="py-1  bolder">
              Currencies:<span class="text-gray-500 dark:text-gray-300">
                {{ country.currencies[0].name }},
                {{ country.currencies[0].symbol }}</span
              >
            </p>
            <p class="py-1  bolder">
              Languages:<span class="text-gray-500 dark:text-gray-300">
                {{ country.languages[0].name }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sm:flex sm:items-center  text-sm sm:text-xl pb-32 ">
      <h1 class="sm:block sm:py-10 text-center">Border Countries:</h1>
      <p
        class="bg-veryLightGray shadow-md dark:bg-darkBlue py-2 rounded-md px-2 md:px-3 my-3 sm:my-0 mx-1 cursor-pointer text-gray-800 dark:text-gray-200"
        v-for="sortedCountryBorder in sortedCountriesBorder.slice(0,3)"
        :key="sortedCountryBorder.index"
        @click="
          $router.push({
            name: 'info',
            params: {
              countryName: sortedCountryBorder.name,
              countryBorders: sortedCountryBorder.borders
            }
          })
        "
      >
        {{ sortedCountryBorder.name }}
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Back from "../components/Back.vue";
export default {
  name: "info",
  props: ["countries"],
  data() {
    return {
      country: null,
      borders: []
    };
  },
  components: { Back },
  methods: {},
  activated: function() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.countryName}`
      )
      .then(response => {
        this.country = response.data[0];
        this.borders = response.data[0].borders
          .sort(() => Math.random() - 0.5)
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.$route.push({ name: "not-found" });
        }
      });
  },
  deactivated() {},
  computed: {
    sortedCountriesBorder() {
      let sortedBorderCountries = [];
      for (let i = 0; i < this.countries.length; i++) {
        for (let j = 0; j < this.borders.length; j++) {
          if (
            this.countries[i].cioc === this.borders[j] ||
            this.countries[i].alpha3Code === this.borders[j]
          ) {
            sortedBorderCountries.push(this.countries[i]);
          }
        }
      }
      return sortedBorderCountries;
    }
  },
  beforeRouteUpdate(to, from, next) {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${to.params.countryName}`)
      .then(response => {
        this.country = response.data[0];
        this.borders = response.data[0].borders
          .sort(() => Math.random() - 0.5)
      });
    this.$route.params.countryName = to.params.countryName;
    next();
  }
};
</script>
