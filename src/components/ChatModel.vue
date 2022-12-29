<template>
  <div class="chat-container">
    <div class="mail-container" @click.self="this.$emit('close')">
      <div class="chatbox pa-5 bg-buttonBg">
        <v-btn
          block
          size="x-large"
          color="background"
          @click="
            anotherPage(
              'https://api.whatsapp.com/send?phone=2349038146200&text=Hi'
            )
          "
        >
          <p class="mr-4">Whatsapp</p>
          <v-icon icon="mdi-whatsapp" size="large" class="ml-5"></v-icon>
        </v-btn>
        <v-btn
          block
          size="x-large"
          class="my-4"
          color="background"
          @click="anotherPage('https://twitter.com/godswill_anwuli')"
        >
          <p class="mr-5 pr-5">Twitter</p>
          <v-icon icon="mdi-twitter" size="large" class="ml-5"></v-icon>
        </v-btn>
        <v-btn
          block
          size="x-large"
          color="background"
          @click="anotherPage('mailto:godswillanwuli@email.com')"
        >
          <p class="mr-4">send mail</p>
          <v-icon icon="mdi-gmail" size="large" class="ml-5"></v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show_mail_modal: false,
      loading: false,
    };
  },
  methods: {
    anotherPage(value) {
      window.location.href = value;
    },
  },
};
</script>

<style></style>
