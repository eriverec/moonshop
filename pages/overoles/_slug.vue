<template>
  <div class="container">
    <h1 class="title__node">
      {{ seccionOverol.fields.titulo }}
    </h1>

    <template>
      <img :src="seccionOverol.fields.imagen.fields.file.url" alt="Overoles"  />
    </template>

    <div
      class="content"
      v-html="$md.render(seccionOverol.fields.texto)"
    ></div>




  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "seccionOverol",
        "fields.slug": params.slug
      })
      .then(entries => {
        return { seccionOverol: entries.items[0] };
      })
      .catch(e => console.log(e));
  },
  head() {
    return {
      titulo: this.seccionOverol.fields.titulo,
      texto: this.seccionOverol.fields.texto
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

.content img{
  width: 50%;
}
.container{
  text-align: center;
}
</style>
