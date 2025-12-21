export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const path = nuxtApp.$router.currentRoute.value.path;
    if (path === "/") {
      return;
    }

    requestAnimationFrame(() => {
      document
        .querySelector<HTMLElement>("#main")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
