/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";

const storageSaveDelayInjectable = getInjectable({
  id: "storage-save-delay",
  instantiate: () => 250,
});

export default storageSaveDelayInjectable;