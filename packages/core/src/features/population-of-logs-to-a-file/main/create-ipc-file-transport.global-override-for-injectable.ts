/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { transports } from "winston";
import { getGlobalOverride } from "@openlens/test-utils";
import { noop } from "@openlens/utilities";
import createIpcFileLoggerTransportInjectable from "./create-ipc-file-transport.injectable";

export default getGlobalOverride(
  createIpcFileLoggerTransportInjectable,
  () => () =>
    ({
      log: noop,
      close: noop,
    } as typeof transports.File),
);
