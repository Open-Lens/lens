/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

export interface WelcomeMenuRegistration {
  title: string | (() => string);
  icon: string;
  click: () => void | Promise<void>;
}
