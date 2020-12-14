<template>
  <div id="country-cards">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="item in countries.slice(0,8)" :key="item.index"
        @click="$router.push({name: 'info', params: {countryName: item.name, countryBorders: item.borders.slice(0,3)}})"
        class="block bg-veryLightGray dark:bg-darkBlue rounded-md shadow-2xl overflow-hidden mb-5 cursor-pointer ">
          <div class="pb-3/5 md:pb-5/6 relative">
            <img :src="item.flag" alt="" class="h-full  w-full object-cover absolute">
          </div>
          <div class="px-5">
            <p class="my-5 text-xl text-gray-800 dark:text-gray-200">{{item.name}}</p>
            <p class="mb-2"><span class="bolder">Population: </span> {{item.population.toLocaleString('de-DE')}}</p>
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
  props: ['countries'],
}
</script>