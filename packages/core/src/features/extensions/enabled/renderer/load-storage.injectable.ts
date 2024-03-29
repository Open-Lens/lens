/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { beforeFrameStartsSecondInjectionToken } from "../../../../renderer/before-frame-starts/tokens";
import enabledExtensionsPersistentStorageInjectable from "../common/storage.injectable";

const loadEnabledExtensionsStorageInjectable = getInjectable({
  id: "load-enabled-extensions-storage",
  instantiate: (di) => ({
    run: () => {
      const storage = di.inject(enabledExtensionsPersistentStorageInjectable);

      storage.loadAndStartSyncing();
    },
  }),
  injectionToken: beforeFrameStartsSecondInjectionToken,
});

export default loadEnabledExtensionsStorageInjectable;
