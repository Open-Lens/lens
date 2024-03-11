/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { IconProps } from "../icon";
import type React from "react";
import type { PageTarget } from "../../routes/page-registration";
import type { IComputedValue } from "mobx";
import type { StrictReactNode } from "@openlens/utilities";

export interface ClusterPageMenuRegistration {
  id?: string;
  parentId?: string;
  target?: PageTarget;
  title: StrictReactNode;
  components: ClusterPageMenuComponents;
  visible?: IComputedValue<boolean>;
  orderNumber?: number;
}

export interface ClusterPageMenuComponents {
  Icon: React.ComponentType<IconProps>;
}
