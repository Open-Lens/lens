/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { computed } from "mobx";
import { observableHistoryInjectionToken } from "@openlens/routing";

const currentPathInjectable = getInjectable({
  id: "current-path",

  instantiate: (di) => {
    const observableHistory = di.inject(observableHistoryInjectionToken);

    return computed(() => observableHistory.location.pathname);
  },
});

export default currentPathInjectable;
