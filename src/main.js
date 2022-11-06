import * as components from '@/components'

import './style/global.css'

export const lib = {
  install: (Vue) => {
    Object
      .entries({ ...components })
      .forEach(([_, c]) => Vue.component(c.name, c))
  },
}

if (window) window.components = lib
