/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { rootFrameChildComponentInjectionToken } from "../../frames/root-frame/root-frame-child-component-injection-token";
import { computed } from "mobx";
import { ConfirmDialog } from "./confirm-dialog";

const confirmDialogRootFrameChildComponentInjectable = getInjectable({
  id: "confirm-dialog-root-frame-child-component",

  instantiate: () => ({
    id: "confirm-dialog",
    shouldRender: computed(() => true),
    Component: ConfirmDialog,
  }),

  injectionToken: rootFrameChildComponentInjectionToken,
});

export default confirmDialogRootFrameChildComponentInjectable;
