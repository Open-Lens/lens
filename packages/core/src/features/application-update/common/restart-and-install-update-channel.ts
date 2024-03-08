/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { MessageChannel } from "@openlens/messaging";

export type RestartAndInstallUpdateChannel = MessageChannel<void>;

export const restartAndInstallUpdateChannel: RestartAndInstallUpdateChannel = {
  id: "restart-and-install-update-channel",
};
