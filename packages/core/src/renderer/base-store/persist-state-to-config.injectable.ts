/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { persistStateToConfigInjectionToken } from "../../common/persistent-storage/save-to-file";
import { noop } from "@openlens/utilities";

const persistStateToConfigInjectable = getInjectable({
  id: "persist-state-to-config",
  instantiate: () => noop,
  injectionToken: persistStateToConfigInjectionToken,
});

export default persistStateToConfigInjectable;
