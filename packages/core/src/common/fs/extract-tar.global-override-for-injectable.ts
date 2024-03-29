/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@openlens/test-utils";
import extractTarInjectable from "./extract-tar.injectable";

export default getGlobalOverride(extractTarInjectable, () => async () => {
  throw new Error("tried to extract a tar file without override");
});
