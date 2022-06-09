const routes = {
  home: "/",
  examplePageSSG: "/example-page-SSG",
  examplePageSSR: "/example-page-SSR",
  examplePageISR: "/example-page-ISR",
  exampleSearch: "/example-search",

  // paths can be functions
  // this also makes it easier to change from "id" to "slug" in the future
  // product(pid: number) {
  //   return {
  //     href: `/products/${pid}`,
  //     as: `/products/${pid}`,
  //   };
  // },
};

export default routes;
