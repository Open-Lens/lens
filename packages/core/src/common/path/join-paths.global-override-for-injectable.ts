/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import path from "path";
import { getGlobalOverride } from "@openlens/test-utils";
import joinPathsInjectable from "./join-paths.injectable";

export default getGlobalOverride(joinPathsInjectable, () => path.posix.join);
