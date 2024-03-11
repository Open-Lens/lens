/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { applicationInformationToken } from "@openlens/application";
import { getInjectable } from "@ogre-tools/injectable";

const applicationDescriptionInjectable = getInjectable({
  id: "application-description",
  instantiate: (di) => di.inject(applicationInformationToken).description,
});

export default applicationDescriptionInjectable;
