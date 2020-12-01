<template>
  <div>
    <div class="container-fluid blue-bg">
      <div class="con">        
        <p >CAMPOS DE TRABAJO</p>
      </div>
      <article
        class="card"
        v-for="(camposDeTrabajo, index) in camposDeTrabajos"
        :key="index"
      >
        <header class="card__thumb">
          <a href="javascript:void(0)"
            ><img
              src="https://images.unsplash.com/photo-1512466699224-9d8217244131?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4b6f389eb54cb8e27ee8ee5d4040a5d7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
          /></a>
        </header>
        <div class="card__date">
          <span class="card__date__day">23</span>
          <span class="card__date__month">Mai</span>
        </div>
        <div class="card__body">
          <div class="card__category"><a href="#">Category</a></div>
          <div class="card__title">
            <a href="#">{{ camposDeTrabajo.fields.nombre }}</a>
          </div>
          <p class="card__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            sapiente doloremque recusandae,
          </p>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
import client from "~/plugins/contentful";

export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: "camposDeTrabajo"
      })
      .then(entries => {
        return { camposDeTrabajos: entries.items };
      })
      .catch(e => console.log(e));
  }
};
</script>
