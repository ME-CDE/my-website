<template>
  <v-container class="max-w-xl">
    <div class="w-100 section-2">
      <h1 class="text-h4 font-weight-bold mb-4 ml-2" id="projects">
        My Projects
      </h1>
      <div class="project-row mb-5">
        <div
          class="project-cols elevation-3"
          @click="anotherPage('https://marvelous-fudge-cb22a5.netlify.app')"
        >
          <div class="project-img bg-buttonBg">
            <img
              src="https://res.cloudinary.com/dqfcqbigt/image/upload/c_scale,h_390/v1672338754/my-site-project/tradexpress_k4jzto.png"
              alt=""
              @load="loading1 = false"
            />
          </div>
          <v-btn class="go-to text-white" variant="text"> 
            <v-icon icon="mdi-loading text-loader" id="loading" v-if="loading1"></v-icon>
            <span v-else>
              TRADEXPRESS
            </span>
          </v-btn>
        </div>
        <div
          class="project-cols elevation-3 bg-buttonBg"
          @click="anotherPage('https://lustrous-sherbet-395d94.netlify.app')"
        >
          <div class="project-img">
            <img
              src="https://res.cloudinary.com/dqfcqbigt/image/upload/c_scale,h_390/v1672338754/my-site-project/todo_ch0o9j.png"
              alt=""
              @load="loading2 = false"
            />
          </div>
          <v-btn class="go-to text-h6 text-white" variant="text">
            <v-icon icon="mdi-loading text-loader" id="loading" v-if="loading2"></v-icon>
            <span v-else>
              TODO
            </span>
          </v-btn>
        </div>
        <div
          class="project-cols elevation-3 bg-buttonBg"
          @click="anotherPage('https://friendly-cranachan-af531e.netlify.app')"
        >
          <div class="project-img">
            <img
              src="https://res.cloudinary.com/dqfcqbigt/image/upload/c_scale,h_390/v1672338754/my-site-project/flames_u9budz.png"
              alt=""
              @load="loading3 = false"
            />
          </div>
          <v-btn class="go-to text-h6 text-white" variant="text">
            <v-icon icon="mdi-loading text-loader" id="loading" v-if="loading3"></v-icon>
            <span v-else>
              FLAMES
            </span>
          </v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      loading1:true,
      loading2:true,
      loading3:true
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
