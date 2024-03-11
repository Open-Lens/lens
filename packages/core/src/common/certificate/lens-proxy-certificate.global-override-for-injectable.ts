/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import { getGlobalOverride } from "@openlens/test-utils";
import lensProxyCertificateInjectable from "./lens-proxy-certificate.injectable";

export default getGlobalOverride(lensProxyCertificateInjectable, () => {
  return {
    get: () => ({
      public: "<public-data>",
      private: "<private-data>",
      cert: "<ca-data>",
    }),
    set: () => {},
  };
});

