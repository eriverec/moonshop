<template>
  <div>
    <div class="center__fuera">
      <vs-card
        v-for="(seccionVestidos, index) in seccionVestidoss"
        :key="index"
        class="center__dentro"
      >
        <template #img>
          <img
            :src="seccionVestidos.fields.imagen.fields.file.url"
            alt="text"
          />
        </template>

        <template #text>
          <h3 class="texto__imagen">{{ seccionVestidos.fields.titulo }}</h3>
        </template>
        <template #interactions>
          <vs-button
            danger
            icon
            v-if="seccionVestidos.fields.estado === 'Agotado'"
          >
            <div>
              <strong>{{ seccionVestidos.fields.estado }}</strong>
            </div>
          </vs-button>
          <vs-button success icon v-else>
            <div>{{ seccionVestidos.fields.estado }}</div>
          </vs-button>
          <nuxt-link :to="'vestidos/' + seccionVestidos.fields.slug">
            <vs-button class="btn-chat" gradient dark animation-type="scale">
              Ver el producto
              <template #animate>
                <i class="bx bxs-cart-alt "></i>
              </template>
            </vs-button>
          </nuxt-link>
        </template>
      </vs-card>
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
</template>

<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "seccionVestidos"
      })
      .then(entries => {
        return { seccionVestidoss: entries.items };
      })
      .catch(e => console.log(e));
  },
  methods: {
    to() {
      this.$router.go(-1);
    }
  }
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
