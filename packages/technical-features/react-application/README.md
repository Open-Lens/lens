# @openlens/react-application

# Usage

```bash
$ npm install @openlens/react-application
```

```typescript
import { reactApplicationFeature } from "@openlens/react-application";
import { registerFeature } from "@openlens/feature-core";
import { createContainer } from "@ogre-tools/injectable";

const di = createContainer("some-container");

registerFeature(di, reactApplicationRootFeature);
```

## Extendability
