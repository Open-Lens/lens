/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { MessageChannel } from "@openlens/messaging";

export const shellSyncFailedChannel: MessageChannel<string> = {
  id: "shell-sync-failed-channel",
};
