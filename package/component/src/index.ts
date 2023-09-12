import { App } from "vue";

import * as _components from "./components";

const components: { [key: string]: any } = _components;

export const install = (app: App) => {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    app.component(`D${key}`, component);
  });
};
