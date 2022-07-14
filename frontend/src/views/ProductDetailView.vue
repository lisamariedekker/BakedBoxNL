<template>
  <div v-if="!loading" class="product-detail-wrapper row">
    <div class="col">
      <h2>{{ product.title }}</h2>
      <h4 v-if="product.variants">{{ product.variants[0].price }}</h4>
      <p>Tax included, shipping calculated at checkout</p>
      <button type="button" class="btn button-primary" @click="(addToCart())">Add to cart</button>
      <p class="lead">{{ product.body_html}}</p>
    </div>
    <div class="col">
      <img v-if="product.images" :src="product.images[0].src" class="card-img rounded detail-img" />
    </div>

    <div v-if="showAlert" class="alert alert-secondary alert-dismissible" role="alert">
      <div>Unfortunately I didn't manage to finish the 'add to cart' - feature</div>
      <div>I'm still reading up and learning about the Vue Composition API and Pinia</div>
      <div>This feature will be added soon!</div>
      <button type="button" class="btn-close" @click="showAlert=false" aria-label="Close" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      product: {},
      showAlert: false,
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.loading = true
      axios.get(`http://localhost:4000/product`, {
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        this.product = response.data.product
        this.loading = false

      })
      .catch(e => {
        console.error(e)
      })
    },

    addToCart() {
      this.showAlert = true
    }
  }
}
</script>

<style>

.product-detail-wrapper {
  margin: 0 auto;
  max-width: 60%;
  font-family: 'Rubik', sans-serif;
}

.button-primary {
  background-color: var(--primary-pink-300);
  width: 100%;
  margin: 1.5rem 0;
}

.detail-img {
  width: 400px;
  height: 400px;
}

.alert {
  margin: 3rem auto;
}
</style>
