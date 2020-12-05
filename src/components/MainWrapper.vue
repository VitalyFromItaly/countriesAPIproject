<template>
  <div id="main-wrapper" class="bg-white text-gray-700 dark:bg-veryDarkBlue dark:text-gray-400 ">
    <Header @switchMode="switchMode" />
    <keep-alive>
      <router-view
        :countries="sortedCountries"
        :borderCountries="borderCountries"
        :chosenCountry1="chosenCountry1"
        @chosenRegion="chosenRegion"
        @search="search"
        @clikedBorderCountry="clikedBorderCountry"
        @cleanInfoPage="cleanInfoPage"

      />
      <!--
      :chosenCountry1="chosenCountry1"  came from body 133 line to updated hook, which came from CountryCards line 4.
       -->
      <!--
        <Body
          :countries="sortedCountries"
          class=""
          @chosenRegion="chosenRegion"
          @search="search"
        />
        <Info :borderCountries="borderCountries" :chosenCountry1="chosenCountry1" />
      </ -->
    </keep-alive>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
//import Body from "../components/Body.vue";
//import Info from "../components/Info.vue";
import { bus } from "../main";
import axios from "axios";
import router from "../router/router";
export default {
  name: "main-wrapper",
  components: {
    Header
    //Body,
    //Info
  },
  data() {
    return {
      countries: [],
      clickedRegion: [],
      chosenCountry1: [],
      borderCountries: [],
      borders: [],
      toggleDarkMode: true,
    };
  },
  methods: {
    chosenRegion(region) {
      this.clickedRegion = [];
      this.clickedRegion = this.countries
        .sort(() => Math.random() - 0.5) // shuffle massive's objects
        .filter(e => e.region == region); //searching for clicked region
    },
    search(countryName) {
      this.chosenCountry1 = [];
      this.borders = [];
      countryName.toLowerCase();
     this.chosenCountry1 = this.countries.find(e => e.name.toLowerCase() == countryName);
     this.borders = this.chosenCountry1.borders;
      router.push("info").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error }
      });
    },
    clikedBorderCountry(borderCountry) {
      this.chosenCountry1 = borderCountry;
      this.borders = borderCountry.borders.sort(() => Math.random() - 0.5);
      this.borderCountries = [];
    },
    cleanInfoPage() {
      this.chosenCountry1 = [];
      this.borderCountries =[];
     this.borders = [];
    },
   switchMode() {
      this.toggleDarkMode = !this.toggleDarkMode;
     if (this.toggleDarkMode == true) {
       document.querySelector('html').classList.add('dark')
     } else if (this.toggleDarkMode ==false) {
       document.querySelector('html').classList.remove('dark')
     }
    console.log(this.toggleDarkMode);
   }
  },
  mounted: function() {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then(
        response =>
          (this.countries = response.data.sort(() => Math.random() - 0.5))
      );
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.querySelector('html').classList.add('dark')
      } else {
         document.querySelector('html').classList.remove('dark')
       }
  },
  computed: {
    sortedCountries() {
      if (this.clickedRegion.length == 0) {
        return this.countries;
      } else {
        return this.clickedRegion;
      }
    }
  },
   updated() {
    bus.$on("chosenCountry", data => { // from CountryCard via Body
      // console.log(data);
      this.borderCountries = [];
      this.chosenCountry1 = data;
      this.borders = this.chosenCountry1.borders
        ? this.chosenCountry1.borders
        : [];
      router.push("info").catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error; }
      });
    });
  },
  watch: {
    borders: function() {
      //this.borderCountries= this.countries.filter(function(item) {
      //  return this.borders.indexOf(item.cioc) === 1;
      //});
      for (let i = 0; i < this.countries.length; i++) {
        for (let j = 0; j < this.borders.length; j++) {
          if (
            this.countries[i].cioc === this.borders[j] ||
            this.countries[i].alpha3Code === this.borders[j]
          ) {
            this.borderCountries.push(this.countries[i]);
          }
        }
      }
    },
  }
};
</script>


