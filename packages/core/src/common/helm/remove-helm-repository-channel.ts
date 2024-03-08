/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { AsyncResult } from "@openlens/utilities";
import { getRequestChannel } from "@openlens/messaging";
import type { HelmRepo } from "./helm-repo";

export const removeHelmRepositoryChannel = getRequestChannel<
  HelmRepo,
  AsyncResult<void, string>
>("remove-helm-repository-channel");
