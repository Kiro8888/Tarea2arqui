<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
        <img :src="museo.image" :alt="`Image of ${museo.name}`" style="max-width: 100%; height: auto;">
      </div>
      <div class="six columns">
        <h4>{{ museo.name }}</h4>
        <p>Location: {{ museo.location }}</p>
        <p>Established: {{ museo.established }}</p>
        <p>Description: {{ museo.description }}</p>
        <p>Notable Exhibits: {{ museo.notableExhibits }}</p>
        <h5>Paintings</h5>
        <ul>
          <li v-for="painting in paintings" :key="painting.slug">
            <NuxtLink :to="{ name: 'pintura-slug', params: { slug: painting.slug } }">{{ painting.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="two columns"></div>
    </div>
    <Utterances />
    <FooterView />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      // Cargar datos del museo
      const museo = await $content('museos', params.slug).fetch()

      // Cargar todas las pinturas
      const allPaintings = await $content('pinturas').fetch()

      // Filtrar pinturas asociadas al museo
      const paintings = allPaintings.filter(painting => painting.museum === museo.slug)

      return { museo, paintings }
    } catch (error) {
      console.error('Error fetching museo or paintings:', error)
      return { museo: {}, paintings: [] }
    }
  }
}
</script>
