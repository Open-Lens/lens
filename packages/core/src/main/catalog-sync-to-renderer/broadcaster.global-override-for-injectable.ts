/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { debounce } from "lodash";
import { getGlobalOverride } from "@openlens/test-utils";
import catalogSyncBroadcasterInjectable from "./broadcaster.injectable";

export default getGlobalOverride(catalogSyncBroadcasterInjectable, () => debounce(() => {}));
