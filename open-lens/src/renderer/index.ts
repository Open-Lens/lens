import "@openlens/core/styles";
import "@openlens/button/styles";
import "@openlens/error-boundary/styles";
import "@openlens/tooltip/styles";
import "@openlens/resizing-anchor/styles";

import { runInAction } from "mobx";
import {
  rendererExtensionApi as Renderer,
  commonExtensionApi as Common,
  registerLensCore,
  metricsFeature,
} from "@openlens/core/renderer";
import { autoRegister } from "@ogre-tools/injectable-extension-for-auto-registration";
import { registerFeature } from "@openlens/feature-core";
import {
  applicationFeature,
  startApplicationInjectionToken
} from "@openlens/application";
import { createContainer } from "@ogre-tools/injectable";
import { registerMobX } from "@ogre-tools/injectable-extension-for-mobx";
import { registerInjectableReact } from "@ogre-tools/injectable-react";
import { messagingFeatureForRenderer } from "@openlens/messaging-for-renderer";
import { keyboardShortcutsFeature } from "@openlens/keyboard-shortcuts";
import { reactApplicationFeature } from "@openlens/react-application";
import { routingFeature } from "@openlens/routing";
import { loggerFeature } from "@openlens/logger";

const environment = "renderer";

const di = createContainer(environment, {
  detectCycles: false,
});

runInAction(() => {
  registerMobX(di);
  registerInjectableReact(di);
  registerLensCore(di, environment);

  registerFeature(
    di,
    loggerFeature,
  );

  registerFeature(
    di,
    applicationFeature,
    messagingFeatureForRenderer,
    keyboardShortcutsFeature,
    reactApplicationFeature,
    routingFeature,
    metricsFeature,
  );

  autoRegister({
    di,
    targetModule: module,
    getRequireContexts: () => [
      require.context("./", true, CONTEXT_MATCHER_FOR_NON_FEATURES),
      require.context("../common", true, CONTEXT_MATCHER_FOR_NON_FEATURES),
    ],
  });
});

const startApplication = di.inject(startApplicationInjectionToken);

startApplication();

export {
  React,
  ReactDOM,
  ReactRouter,
  ReactRouterDom,
  Mobx,
  MobxReact,
} from "@openlens/core/renderer";

export const LensExtensions = {
  Renderer,
  Common,
};
