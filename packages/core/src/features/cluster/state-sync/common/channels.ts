/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { ClusterId, ClusterState } from "../../../../common/cluster-types";
import type { MessageChannel, RequestChannel } from "@openlens/messaging";

export interface ClusterStateSync {
  clusterId: ClusterId;
  state: ClusterState;
}

export const clusterStateSyncChannel: MessageChannel<ClusterStateSync> = {
  id: "cluster-state-sync",
};

export const initialClusterStatesChannel: RequestChannel<void, ClusterStateSync[]> = {
  id: "initial-cluster-state-sync",
};
