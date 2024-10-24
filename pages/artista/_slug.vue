<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
        <img :src="artist.image" :alt="`Image of ${artist.name}`" style="max-width: 100%; height: auto;">
      </div>
      <div class="six columns">
        <h4>{{ artist.name }}</h4>
        <p>Born: {{ artist.birthYear }}</p>
        <p>Nationality: {{ artist.nationality }}</p>
        <p>Biography: {{ artist.biography }}</p>
        <p>Famous Works: {{ (artist.famousWorks || []).join(', ') }}</p>
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
      const artist = await $content('artista', params.slug).fetch()
      
      // Cargar las pinturas del artista
      const paintings = await $content('pinturas')
        .where({ slug: { $in: artist.paintings } })
        .fetch()

      return { artist, paintings }
    } catch (error) {
      console.error('Error loading artist:', error)
      return { artist: {}, paintings: [] }
    }
  }
}
</script>
