/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getMessageChannelListenerInjectable } from "@openlens/messaging";
import { rootFrameHasRenderedChannel } from "../../../../common/root-frame/root-frame-rendered-channel";
import { runManyFor } from "@openlens/run-many";
import { afterRootFrameIsReadyInjectionToken } from "../../runnable-tokens/phases";

const rootFrameRenderedChannelListenerInjectable = getMessageChannelListenerInjectable({
  id: "action",
  channel: rootFrameHasRenderedChannel,
  getHandler: (di) => {
    const runMany = runManyFor(di);

    return runMany(afterRootFrameIsReadyInjectionToken);
  },
});

export default rootFrameRenderedChannelListenerInjectable;
