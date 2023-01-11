import { initialize, mswDecorator } from 'msw-storybook-addon';
import '../styles/globals.css'

initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
export const decorators = [
  (Story) => (
    <Story />
  ),
  mswDecorator,
];