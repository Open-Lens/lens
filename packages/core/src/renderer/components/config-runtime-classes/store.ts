/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { RuntimeClassApi } from "../../../common/k8s-api/endpoints/runtime-class.api";
import type { RuntimeClass } from "@openlens/kube-object";

export class RuntimeClassStore extends KubeObjectStore<RuntimeClass, RuntimeClassApi> {
}
