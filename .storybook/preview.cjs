import Vue from 'vue'
import { lib as components } from '../src/main'

import '../src/style/global.css'
Vue.use(components)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}