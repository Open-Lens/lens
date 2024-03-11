/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverrideForFunction } from "@openlens/test-utils";
import broadcastMessageInjectable from "./broadcast-message.injectable";

export default getGlobalOverrideForFunction(broadcastMessageInjectable);
