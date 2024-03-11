/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import type { SelfSignedCert } from "selfsigned";
import { getRequestChannel } from "@openlens/messaging";

export const lensProxyCertificateChannel = getRequestChannel<void, SelfSignedCert>("request-lens-proxy-certificate");
