<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-offset-2 is-8">
          <p class="subtitle is-6">
            <nuxt-link to="/">Back to Blog home</nuxt-link>
          </p>
          <template>
            <img :src="seccionVestidos.fields.imagen.fields.file.url" alt="" />
          </template>
          <h1 class="title is-2">
            {{ seccionVestidos.fields.titulo }}
          </h1>
          <vs-button
            @click="to"
            size="large"
            gradient
            animation-type="scale"
            class="boton__flotante"
          >
            Atras
            <template #animate>
              <i class="bx bx-arrow-back"></i>
            </template>
          </vs-button>
        </div>
      </div>
    </div>
  </section>
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
      titulo: this.seccionVestidos.fields.titulo
    };
  },
  methods: {
    to() {
      this.$router.go(-1);
    }
  }
};
</script>
