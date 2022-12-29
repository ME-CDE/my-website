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
          I am Frontend developer who loves writing codes and learning about new
          tech. I use javascript tools like react, vue, firebase e.t.c and some
          other tools to bring ideas to reality. Let's connect and collabrate.
        </p>
        <v-btn
          size="large"
          class="text-buttonText bg-buttonBg mt-5"
          append-icon="mdi-download"
          @click="
            anotherPage(
              'https://export-download.canva.com/Q2SKc/DAFWLLQ2SKc/20/0-44380539051.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20221229%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20221229T032321Z&X-Amz-Expires=74562&X-Amz-Signature=822248c1088d7998ff2333bbf74ba7b7b5a0ad77e00cf461f837a54c215a929e&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Simple%2520Professional%2520Software%2520Engineer%2520Resume.pdf&response-expires=Fri%2C%2030%20Dec%202022%2000%3A06%3A03%20GMT'
            )
          "
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
  methods: {
    anotherPage(value) {
      window.location.replace(value);
    },
  },
};
</script>

<style></style>
