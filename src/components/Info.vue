<template>
  <div id="info" class="px-5 sm:px-10 md:px-20 mb-auto">
    <Back @close="isModalOpen = false" @click="nuls" />
    <div
      v-if="country"
      class="md:grid md:grid-cols-2 md:gap-x-20 items-start pb-5"
    >
      <img :src="country.flag" alt="" class=" w-auto shadow-lg" />
      <div id="text-info">
        <div class="flex justify-between items-center md:items-start">
          <h1 class="bolder text-2xl dark:text-white py-5 md:py-0 md:pb-5">
            {{ country.name }}
          </h1>
          <button
            @click="isModalOpen = !isModalOpen"
            class="text-xl dark:text-white px-4 py-1 hover:bg-gray-300 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none rounded-lg"
          >
            More info
          </button>
        </div>
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
                {{ country.population.toLocaleString("de-DE") }}</span
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
    <div class="sm:flex sm:items-center  text-sm sm:text-xl pb-32">
      <h1 class="sm:block sm:py-10 text-center">Border Countries:</h1>
      <p
        class="bg-veryLightGray shadow-md dark:bg-darkBlue py-2 rounded-md px-2 md:px-3 my-3 sm:my-0 mx-1 cursor-pointer text-gray-800 dark:text-gray-200"
        v-for="sortedCountryBorder in sortedCountriesBorder.slice(0, 3)"
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
    <Modal @close="isModalOpen = !isModalOpen" v-if="isModalOpen && loaded">
      <template v-slot:header> Extra info about {{country.name}} </template>
      <template v-slot:body>
        <div class="grid grid-cols-2 md:gap-x-20 items-baseline px-5">
          <div>
            <p class="py-1  bolder">
              Timezones:<span class="text-gray-400 dark:text-gray-700">
                {{ country.timezones.length }}</span
              >
            </p>
            <p class="py-1  bolder">
              Coling code: +<span class="text-gray-400 dark:text-gray-700">{{
                country.callingCodes[0]
              }}</span>
            </p>
          </div>
          <div>
            <p class="py-1  bolder">
              Area:
              <span class="text-gray-400 dark:text-gray-700"
                >{{ country.area
                }}<span class="text-2xl font-medium">&sup2;</span>, km</span
              >
            </p>
            <p class="py-1  bolder" v-if="country.regionalBlocs[0]" >
              Joined block :<span class="text-gray-400 dark:text-gray-700">
                {{ country.regionalBlocs[0].name }},
                {{ country.regionalBlocs[0].acronym }}</span
              >
            </p>
            <p class="py-1  bolder" v-else>
              Joined block :<span class="text-gray-400 dark:text-gray-700">
                none</span
              >
            </p>
          </div>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script>
import axios from "axios";
import Back from "../components/Back.vue";
import Modal from "../components/Modal.vue";
export default {
  name: "info",
  props: ["countries"],
  data() {
    return {
      country: null,
      borders: [],
      isModalOpen: false,
      loaded: false
    };
  },
  components: { Back, Modal },
  methods: {
    nuls() {
      this.country=null;
    }
  },
  activated: function() {
    axios
      .get(
        `https://restcountries.eu/rest/v2/name/${this.$route.params.countryName}`
      )
      .then(response => {
        this.country = response.data[0];
        this.borders = response.data[0].borders.sort(() => Math.random() - 0.5);
        this.loaded = true;
      })
      .catch(err => {
        if (err.response.status === 404) {
          this.$route.push({ name: "not-found" });
          console.log('activated:', this.country);
        }
      });
  },
  deactivated() {
    this.country = null;
    this.borders = [];
  },
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
        this.borders = response.data[0].borders.sort(() => Math.random() - 0.5);
      });
    this.$route.params.countryName = to.params.countryName;
    next();
  },
  beforeCreate() {
    console.log("beforeCreate:", this.country);
  },
  created() {
    console.log("created:", this.country);
  },
  beforeMount() {
    console.log("beforeMount:", this.country);
  },
  mounted() {
    console.log("mounted:", this.country);
  },
  beforeUpdate() {
    this.loaded = true;
    console.log("beforeUpdate:", this.country);
  },
  updated() {
    console.log("updated:", this.country);
  },
  beforeDestroy() {
    console.log("beforeDestroy:", this.country);
  }
};
</script>
