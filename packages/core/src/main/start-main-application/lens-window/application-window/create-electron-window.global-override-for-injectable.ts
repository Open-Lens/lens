/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getGlobalOverride } from "@openlens/test-utils";
import createElectronWindowInjectable from "./create-electron-window.injectable";

export default getGlobalOverride(createElectronWindowInjectable, () => () => ({
  loadFile: async () => {},
  loadUrl: async () => {},
  show: () => {},
  close: () => {},
  send: () => {},
  reload: () => {},
}));
