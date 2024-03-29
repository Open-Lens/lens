/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { NotificationsStore } from "./notifications.store";

const notificationsStoreInjectable = getInjectable({
  id: "notifications-store",
  instantiate: () => new NotificationsStore(),
});

export default notificationsStoreInjectable;
