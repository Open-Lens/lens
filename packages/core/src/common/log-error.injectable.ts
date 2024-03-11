/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { loggerInjectionToken } from "@openlens/logger";

const logErrorInjectable = getInjectable({
  id: "log-error",
  instantiate: (di) => di.inject(loggerInjectionToken).error,
  decorable: false,
});

export default logErrorInjectable;
