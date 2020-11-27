<template>
  <div id="info">
    <a
      href="#app"
      class=" w-32 shadow-2xl text-md bg-darkBlue px-8 py-3 my-10 font-light text-white flex items-center rounded-md hover:"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="arrow-left"
        class="svg-inline--fa fa-arrow-left w-5 h-5 mr-3 "
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
        ></path>
      </svg>
      <span> Back</span>
    </a>
    <div class="grid grid-cols-2 gap-x-20 items-center">
      <img :src="chosenCountry.flag" alt="" class=" w-auto" />
      <div id="text-info">
        <h1 class="bolder text-2xl text-white py-5">
          {{ chosenCountry.name }}
        </h1>
        <div class="grid grid-cols-2 gap-x-full items-center">
          <div>
            <p class="py-1 text-white bolder">
              Native Name:<span class="text-gray-400">
                {{ chosenCountry.nativeName }}</span
              >
            </p>
            <p class="py-1 text-white bolder">
              Population:<span class="text-gray-400">
                {{ chosenCountry.population }}</span
              >
            </p>
            <p class="py-1 text-white bolder">
              Region:<span class="text-gray-400">
                {{ chosenCountry.region }}</span
              >
            </p>
            <p class="py-1 text-white bolder">
              Sub Region:<span class="text-gray-400">
                {{ chosenCountry.subregion }}</span
              >
            </p>
          </div>
         <!--
            <div>
              <p class="py-1 text-white bolder">
                Capital:<span class="text-gray-400">
                  {{ chosenCountry.capital }}</span
                >
              </p>
              <p class="py-1 text-white bolder">
                Top Level Domain:<span class="text-gray-400">
                  {{ chosenCountry.topLevelDomain[0] }}</span
                >
              </p>
              <p class="py-1 text-white bolder">
                Currencies:<span class="text-gray-400">
                  {{ chosenCountry.currencies[0].name }},
                  {{ chosenCountry.currencies[0].symbol }}</span
                >
              </p>
              <p class="py-1 text-white bolder">
                Languages:<span class="text-gray-400">
                  {{ chosenCountry.languages[0].name }}</span
                >
              </p>
            </div>
         </!-->
        </div>
        <h1 class="py-20 text-xl text-white">Border Countries:</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "info",
  props: ["chosenCountry"],
  data() {
    return {
    };
  },
  components: {},
  computed: {
  }
};
</script>