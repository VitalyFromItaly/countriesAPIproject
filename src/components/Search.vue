<template>
  <div id="v-search">
    <form method="get" class="relative mb-5 md:mb-0  md:w-full">
      <button
        type="button"
        @click.prevent="onChange"
        class="absolute inset-y-0 pl-5"
      >
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
        @keydown.enter.prevent="onChange"
        class="bg-veryLightGray shadow-lg dark:bg-darkBlue w-full md:pr-10 lg:pr-32 rounded-md py-4 pl-16 focus:outline-none"
        placeholder="Search for a country.."
      />
    </form>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router/router";
export default {
  name: "v-search",
  data() {
    return {
      search: "",
      searchedCountry: null,
      searchedCountryBorders: null
    };
  },
  methods: {
    onChange() {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${this.search}`)
        .then(res => {
          if (res.status === 200) {
            this.searchedCountry = res.data[0];
            this.searchedCountryBorders = res.data[0].borders
              .sort(() => Math.random() - 0.5)
              .slice(0, 3);
            router.push({
              name: "info",
              params: { countryName: this.searchedCountry.name, countryBorders: this.searchedCountryBorders }
            });
          }
        })
        .catch(err => {
          if (err.response.status === 404) {
            this.$router.push({ name: "not-found" });
          }
        });
      this.search = "";
    }
  },
  deactivated() {
    this.searchedCountryBorders = null;
    this.searchedCountryBorders = null;
  }
};
</script>