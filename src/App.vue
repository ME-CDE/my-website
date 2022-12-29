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
      if (this.prevScrollpos - currentScrollPos >= 60) {
        document.getElementById("bar").style.top = "0";
        this.prevScrollpos = currentScrollPos;
      } else if (currentScrollPos - this.prevScrollpos >= 60) {
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
