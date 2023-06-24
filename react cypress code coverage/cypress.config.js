import { defineConfig } from "cypress";

import fn from '@cypress/code-coverage/task.js'
export default defineConfig({
  e2e: {
    baseUrl:'http://localhost:5173/',
    setupNodeEvents(on, config) {
      fn(on,config)
      return config
      // implement node event listeners here
    },
  },
});
