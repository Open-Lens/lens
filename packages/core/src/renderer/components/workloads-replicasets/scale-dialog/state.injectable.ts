/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { observable } from "mobx";
import type { ReplicaSet } from "@openlens/kube-object";

const replicaSetScaleDialogStateInjectable = getInjectable({
  id: "replica-set-scale-dialog-state",
  instantiate: () => observable.box<ReplicaSet | undefined>(),
});

export default replicaSetScaleDialogStateInjectable;