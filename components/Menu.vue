<template>
  <div>
    <nav>
      <ul class="menuItems">
        <li v-for="(item, i) in items" :key="i">
          <NuxtLink router exact :to="item.to">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Home",
          to: "/"
        },
        {
          title: "Pantalones",
          to: "/pantalones"
        },
        {
          title: "Blusas",
          to: "/blusas"
        },
        {
          title: "Body’s",
          to: "/bodys"
        },
        {
          title: "Faldas",
          to: "/faldas"
        },
        {
          title: "Vestidos",
          to: "/vestidos"
        }
      
      ],
    };
  }
};
</script>

<style >
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #4caf50;
  color: white;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}

.nuxt-link-active {
  background-color: transparent;
}

.nuxt-link-exact-active {
  color: #8254ff !important;
  border-bottom: 3px solid #8254ff;
}

div {
  text-align: center;
}

nav {
  /* margin: 25px;*/
  background: #f9f9f9;
  padding: 5px;
}
nav .menuItems {
  list-style: none;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  margin: auto;
  justify-content: center;
  padding: 0px;
}
nav .menuItems li {
  margin: 15px;
}
nav .menuItems li a {
  text-decoration: none;
  color: #8f8f8f;
  font-size: 14px;
  font-weight: 400;
  /*transition: all 0.5s ease-in-out;*/
  position: relative;
  text-transform: uppercase;
  font-weight: 600;
}

nav .menuItems li a:hover {
  color: #8254ff;
  border-bottom: 3px solid #8254ff;
  font-weight: 600;
}

@media (max-width: 600px) {
  nav .menuItems {
    justify-content: normal;
  }
}
</style>
