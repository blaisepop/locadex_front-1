<template>
  <div class="card border-light">
    <div class="card-body">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img
            v-if="product.attributes.properties.image"
            v-lazy="product.attributes.properties.image"
            src="https://image.flaticon.com/icons/svg/265/265693.svg"
            class="card-img"
            alt="..."
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-between align-items-center">
              <a href="#" @click="searchEAN(product.attributes.ean)">{{ product.attributes.name }}</a>
              <!-- <span class="badge badge-secondary">{{ countShops(product.id) }}</span> -->
              <small>
                <a
                  v-if="displayInfomrations != product.id"
                  class="card-link text-info"
                  @click="displayInfomrations = product.id"
                >about</a>
              </small>
            </h5>
            <p class="card-text">
              <small class="text-muted">Available in {{ countShops }} stores</small>
            </p>
            <ul class="list-group list-group-flush" v-if="displayInfomrations == product.id">
              <li
                v-for="(value, property) in getProductProperties(product)"
                :key="property"
                class="list-group-item"
              >
                <strong>{{ property }}</strong>
                {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: [
    'product',
    'countShop'
  ],
  data: () => {
    return {
      displayInfomrations: false
    };
  },
  methods: {
    getProductProperties(product) {
      delete product.attributes.properties["url"];
      delete product.attributes.properties["image"];

      return product.attributes.properties;
    }
  }
};
</script>