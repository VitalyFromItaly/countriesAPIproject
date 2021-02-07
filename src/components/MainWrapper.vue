<template>
  <div id="main-wrapper" class="bg-white text-gray-700 dark:bg-veryDarkBlue dark:text-gray-400 flex flex-col h-screen justify-between ">
    <Header />
    <keep-alive>
      <router-view class="mb-auto bg-white text-gray-700 dark:bg-veryDarkBlue dark:text-gray-400"
        :countries="sortedCountries"
        @chosenRegion="chosenRegion"
      />
    </keep-alive>
    <Footer />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import axios from "axios";
export default {
  name: "main-wrapper",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      countries: [],
      clickedRegion: [],
    };
  },
  methods: {
    chosenRegion(region) {
      this.clickedRegion = [];
      this.clickedRegion = this.countries
        .sort(() => Math.random() - 0.5) // shuffle massive's objects
        .filter(e => e.region == region); //searching for clicked region
    },
  },
  mounted: function() {
    axios
      .get("https://restcountries.eu/rest/v2/all") //get all data of countries from API
      .then(
        response => {
          if (response.status === 200) {
            (this.countries = response.data.sort(() => Math.random() - 0.5)) // save the data in this.countries
          }
        }
      );
  },
  computed: {
    sortedCountries() {
      if (!this.clickedRegion.length) {
        return this.countries;
      } else {
        return this.clickedRegion;
      }
    }
  },
};
</script>


