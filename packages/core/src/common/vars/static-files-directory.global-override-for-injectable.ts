/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getGlobalOverride } from "@openlens/test-utils";
import staticFilesDirectoryInjectable from "./static-files-directory.injectable";

export default getGlobalOverride(staticFilesDirectoryInjectable, () => "/some-static-directory");
