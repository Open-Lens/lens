/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { LimitRangeApi } from "../../../common/k8s-api/endpoints/limit-range.api";
import type { LimitRange } from "@openlens/kube-object";

export class LimitRangeStore extends KubeObjectStore<LimitRange, LimitRangeApi> {
}
