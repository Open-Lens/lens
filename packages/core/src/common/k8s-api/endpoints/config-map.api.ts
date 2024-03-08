/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { ConfigMapData } from "@openlens/kube-object";
import { ConfigMap } from "@openlens/kube-object";
import type { DerivedKubeApiOptions, KubeApiDependencies } from "../kube-api";
import { KubeApi } from "../kube-api";

export class ConfigMapApi extends KubeApi<ConfigMap, ConfigMapData> {
  constructor(deps: KubeApiDependencies, opts?: DerivedKubeApiOptions) {
    super(deps, {
      objectConstructor: ConfigMap,
      ...opts ?? {},
    });
  }
}
