<template>
    <div class="row map">
        <!-- <h2>Center is {{currentCenter}} , zoom is {{currentZoom}}</h2> -->
        <l-map 
        @update:zoom="zoomUpdate"
        @update:center="centerUpdate"
        :zoom="zoom" 
        :center="center">
            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
            <l-marker
                :key="index" 
                v-for="(brew, index) in brews"
                :lat-lng="latLng(brew.latitude, brew.longitude)">
                <l-icon
                :icon-size="brew.iconSize"
                :icon-url="icon"></l-icon>
                </l-marker>
            
        </l-map>
    </div>
</template>

<script>
import {LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet';

import beer from "../assets/beer.png"
export default {
    name: "BrewMap",
    props: {
        brews: Array
    },
    data() {
        return{
      zoom:7,
      center: L.latLng(27.988405, -82.098),
      url:'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=c615b4f97ced434abc7290f0317b040a',
      currentCenter:L.latLng(27.988405, -82.098),
      currentZoom:7,
      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      marker: L.latLng(47.413220, -1.219482),
      icon: beer,
      iconSize: [30,30]
        }
    },
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LIcon
    },
    methods: {
        latLng: function(lat, lng) {
            return L.latLng(lat, lng);
        },

        centerUpdate: function(center) {
            this.currentCenter = center
        },

        zoomUpdate: function(zoom) {
            this.currentZoom = zoom
        }
    }
}
</script>

<style lang="scss" scoped>
.map {
    height: 95vh;
}
</style>
