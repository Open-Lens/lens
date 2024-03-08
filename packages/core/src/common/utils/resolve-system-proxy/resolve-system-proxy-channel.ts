/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getRequestChannel } from "@openlens/messaging";

export const resolveSystemProxyChannel = getRequestChannel<string, string>(
  "resolve-system-proxy-channel",
);
