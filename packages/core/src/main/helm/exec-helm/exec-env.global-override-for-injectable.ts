/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { computed } from "mobx";
import { getGlobalOverride } from "@openlens/test-utils";
import execHelmEnvInjectable from "./exec-env.injectable";

export default getGlobalOverride(execHelmEnvInjectable, () => computed(() => ({})));
