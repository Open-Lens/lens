/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getMessageChannelListenerInjectable } from "@openlens/messaging";
import { reloadPageChannel } from "../common/channel";

const reloadPageChannelListenerInjectable = getMessageChannelListenerInjectable({
  id: "handler",
  channel: reloadPageChannel,
  getHandler: () => () => location.reload(),
  causesSideEffects: true,
});

export default reloadPageChannelListenerInjectable;
