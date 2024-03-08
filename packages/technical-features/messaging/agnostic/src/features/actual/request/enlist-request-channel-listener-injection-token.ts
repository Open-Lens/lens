import type { Disposer } from "@openlens/utilities/index";
import { getInjectionToken } from "@ogre-tools/injectable";

import type { RequestChannel, RequestChannelListener } from "./request-channel-listener-injection-token";

export type EnlistRequestChannelListener = <Request, Response>(
  listener: RequestChannelListener<RequestChannel<Request, Response>>,
) => Disposer;

export const enlistRequestChannelListenerInjectionToken = getInjectionToken<EnlistRequestChannelListener>({
  id: "listening-to-a-request-channel",
});
