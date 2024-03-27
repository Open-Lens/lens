import { getInjectable, getInjectionToken } from "@ogre-tools/injectable";
import { createRoot } from "react-dom/client";
import type React from "react";

export type Render = (application: React.ReactPortal) => void;

export const renderInjectionToken = getInjectionToken<Render>({
  id: "render-injection-token",
});

const renderInjectable = getInjectable({
  id: "render",

  /* c8 ignore next */
  instantiate: () => (application) => {
    const { render } = createRoot(document.getElementById("app")!)
    return render(application)
  },

  causesSideEffects: true,

  injectionToken: renderInjectionToken,
});

export default renderInjectable;
