<template>
  <div v-if="!loading" class="container">
    <div class="row mb-4">
      <div class="col">
        <input v-model="search" class="col form-control search-input" placeholder="Search" />
      </div>
    </div>

    <div class="row row-cols-1 row-cols-lg-2 g-4" v-if="filteredProducts.length > 0">
      <div class="col" v-for="product in filteredProducts" :key="product.id">
        <div class="card" @click="navigateTo(product.id)">
          <div class="card-body row">
            <div class="col">
              <a class="card-title h5">{{ product.title }}</a>
              <p class="card-subtitle" v-if="product.variants.length > 0">€{{ product.variants[0].price }}</p>
              <p class="card-text">{{ product.body_html }}</p>
            </div>
            <div class="col">
              <img v-if="product.images.length > 0" :src="product.images[0].src" class="card-img" />
              <img v-else src="../assets/cookie.jpg" class="card-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="text-center">Nothing matches your search</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  data() {
    return {
      loading: false,
      search: '',
      products: []
    }
  },

  computed: {
    filteredProducts() {
      if (this.products.length > 0) {
        return this.products.filter(product => {
          return product.title.toLowerCase().includes(this.search.toLowerCase())
        })
      }
      return []
    }
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData() {
      this.loading = true
      axios.get(`http://localhost:4000`)
      .then(response => {
        this.products = response.data.products
        this.loading = false
      })
      .catch(e => {
        console.error(e)
      })
    },

    navigateTo(productId) {
      router.push({name: 'product', path: `/shop/${productId}`, params: { id: productId }})
    },
  }
}
</script>

<style>
.container {
  max-width: 60%;
}
.search-input {
  width: 30%;
  float: right;
}

.card {
  cursor: pointer;
  font-family: 'Rubik', sans-serif;
  min-height: 316px;
}

.card-title {
  color: var(--primary-pink-900);
  font-weight: bold;
}

.card-subtitle {
  padding: 10px 0;
}

a {
  text-decoration: none;
}
a:hover {
  color: var(--primary-pink-300)
}
</style>