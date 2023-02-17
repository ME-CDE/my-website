<template>
  <v-container class="max-w-xl">
    <div class="w-100 section-3" id="skills">
      <div>
        <h2 class="text-h5 font-weight-bold pb-1 skills">My skills</h2>
        <div class="skills-container">
          <p
            v-for="skill in skills"
            :key="skill"
            class="skill text-buttonText bg-buttonBg elevation-3 text-h6"
          >
            <v-icon :icon="skill.path"></v-icon>
            <span class="ml-3 ml-sm-2">{{ skill.name }}</span>
          </p>
        </div>
      </div>
      <h2 class="mb-3">Connect with me:</h2>
      <v-btn
        icon="mdi-github"
        elevation="2"
        @click="anotherPage('https://github.com/ME-CDE')"
        class="bg-buttonBg"
      >
      </v-btn>
      <v-btn
        icon="mdi-twitter"
        class="text-blue mx-4 bg-buttonBg"
        elevation="2"
        @click="anotherPage('https://twitter.com/godswill_anwuli')"
      ></v-btn>
      <v-btn
        icon="mdi-linkedin"
        class="text-blue bg-buttonBg"
        elevation="2"
        @click="anotherPage('https://www.linkedin.com/in/godswill-anwuli-7a8b80243/')"
      ></v-btn>
    </div>
  </v-container>
</template>

<script>

import skills from "../skills.json";
export default {
  data(){
    return {
      skills: skills
    }
  },
  methods: {
    anotherPage(value) {
      window.location.href = value;
    },
  },
};
</script>

<style></style>
