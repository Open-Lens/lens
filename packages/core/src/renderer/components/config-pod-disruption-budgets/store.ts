/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { PodDisruptionBudgetApi } from "../../../common/k8s-api/endpoints/pod-disruption-budget.api";
import type { PodDisruptionBudget } from "@openlens/kube-object";

export class PodDisruptionBudgetStore extends KubeObjectStore<PodDisruptionBudget, PodDisruptionBudgetApi> {
}
