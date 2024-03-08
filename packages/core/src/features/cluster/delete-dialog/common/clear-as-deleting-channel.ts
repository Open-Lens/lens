/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { ClusterId } from "../../../../common/cluster-types";
import { getRequestChannel } from "@openlens/messaging";

export const clearClusterAsDeletingChannel = getRequestChannel<ClusterId, void>(
  "clear-cluster-as-deleting",
);
