/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { identity } from "lodash/fp";
import { getGlobalOverride } from "@openlens/test-utils";
import telemetryDecoratorInjectable from "./telemetry-decorator.injectable";

export default getGlobalOverride(telemetryDecoratorInjectable, () => ({
  decorate: identity,
}));
