import { bundledExtensionInjectionToken } from "@openlens/legacy-extensions";
import { getInjectable } from "@ogre-tools/injectable";
import exampleBundledExtensionManifest from "@openlens/legacy-extension-example/package.json";

const exampleBundledExtensionInjectable = getInjectable({
  id: "example-bundled-extension",
  instantiate: (di) => ({
    manifest: exampleBundledExtensionManifest,
    /**
     * Inline `require` is needed as to delay the loading and execution of the JS file until it is needed.
     *
     * Futhermore there might be code that runs "during load" and shouldn't be executed until everything is
     * setup for the extensions (ie globals).
     */
    main: () => require("@openlens/legacy-extension-example/main").default,
    renderer: () => require("@openlens/legacy-extension-example/renderer").default,
  }),
  injectionToken: bundledExtensionInjectionToken,
});

export default exampleBundledExtensionInjectable;
