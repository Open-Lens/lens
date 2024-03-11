/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";
import type { IngressClassApi } from "../../../common/k8s-api/endpoints/ingress-class.api";
import type { IngressClass } from "@openlens/kube-object";

export class IngressClassStore extends KubeObjectStore<IngressClass, IngressClassApi> {
}
