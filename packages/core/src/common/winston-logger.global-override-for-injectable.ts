/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type winston from "winston";
import { getGlobalOverride } from "@openlens/test-utils";
import { noop } from "@openlens/utilities";
import { winstonLoggerInjectable } from "@openlens/logger";

export default getGlobalOverride(winstonLoggerInjectable, () => ({
  log: noop,
  add: noop,
  remove: noop,
  clear: noop,
  close: noop,

  warn: noop,
  debug: noop,
  error: noop,
  info: noop,
  silly: noop,
}) as winston.Logger);
