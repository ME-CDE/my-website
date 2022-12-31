// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

const dark = {
  dark: true,
  colors:{
    nav:"#0d1321",
    background:"#030713",
    text:"#f0f2fa",
    buttonBg:"#111b33",
    buttonText:"#f0f2fa",
    blue:"#f0f2fa",
    mode:"#111b33",
    loader:"#f0f2fa",
    side:"#0d1321"
  }
}

const light = {
  dark: false,
  colors:{
    nav:"#e0e2ed",
    background:"#f0f2fa",
    text:"#030713",
    buttonBg:"#fff",
    buttonText:"#111b33",
    blue:"#2196F3",
    mode:"#fff",
    loader:"#f0f2fa",
    side:"#fff"
  }
}

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      dark,
      light
    },
  },
});
