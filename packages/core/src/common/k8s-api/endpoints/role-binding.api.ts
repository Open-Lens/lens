/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { RoleBindingData } from "@openlens/kube-object";
import { RoleBinding } from "@openlens/kube-object";
import type { DerivedKubeApiOptions, KubeApiDependencies } from "../kube-api";
import { KubeApi } from "../kube-api";


export class RoleBindingApi extends KubeApi<RoleBinding, RoleBindingData> {
  constructor(deps: KubeApiDependencies, opts: DerivedKubeApiOptions = {}) {
    super(deps, {
      ...opts,
      objectConstructor: RoleBinding,
    });
  }
}
