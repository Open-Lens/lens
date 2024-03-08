/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { DerivedKubeApiOptions, KubeApiDependencies, NamespacedResourceDescriptor } from "../kube-api";
import { KubeApi } from "../kube-api";
import { ReplicationController } from "@openlens/kube-object";
import type { Scale } from "@openlens/kube-object";

export class ReplicationControllerApi extends KubeApi<ReplicationController> {
  constructor(deps: KubeApiDependencies, opts?: DerivedKubeApiOptions) {
    super(deps, {
      ...opts ?? {},
      objectConstructor: ReplicationController,
    });
  }

  protected getScaleApiUrl(params: NamespacedResourceDescriptor) {
    return `${this.formatUrlForNotListing(params)}/scale`;
  }

  getScale(params: NamespacedResourceDescriptor): Promise<Scale> {
    return this.request.get(this.getScaleApiUrl(params));
  }

  scale(params: NamespacedResourceDescriptor, replicas: number): Promise<Scale> {
    return this.scaleResource(params, { spec: { replicas }});
  }
}
