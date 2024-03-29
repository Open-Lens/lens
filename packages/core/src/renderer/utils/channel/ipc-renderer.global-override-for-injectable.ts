/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { IpcRenderer } from "electron";
import ipcRendererInjectable from "./ipc-renderer.injectable";
import { getGlobalOverride } from "@openlens/test-utils";

export default getGlobalOverride(ipcRendererInjectable, () => ({
  invoke: () => {},
  on: () => {},
}) as unknown as IpcRenderer);
