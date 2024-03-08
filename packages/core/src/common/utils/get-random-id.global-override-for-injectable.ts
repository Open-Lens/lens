/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@openlens/test-utils";
import getRandomIdInjectable from "./get-random-id.injectable";

export default getGlobalOverride(getRandomIdInjectable, () => () => "some-irrelevant-random-id");
