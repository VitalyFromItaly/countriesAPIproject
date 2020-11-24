<template>
  <div id="country-cards">

    <div class="grid grid-cols-4 gap-4">
        <a href="/Info" v-for="item in countries.slice(0,8)" :key="item.index" class="block bg-darkBlue rounded-md overflow-hidden mb-5">
          <div id="photo" class="pb-5/6 relative">
            <img :src="item.flag" alt="" class="h-full w-full object-cover absolute">
          </div>
          <div id="content" class="px-5">
            <p class="my-5 text-xl">{{item.name}}</p>
            <p class="mb-2"><span class="bolder">Population: </span> {{item.population}}</p>
            <p class="mb-2"><span class="bolder">Region: </span> {{item.region}}</p>
            <p class="pb-5"><span class="bolder">Capital: </span> {{item.capital}}</p>
          </div>
        </a>
      </div>

  </div>
</template>
<script>
//import Info from '../components/Info.vue'
export default {
  name: 'country-cards',
  components: {
    //Info
  },
  props: ['countries'],
  data() {
    return {
    };
},
computed: {

},
}
</script>