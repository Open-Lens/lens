/**
 * Copyright (c) OpenLens Maintainers. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */

import React, { ReactNode } from "react";
import { isObject } from "./type-narrowing";

// ref: https://changelog.com/posts/the-react-reactnode-type-is-a-black-hole

export type StrictReactFragment =
  | {
      key?: string | number | null;
      ref?: null;
      props?: {
        children?: StrictReactNode;
      };
    };

export type StrictReactNode = ReactNode;

export function isReactNode(node: unknown): node is StrictReactNode {
  return (isObject(node) && React.isValidElement(node))
    || Array.isArray(node) && node.every(isReactNode)
    || node == null
    || typeof node !== "object";
}
