<template>
  <div id="main-wrapper" class="  bg-veryDarkBlue text-gray-400 px-10">
    <Header />
    <Body
      :countries="sortedCountries"
      class=""
      @chosenRegion="chosenRegion"
      @search="search"
    />
    <Info :borderCountries="borderCountries" :chosenCountry1="chosenCountry1" />
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Body from "../components/Body.vue";
import Info from "../components/Info.vue";
import {bus} from "../main";
import axios from "axios";
export default {
  name: "main-wrapper",
  components: {
    Header,
    Body,
    Info
  },
  data() {
    return {
      countries: [],
      clickedRegion: [],
      chosenCountry1: [],
      borderCountries: [],
      borders: [],
    };
  },
  methods: {
    chosenRegion(region) {
      this.clickedRegion = [];
      this.clickedRegion = this.countries
        .sort(() => Math.random() - 0.5) // shuffle massive's objects
        .filter(e => e.region == region); //searching for clicked region
      //.slice(0, 8);
      console.log(region);
      console.log(this.clickedRegion);
    },
    search(countryName) {
      countryName = this.countries.filter(e => e.name == countryName);
      console.log(countryName);
    },
    //chosenCountry(countryObj) {
    //   this.borderCountries = [];
    //  this.chosenCountry1 = countryObj;
    //  this.borders = this.chosenCountry1.borders
    //    ? this.chosenCountry1.borders.slice(0,3)
    //    : [];
    //}
  },
  updated() {
    bus.$on('chosenCountry',(data) => {
     console.log(data);
     this.borderCountries = [];
      this.chosenCountry1 = data;
      this.borders = this.chosenCountry1.borders
        ? this.chosenCountry1.borders.slice(0,3)
        : [];
    })
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
  },
  watch: {
    borders: function() {
      //this.borderCountries= this.countries.filter(function(item) {
      //  return this.borders.indexOf(item.cioc) === 1;
      //});
      for (let i = 0; i < this.countries.length; i++) {
        for (let j = 0; j < this.borders.length; j++) {
          if (this.countries[i].cioc === this.borders[j] || this.countries[i].alpha3Code === this.borders[j]) {
            this.borderCountries.push(this.countries[i]);
          }
        }
      }
    }
  }
};
</script>


