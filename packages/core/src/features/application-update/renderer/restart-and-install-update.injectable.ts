/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { restartAndInstallUpdateChannel } from "../common/restart-and-install-update-channel";
import { sendMessageToChannelInjectionToken } from "@openlens/messaging";

const restartAndInstallUpdateInjectable = getInjectable({
  id: "restart-and-install-update",

  instantiate: (di) => {
    const messageToChannel = di.inject(sendMessageToChannelInjectionToken);

    return () => {
      messageToChannel(restartAndInstallUpdateChannel);
    };
  },
});

export default restartAndInstallUpdateInjectable;
