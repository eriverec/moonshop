<template>
  <div class="container">
    <h1 class="title__node">
      {{ seccionVestidos.fields.titulo }}
    </h1>

    <template>
      <img :src="seccionVestidos.fields.imagen.fields.file.url" alt="" />
    </template>

    <div
      class="content"
      v-html="$md.render(seccionVestidos.fields.texto)"
    ></div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "seccionVestidos",
        "fields.slug": params.slug
      })
      .then(entries => {
        return { seccionVestidos: entries.items[0] };
      })
      .catch(e => console.log(e));
  },
  head() {
    return {
      titulo: this.seccionVestidos.fields.titulo,
      texto: this.seccionVestidos.fields.texto
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
