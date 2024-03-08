/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { applicationInformationToken } from "@openlens/application";
import { getInjectable } from "@ogre-tools/injectable";

const contentSecurityPolicyInjectable = getInjectable({
  id: "content-security-policy",
  instantiate: (di) => di.inject(applicationInformationToken).contentSecurityPolicy,
});

export default contentSecurityPolicyInjectable;
