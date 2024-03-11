/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { createMemoryHistory } from "history";
import { getGlobalOverride } from "@openlens/test-utils";
import { historyInjectionToken } from "@openlens/routing";

export default getGlobalOverride(historyInjectionToken, () => createMemoryHistory());
