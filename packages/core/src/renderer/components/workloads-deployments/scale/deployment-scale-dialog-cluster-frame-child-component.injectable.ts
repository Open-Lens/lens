/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { computed } from "mobx";
import { DeploymentScaleDialog } from "./dialog";
import { clusterFrameChildComponentInjectionToken } from "../../../frames/cluster-frame/cluster-frame-child-component-injection-token";

const deploymentScaleDialogClusterFrameChildComponentInjectable = getInjectable({
  id: "deployment-scale-dialog-cluster-frame-child-component",

  instantiate: () => ({
    id: "deployment-scale-dialog",
    shouldRender: computed(() => true),
    Component: DeploymentScaleDialog,
  }),

  injectionToken: clusterFrameChildComponentInjectionToken,
});

export default deploymentScaleDialogClusterFrameChildComponentInjectable;
