/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { DerivedKubeApiOptions, KubeApiDependencies } from "../kube-api";
import { KubeApi } from "../kube-api";
import type { RuntimeClassData } from "@openlens/kube-object";
import { RuntimeClass } from "@openlens/kube-object";

export class RuntimeClassApi extends KubeApi<RuntimeClass, RuntimeClassData> {
  constructor(deps: KubeApiDependencies, opts: DerivedKubeApiOptions = {}) {
    super(deps, {
      objectConstructor: RuntimeClass,
      ...opts,
    });
  }
}
