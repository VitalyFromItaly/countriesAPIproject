<template>
  <div id="app" class="font-nunito">
    <Header />
    <Body
      :countries="sortedCountries"
      class="bg-veryDarkBlue"
      @chosenRegion="chosenRegion"
      @search="search"
    />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Header,
    Body
  },
  data() {
    return {
      countries: [],
      clickedRegion: []
    };
  },
  methods: {
    chosenRegion(region) {
      this.clickedRegion = [];
      this.clickedRegion = this.countries
        .sort(() => Math.random() - 0.5) // shuffle massive's objects
        .filter(e => e.region == region); // searching for clicked region
      //.slice(0, 8);
      console.log(region);
      console.log(this.clickedRegion);
    },
    search(countryName) {
      countryName = this.countries.filter(e => e.name == countryName);
      console.log(countryName);
    }
  },

  mounted: function() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(
        response =>
          (this.countries = response.data.sort(() => Math.random() - 0.5))
      );
  },
  computed: {
    sortedCountries() {
      if (this.clickedRegion.length == 0) {
        return this.countries;
      } else {
        return this.clickedRegion;
      }
    }
  }
};
</script>


