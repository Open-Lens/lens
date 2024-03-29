/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@openlens/test-utils";
import computeShellEnvironmentInjectable from "./compute-shell-environment.injectable";

export default getGlobalOverride(computeShellEnvironmentInjectable, () => async () => ({
  callWasSuccessful: true,
}));
