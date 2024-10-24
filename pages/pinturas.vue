<template>
  <div class="container">
    <HeaderView />
    <h3 style="margin-top: 15px">Famous Paintings</h3>
    <p>Explore a collection of famous paintings from around the world.</p>
    <ul>
      <li v-for="painting in paintings" :key="painting.slug">
        <NuxtLink :to="{ name: 'pintura-slug', params: { slug: painting.slug } }">{{ painting.title }}</NuxtLink>
      </li>
    </ul>
    <FooterView />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    try {
      // Cargar datos del archivo paintings.json
      const paintings = await $content('pinturas').fetch() // Asegúrate de que el nombre aquí coincida con el archivo real
      return {
        paintings
      }
    } catch (error) {
      console.error('Error loading paintings:', error)
      return {
        paintings: []
      }
    }
  }
}
</script>
