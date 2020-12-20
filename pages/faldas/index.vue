<template>
  <div>


    <div class="center__fuera">
      <vs-card
        v-for="(seccionFalda, index) in seccionFaldas"
        :key="index"
        class="center__dentro"
      >
        <template #img>
          <img
            :src="seccionFalda.fields.imagen.fields.file.url"
            alt="text"
          />
        </template>

        <template #text>
          <h3 class="texto__imagen">{{ seccionFalda.fields.titulo }}</h3>
        </template>
        <template #interactions>
          <vs-button
            danger
            icon
            v-if="seccionFalda.fields.estado === 'Agotado'"
          >
            <div>
              <strong>{{ seccionFalda.fields.estado }}</strong>
            </div>
          </vs-button>
          <vs-button success icon v-else>
            <div>{{ seccionFalda.fields.estado }}</div>
          </vs-button>
          <nuxt-link  :to="'faldas/' + seccionFalda.fields.slug">
            <vs-button class="btn-chat" gradient dark animation-type="scale">
              Ver el producto
              <template #animate>
                <i class="bx bxs-cart-alt "></i>
              </template>
            </vs-button>
          </nuxt-link>
          <vs-button class="btn-chat" gradient animation-type="scale">
              $4
            </vs-button>
        </template>
      </vs-card>
 
    </div>
  </div>
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "seccionFalda"
      })
      .then(entries => {
        return { seccionFaldas: entries.items };
      })
      .catch(e => console.log(e));
  },
};
</script>

<style scoped>
.texto__imagen {
  margin: 10px;
  font-size: 15px;
  text-transform: uppercase;
}
a {
  text-decoration: none;
}

.center__fuera {
  text-align: center;
}
.center__dentro {
  margin: 30px;
  display: inline-block;
}

.con-image {
  border-radius: inherit;
}
img {
  display: block;
  position: relative;
  border-radius: inherit;
  max-width: 350px;
}

.vs-button {
  font-family: "Montserrat", sans-serif;
}


</style>
