/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import configMapsRouteInjectable from "./config-maps-route.injectable";
import { navigateToRouteInjectionToken } from "../../../../navigate-to-route-injection-token";

const navigateToConfigMapsInjectable = getInjectable({
  id: "navigate-to-config-maps",

  instantiate: (di) => {
    const navigateToRoute = di.inject(navigateToRouteInjectionToken);
    const route = di.inject(configMapsRouteInjectable);

    return () => navigateToRoute(route);
  },
});

export default navigateToConfigMapsInjectable;
