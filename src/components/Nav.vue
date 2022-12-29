<template>
  <div id="bar">
    <div class="nav-bar bg-nav">
      <v-container class="bar-content w-100">
        <p class="link title logo" @click="goToTop()">Godswill Anwuli</p>
        <div
          class="d-none d-sm-flex align-center font-weight-medium text-subtitle1"
        >
          <p class="mr-5 link" @click="scrollToSection('skills')">Skills</p>
          <p class="mx-5 link" @click="scrollToSection('projects')">Projects</p>
          <p class="ml-5 link" @click="scrollToSection('get-in-touch')">
            Get in Touch
          </p>
        </div>
        <v-icon
          icon="mdi-menu"
          size="large"
          class="d-flex d-sm-none"
          @click="side = true"
        ></v-icon>
      </v-container>
    </div>
    <div class="side-container" v-if="side" @click.self="side= false"></div>
    <transition name="side">
      <div class="side bg-side text-text d-sm-none elevation-20" v-if="side">
        <v-icon
          icon="mdi-close"
          size="x-large"
          class="w-100 d-flex justify-end mb-5 close"
          @click="side = false"
        ></v-icon>
        <p class="mobile-link link-top" @click="scrollToSection('skills')">
          Skills and Tools
        </p>
        <p class="mobile-link" @click="scrollToSection('projects')">
          My Projects
        </p>
        <p
          size="large"
          class="mobile-link"
          @click="scrollToSection('get-in-touch')"
        >
          Get in Touch
          <v-icon icon="mdi-chat" class="ml-1"></v-icon>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      side: false,
    };
  },
  methods: {
    scrollToSection(id) {
      this.side = false;
      document.getElementById(id).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    goToTop() {
      window.scrollTo({
        top: "0",
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.side-enter-active,
.side-leave-active {
  right: 0;
  transition: right 0.3s ease;
}

.side-enter-from,
.side-leave-to {
  right: -300px;
}
</style>
