/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import populateApplicationMenuInjectable from "./populate-application-menu.injectable";
import { getGlobalOverride } from "@openlens/test-utils";

export default getGlobalOverride(populateApplicationMenuInjectable, () => () => {});
