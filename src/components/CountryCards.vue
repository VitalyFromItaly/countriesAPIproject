<template>
  <div id="country-cards">
    <div class="grid grid-cols-4 gap-4">
        <div v-for="item in countries.slice(0,8)" :key="item.index" @click="$emit('clickedCountry', item)" class="block bg-darkBlue rounded-md shadow-2xl overflow-hidden mb-5 cursor-pointer">
          <div id="photo" class="pb-5/6 relative">
            <img :src="item.flag" alt="" class="h-full w-full object-cover absolute">
          </div>
          <div id="content" class="px-5">
            <p class="my-5 text-xl">{{item.name}}</p>
            <p class="mb-2"><span class="bolder">Population: </span> {{item.population}}</p>
            <p class="mb-2"><span class="bolder">Region: </span> {{item.region}}</p>
            <p class="pb-5"><span class="bolder">Capital: </span> {{item.capital}}</p>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
export default {
  name: 'country-cards',
  components: {
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