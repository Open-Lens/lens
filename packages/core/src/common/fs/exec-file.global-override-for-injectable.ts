/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverrideForFunction } from "@openlens/test-utils";
import execFileInjectable from "./exec-file.injectable";

export default getGlobalOverrideForFunction(execFileInjectable);
