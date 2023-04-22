import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: 'ur8bip',
  e2e: {
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
