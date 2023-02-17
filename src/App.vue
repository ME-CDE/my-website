<template>
  <v-app>
    <v-main class="text-text">
      <v-btn
        :icon="this.dark_mode ? 'mdi-weather-sunny' : 'mdi-weather-night'"
        elevation="15"
        @click="toggleTheme"
        class="mode-btn bg-mode"
      ></v-btn>
      <Nav />
      <Me />
      <Projects />
      <Section3 />
    </v-main>
  </v-app>
</template>

<script>
import Me from "./components/Me.vue";
import Nav from "./components/Nav.vue";
import Projects from "./components/Projects.vue";
import Section3 from "./components/Section3.vue";
export default {
  components: { Me, Projects, Section3, Nav },
  name: "App",
  data: () => ({
    dark_mode: false,
    prevScrollpos: 0,
  }),
  metaInfo() {
    return {
      title: "God'swill Anwuli Portfolio",
      meta: [
        { name: "description", content: "A site to get to know Godswill and what he does." },
        { property: "og:title", content: "God'swill Anwuli Portfolio" },
        {
          property: "og:type",
          content: "website",
        },
        { property: "og:url", content: "https://ganwuli.netlify.app" },
        {
          property: "og:image",
          content:
            "https://res.cloudinary.com/dqfcqbigt/image/upload/c_scale,w_500/v1675116519/my-site-project/20230110_180427_o8fprs.jpg",
        },
      ],
    };
  },
  methods: {
    toggleTheme() {
      this.dark_mode = !this.dark_mode;
      sessionStorage.setItem("theme", this.dark_mode ? "dark" : "light");
      this.$vuetify.theme.name = this.dark_mode ? "dark" : "light";
    },
    themeOnMount() {
      const theme = sessionStorage.getItem("theme")
        ? sessionStorage.getItem("theme")
        : "light";
      if (theme === "dark") {
        this.dark_mode = true;
      }
      this.$vuetify.theme.name = theme;
    },
    onScroll() {
      let currentScrollPos = window.pageYOffset;
      console.log(currentScrollPos, this.prevScrollpos);
      if (this.prevScrollpos - currentScrollPos >= 40) {
        document.getElementById("bar").style.top = "0";
        this.prevScrollpos = currentScrollPos;
      } else if (currentScrollPos - this.prevScrollpos >= 40) {
        document.getElementById("bar").style.top = "-70px";
        this.prevScrollpos = currentScrollPos;
      }
    },
  },
  mounted() {
    this.themeOnMount();
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss"></style>
