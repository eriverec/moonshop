<template>
  <div class="container">
    <h1 class="title__node">
      {{ seccionFalda.fields.titulo }}
    </h1>

    <template>
      <img :src="seccionFalda.fields.imagen.fields.file.url" alt="" />
    </template>

    <div
      class="content"
      v-html="$md.render(seccionFalda.fields.texto)"
    ></div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "seccionFalda",
        "fields.slug": params.slug
      })
      .then(entries => {
        return { seccionFalda: entries.items[0] };
      })
      .catch(e => console.log(e));
  },
  head() {
    return {
      titulo: this.seccionFalda.fields.titulo,
      texto: this.seccionFalda.fields.texto
    };
  }
};
</script>

<style  scoped>
.title__node{
  margin: 20px;
}
img{
  width: 50%;
}
.content{
  margin: 20px;
}
</style>
