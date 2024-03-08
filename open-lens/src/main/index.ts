import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { runInAction } from "mobx";
import {
  mainExtensionApi as Main,
  commonExtensionApi as Common,
  registerLensCore,
} from "@openlens/core/main";
import { createContainer } from "@ogre-tools/injectable";
import { registerMobX } from "@ogre-tools/injectable-extension-for-mobx";
import { registerFeature } from "@openlens/feature-core";
import { applicationFeature, startApplicationInjectionToken } from '@openlens/application'
import { applicationFeatureForElectronMain } from '@openlens/application-for-electron-main'
import { messagingFeatureForMain } from "@openlens/messaging-for-main";
import { loggerFeature } from "@openlens/logger";

const environment = "main";

const di = createContainer(environment, {
  detectCycles: false,
});

registerMobX(di);

runInAction(() => {
  registerLensCore(di, environment);

  registerFeature(di,
      loggerFeature,
  );

  registerFeature(di,
      applicationFeature,
      applicationFeatureForElectronMain,
      messagingFeatureForMain,
  );

  try {
    autoRegister({
      di,
      targetModule: module,
      getRequireContexts: () => [
        require.context("./", true, CONTEXT_MATCHER_FOR_NON_FEATURES),
        require.context("../common", true, CONTEXT_MATCHER_FOR_NON_FEATURES),
      ],
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

const startApplication = di.inject(startApplicationInjectionToken);

startApplication().catch((error) => {
  console.error(error);
  process.exit(1);
})

export {
  Mobx,
  Pty,
} from "@openlens/core/main";

export const LensExtensions = {
  Main,
  Common,
}
