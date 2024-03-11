# @openlens/keyboard-shortcuts

This Feature enables keyboard shortcuts in Lens

# Usage

```bash
$ npm install @openlens/keyboard-shortcuts
```

```typescript
import { keyboardShortcutsFeature } from "@openlens/keyboard-shortcuts";
import { registerFeature } from "@openlens/feature-core";
import { createContainer } from "@ogre-tools/injectable";

const di = createContainer("some-container");

registerFeature(di, keyboardShortcutsFeature);
```

## Extendability
