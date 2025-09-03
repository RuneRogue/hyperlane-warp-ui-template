import { WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The main token configurations are now defined in warpRoutes.yaml
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    // Tokens are now defined in warpRoutes.yaml
    // This array can be used for additional tokens or overrides if needed
  ],
  options: {},
};
