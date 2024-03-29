/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getRequestChannelListenerInjectable } from "@openlens/messaging";
import { deactivateClusterChannel } from "../common/channels";
import requestClusterDeactivationInjectable from "./request-deactivation.injectable";

const clusterDeactivationRequestChannelListenerInjectable = getRequestChannelListenerInjectable({
  id: "cluster-deactivation-request-channel-listener",
  channel: deactivateClusterChannel,
  getHandler: (di) => di.inject(requestClusterDeactivationInjectable),
});

export default clusterDeactivationRequestChannelListenerInjectable;
