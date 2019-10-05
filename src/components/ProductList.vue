<template>
  <div>
    <div v-if="isLoading == false">
      <ProductCard
          :product="product"
          :key="product.id"
          v-for="product in products"
          :countShop="countShops(product.id)"
      />
    </div>
    <div v-else>
      <div class="spinner-grow" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ProductCard from './ProductCard.vue'

export default {
  name: "ProductList",
  components: {
      ProductCard,
    },
  computed: {
    ...mapState("products", {
      products: state => state.products,
      isLoading: state => state.isLoading,
      productShops: state => state.productShops
    })
  },
  data: () => {
    return {
      displayProductInformations: null,
      selectedProductId: null
    };
  },
  methods: {
    countShops(productId) {
      return this.productShops.filter(p => p.attributes.product_id == productId)
        .length;
    },
    searchEAN(ean) {
      this.$store.dispatch("products/search", ean);
    },
    
  }
};
</script>
