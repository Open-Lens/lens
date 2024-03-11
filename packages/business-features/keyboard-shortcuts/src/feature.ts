import { getFeature } from "@openlens/feature-core";
import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { reactApplicationFeature } from "@openlens/react-application";

export const keyboardShortcutsFeature = getFeature({
  id: "keyboard-shortcuts",

  register: (di) => {
    autoRegister({
      di,
      targetModule: module,
      getRequireContexts: () => [require.context("./", true, /\.injectable\.(ts|tsx)$/)],
    });
  },

  dependencies: [reactApplicationFeature],
});
