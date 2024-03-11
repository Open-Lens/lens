/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { ValidatingWebhookConfiguration } from "@openlens/kube-object";
import type { ValidatingWebhookConfigurationApi } from "../../../common/k8s-api/endpoints";
import { KubeObjectStore } from "../../../common/k8s-api/kube-object.store";

export class ValidatingWebhookConfigurationStore extends KubeObjectStore<ValidatingWebhookConfiguration, ValidatingWebhookConfigurationApi> {
}
