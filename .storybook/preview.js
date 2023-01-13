import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.css'

initialize({
  serviceWorker: {
    url: '/mockServiceWorker.js'
  }
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [mswDecorator];