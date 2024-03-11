/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import openAppContextMenuInjectable from "./open-app-context-menu.injectable";
import { getGlobalOverrideForFunction } from "@openlens/test-utils";

export default getGlobalOverrideForFunction(openAppContextMenuInjectable);
