/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { EventEmitter } from "@openlens/event-emitter";
import type { AppEvent } from "./event-bus";

const appEventBusInjectable = getInjectable({
  id: "app-event-bus",
  instantiate: () => new EventEmitter<[AppEvent]>,
  decorable: false,
});

export default appEventBusInjectable;
