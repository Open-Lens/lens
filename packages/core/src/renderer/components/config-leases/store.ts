/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { LeaseApi } from "../../../common/k8s-api/endpoints/lease.api";
import type { Lease } from "@openlens/kube-object";

export class LeaseStore extends KubeObjectStore<Lease, LeaseApi> {
}
