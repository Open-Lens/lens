/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getMessageChannelListenerInjectable } from "@openlens/messaging";
import showErrorNotificationInjectable from "../../../renderer/components/notifications/show-error-notification.injectable";
import { shellSyncFailedChannel } from "../common/failure-channel";

const shellSyncFailureListenerInjectable = getMessageChannelListenerInjectable({
  id: "notification",
  channel: shellSyncFailedChannel,
  getHandler: (di) => {
    const showErrorNotification = di.inject(showErrorNotificationInjectable);

    return (errorMessage) => showErrorNotification(`Failed to sync shell environment: ${errorMessage}`);
  },
});

export default shellSyncFailureListenerInjectable;
