/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import checkForPlatformUpdatesInjectable from "./check-for-platform-updates.injectable";
import { getGlobalOverrideForFunction } from "@openlens/test-utils";

export default getGlobalOverrideForFunction(checkForPlatformUpdatesInjectable);
