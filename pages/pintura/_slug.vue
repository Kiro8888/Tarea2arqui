<template>
  <div class="container">
    <HeaderView />
    <div class="row">
      <div class="three columns">
        <img :src="painting.image" :alt="`Image of ${painting.title}`" style="max-width: 100%; height: auto;">
      </div>
      <div class="six columns">
        <h4>{{ painting.title }}</h4>
        <p>Artist: <NuxtLink :to="{ name: 'artista-slug', params: { slug: painting.artistSlug } }">{{ painting.artist }}</NuxtLink></p>
        <p>Year: {{ painting.year }}</p>
        <p>Description: {{ painting.description }}</p>
        <p>Museum: <NuxtLink :to="{ name: 'museos-slug', params: { slug: painting.museumSlug } }">{{ painting.museum }}</NuxtLink></p>
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
      // Cargar datos del archivo paintings.json para una pintura específica
      const painting = await $content('pinturas', params.slug).fetch()

      // Obtener el slug del artista y del museo basados en el nombre
      const artistSlug = painting.artist.replace(/\s+/g, '-').toLowerCase();
      const museumSlug = painting.museum.replace(/\s+/g, '-').toLowerCase();

      return { 
        painting: {
          ...painting,
          artistSlug,
          museumSlug
        }
      }
    } catch (error) {
      console.error('Error loading painting:', error)
      return { painting: {} }
    }
  }
}
</script>
