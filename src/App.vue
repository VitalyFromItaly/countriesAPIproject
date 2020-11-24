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
import VueRouter from 'vue-router'

export default {
  name: "App",
  components: {
    Header,
    Body,
    VueRouter
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
        .filter(e => e.region == region) // searching for clicked region
        //.slice(0, 8);
      console.log(region);
      console.log(this.clickedRegion);
    },
     search(countryName) {
      countryName = this.countries.filter(e => e.name == countryName);
      console.log(countryName);
    },
  },


  mounted: function() {
    //fetch('https://restcountries.eu/rest/v2/region/europe')
    //  .then(res => JSON.parse(res)) // how to parce the Json file to massive with objects and push it correctly to this.europesCountries?
    //  .then(response => {
    //    console.log(response)
    //    this.europesCountries = response.data
    //  })
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(response => (this.countries = response.data.sort(() => Math.random() - 0.5)));
    // const countries = response.data
    //  const sortedContries = contries.sort(() => Math.random() - 0.5)
    //   this.contries = sortedContries.slice(0,8)
    //.catch()
  },
  computed: {
    sortedCountries() {
      if (this.clickedRegion.length ==0) {
        return this.countries
      } else {
    return this.clickedRegion
      }
    }
  }
};
</script>


