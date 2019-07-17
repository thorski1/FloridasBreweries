<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-info">Breweries</h1>

      </div>
    </div>
    <div class="row">
      <div class="col-6">

        <BrewList 
          @mouse-over-brew="mouseOverBrew"
          @mouse-left-brew="mouseLeftBrew"
          :brews="brews"/>
        
      </div>
      <div class="col-6">
          <BrewMap :brews="brews"/>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios"
import BrewList from "./BrewList.vue"
import BrewMap from "./BrewMap.vue"
export default {
  name: 'Brew',
  components: {BrewList, BrewMap},

  data: function () {
    return {
      brews: [],
      normalIcon: [30,30],
      largeIcon: [50,50]
    }
  },

  mounted: function() {
    axios.get("https://api.openbrewerydb.org/breweries?by_state=florida")
      .then((r) => {
        this.brews = r.data.map(r => {
          r.iconSize = this.normalIcon;
          return r;
        });
      });
  },
  methods: {
    mouseOverBrew: function(index) {
      this.brews[index].iconSize = this.largeIcon;
    },
    mouseLeftBrew: function(index) {
      this.brews[index].iconSize = this.normalIcon;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>

