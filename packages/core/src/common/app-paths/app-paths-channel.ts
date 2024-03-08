/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import type { AppPaths } from "./app-path-injection-token";
import { getRequestChannel } from "@openlens/messaging";

export const appPathsChannel = getRequestChannel<void, AppPaths>("app-paths");

