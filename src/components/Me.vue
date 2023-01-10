<template>
  <v-container class="max-w-xl">
    <div class="w-100 section-1">
      <div class="imgdiv">
        <img
          class="img bg-buttonBg rounded-circle elevation-12"
          src="/assets/myprofiepic.jpg"
        />
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
            @click="DownloadFile('GODSWILL-ANWULI-RESUME.PDF')"
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
    DownloadFile(fileName) {
      //Set the File URL.
      const url = "assets/" + fileName;

      //Create XMLHTTP Request.
      const req = new XMLHttpRequest();
      req.open("GET", url, true);
      req.responseType = "blob";
      req.onload = function () {
        //Convert the Byte Data to BLOB object.
        const blob = new Blob([req.response], {
          type: "application/octetstream",
        });

        //Check the Browser type and download the File.
        const isIE = false || !!document.documentMode;
        if (isIE) {
          window.navigator.msSaveBlob(blob, fileName);
        } else {
          const url = window.URL || window.webkitURL;
          const link = url.createObjectURL(blob);
          const a = document.createElement("a");
          a.setAttribute("download", fileName);
          a.setAttribute("href", link);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      };
      req.send();
    },
  },
};
</script>

<style></style>
