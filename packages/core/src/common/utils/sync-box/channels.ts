/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getMessageChannel, getRequestChannel } from "@openlens/messaging";

export const syncBoxChannel =
  getMessageChannel<{ id: string; value: any }>("sync-box-channel");

export const syncBoxInitialValueChannel = getRequestChannel<
  void,
  { id: string; value: any }[]
>("sync-box-initial-value-channel");
