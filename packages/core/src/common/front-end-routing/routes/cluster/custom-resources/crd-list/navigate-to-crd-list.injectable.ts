/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import crdListRouteInjectable from "./crd-list-route.injectable";
import { navigateToRouteInjectionToken } from "../../../../navigate-to-route-injection-token";

const navigateToCrdListInjectable = getInjectable({
  id: "navigate-to-crd-list",

  instantiate: (di) => {
    const navigateToRoute = di.inject(navigateToRouteInjectionToken);
    const route = di.inject(crdListRouteInjectable);

    return () => navigateToRoute(route);
  },
});

export default navigateToCrdListInjectable;
