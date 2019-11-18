<template lang="html">
  <l-map :zoom="zoom" :center="center">
    <l-tile-layer :url="url"  :attribution="attribution"></l-tile-layer>
    <ShopMarker  :shop="shop" :key="shop.id" v-for="shop in shops" />
  </l-map>
</template>

<script>
import { mapState } from 'vuex'
import { LMap, LTileLayer } from 'vue2-leaflet';
import { latLng } from 'leaflet';
// import Vue2LeafletLocatecontrol from 'vue2-leaflet-locatecontrol'

import ShopMarker from './ShopMarker.vue'

export default {
    name: 'ProductMap',
    components: {
      LMap,
      LTileLayer,
      ShopMarker,
      // Vue2LeafletLocatecontrol
    },
    data() {
       return {
         zoom:7,
         center: latLng(46.9483, 7.4513),
         url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
         attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
       }
     },
     computed: {
       ...mapState('products', {
         shops: state => state.shops,
       }),
     },
     mounted() {
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
        if ("geolocation" in navigator) {
          // geolocation is available
          // get location and update map
          navigator.geolocation.getCurrentPosition(position => {
            this.center = latLng(
              position.coords.latitude,
              position.coords.longitude
            );
            this.zoom = 15;
          });
        } else {
          /* geolocation IS NOT available */
        }
     }
}
</script>

<style lang="css" scoped>
</style>
