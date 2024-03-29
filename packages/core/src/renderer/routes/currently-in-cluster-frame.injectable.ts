/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";

const currentlyInClusterFrameInjectable = getInjectable({
  id: "currently-in-cluster-frame",
  instantiate: () => !process.isMainFrame,
  causesSideEffects: true,
});

export default currentlyInClusterFrameInjectable;
