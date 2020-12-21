<template>
  <div>
    <div class="intro">
      <vs-alert relief>
        <template #title>
          Vuesax Framework
        </template>
        <b>MOONSHOP</b>  es una tienda basada en Ecuador que piensa en lo mejor para ti, es por eso que solo vendemos productos de plata esterlina y acero inoxidable. Shop with us! xoxo
      </vs-alert>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Inicio",
          to: "/"
        },
        {
          title: "Overoles",
          to: "/overoles"
        },

        {
          title: "Faldas",
          to: "/faldas"
        }
        /*  {
          title: "Vestidos",
          to: "/vestidos"
        },
        {
          title: "Varios",
          to: "/varios"
        }*/
      ]
    };
  }
};
</script>

<style scoped>
.intro {
  margin: 30px 0px;
}


</style>
