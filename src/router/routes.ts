export const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/inicio/inicio.vue"),
  },
  {
    path: "/nosotros",
    name: "nosotros",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/nosotros/nosotros.vue"),
  },
  {
    path: "/transparencia",
    name: "transparencia",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/transparencia/transparencia.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/blog/blog.vue"),
  }
  ,
  {
    path: "/prestamos",
    name: "prestamos",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/prestamos/prestamos.vue"),
  },
  {
    path: "/inversiones",
    name: "inversiones",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/inversiones/inversiones.vue"),
  }
]
