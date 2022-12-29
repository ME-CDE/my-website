<template>
  <v-container class="max-w-xl">
    <div class="w-100 section-1">
      <div class="imgdiv">
        <div class="img bg-buttonBg rounded-shaped elevation-12"></div>
        <div class="name-div mt-5 pl-3">
          <h1 class="text-h4 font-weight-bold">Godswill Anwuli</h1>
          <p class="font-weight-medium">Javascript | web developer | Nigeria</p>
        </div>
      </div>
      <div
        class="about text-subtitle-1 text-md-h6 font-weight-light text-center"
      >
        <p class="about-me text-h5">About Me</p>
        <p>
          I am Frontend developer who loves writing codes and learning about
          new tech. I use javascript tools like react, vue, firebase e.t.c and
          some other tools to bring ideas to reality. Let's connect and collabrate.
        </p>
        <v-btn
          size="large"
          class="text-buttonText bg-buttonBg mt-5"
          append-icon="mdi-download"
        >
          <p class="d-md-none"><span class="my">my</span> cv</p>
          <p class="d-none d-md-inline-block">my resume</p>
        </v-btn>
        <v-btn
          size="large"
          class="text-buttonText bg-buttonBg mt-5 ml-5 get-in-touch"
          id="get-in-touch"
          append-icon="mdi-chat"
          @click="showChatModel = !showChatMoodel"
        >
          get in touch
        </v-btn>
      </div>
    </div>
  </v-container>

  <ChatModel v-if="showChatModel" @close="showChatModel = false" />
</template>

<script>
import ChatModel from "./ChatModel.vue";

export default {
  components: { ChatModel },
  data() {
    return {
      showChatModel: false,
    };
  },
};
</script>

<style></style>
