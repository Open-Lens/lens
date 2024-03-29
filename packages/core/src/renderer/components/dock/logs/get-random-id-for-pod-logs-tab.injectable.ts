/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import getRandomIdInjectable from "../../../../common/utils/get-random-id.injectable";

const getRandomIdForPodLogsTabInjectable = getInjectable({
  id: "get-random-id-for-pod-logs-tab",
  instantiate: (di) => di.inject(getRandomIdInjectable),
});

export default getRandomIdForPodLogsTabInjectable;
