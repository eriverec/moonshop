<template>
  <div>
    <div>
      <ul>
        <li v-for="(item, i) in items" :key="i">
          <NuxtLink :to="item.to">{{ item.title }}</NuxtLink>
        </li>
        <li>
          <p>👋</p>
        </li>
      </ul>
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
        },
      /*  {
          title: "Vestidos",
          to: "/vestidos"
        },
        {
          title: "Varios",
          to: "/varios"
        }*/
      ],
    };
  }
};
</script>

<style scoped>
.content__home {
  text-align: center;
  padding-top: 60px;
  justify-content: center;
}

.content__dentro {
  display: inline-block;
  margin: 10px;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.center2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  text-transform: uppercase;
  text-align: center;
}

ul {
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 24px;
  justify-items: center;
  margin: auto;
  padding: 0px;
}

ul li {
  list-style: none;
}

@media (min-width: 500px) {
  ul {
    grid-auto-flow: column;
  }
}

a {
  color: #333;
  text-decoration: none;
  box-shadow: inset 0 -1px 0 hsla(0, 0%, 12%, 0.4);
  font-size: 20px;
}

a:hover {
  box-shadow: inset 0 -1.2em 0 hsla(0, 0%, 100%, 0.4);
}

li:last-child {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

li:hover ~ li p {
  animation: wave-animation 0.3s infinite;
}

/* below is just for demo styling */

div {
  display: flex;
  height: 100vh;
  width: 100%;
  /*background-color: #002a38;*/
  line-height: 1.3;
}

@keyframes wave-animation {
  0%,
  100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(20deg);
  }
  75% {
    transform: rotate(-15deg);
  }
}
</style>
