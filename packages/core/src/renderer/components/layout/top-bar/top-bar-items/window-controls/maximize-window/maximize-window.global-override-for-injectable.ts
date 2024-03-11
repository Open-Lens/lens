/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import maximizeWindowInjectable from "./maximize-window.injectable";
import { getGlobalOverrideForFunction } from "@openlens/test-utils";

export default getGlobalOverrideForFunction(maximizeWindowInjectable);
