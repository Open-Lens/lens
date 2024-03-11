import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { applicationFeature } from "@openlens/application";
import { getFeature } from "@openlens/feature-core";

export const messagingFeature = getFeature({
  id: "messaging",

  dependencies: [applicationFeature],

  register: (di) => {
    autoRegister({
      di,
      targetModule: module,

      getRequireContexts: () => [require.context("./", true, /\.injectable\.(ts|tsx)$/)],
    });
  },
});
