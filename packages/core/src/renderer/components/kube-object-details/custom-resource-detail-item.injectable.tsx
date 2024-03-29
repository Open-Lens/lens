/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import { computed } from "mobx";
import React from "react";
import { CustomResourceDetails } from "../custom-resources";
import customResourceDefinitionStoreInjectable from "../custom-resources/definition.store.injectable";
import currentKubeObjectInDetailsInjectable from "./current-kube-object-in-details.injectable";
import { kubeObjectDetailItemInjectionToken } from "./kube-object-detail-items/kube-object-detail-item-injection-token";

const customResourceDetailItemInjectable = getInjectable({
  id: "custom-resource-detail-item",
  instantiate: (di) => {
    const customResourceDefinitionStore = di.inject(customResourceDefinitionStoreInjectable);
    const currentKubeObjectInDetails = di.inject(currentKubeObjectInDetailsInjectable);
    const currentCustomResourceDefinition = computed(() => {
      const { object } = currentKubeObjectInDetails.value.get() ?? {};

      if (!object) {
        return undefined;
      }

      return customResourceDefinitionStore.getByObject(object);
    });

    return {
      Component: ({ object }) => <CustomResourceDetails object={object} crd={currentCustomResourceDefinition.get()} />,
      enabled: computed(() => Boolean(currentCustomResourceDefinition.get())),
      orderNumber: 100,
    };
  },
  injectionToken: kubeObjectDetailItemInjectionToken,
});

export default customResourceDetailItemInjectable;
