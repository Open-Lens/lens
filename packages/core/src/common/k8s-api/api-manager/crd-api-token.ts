/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getInjectionToken } from "@ogre-tools/injectable";
import type { KubeApi } from "../kube-api";

export const customResourceDefinitionApiInjectionToken = getInjectionToken<KubeApi>({
  id: "custom-resource-definition-api-token",
});
