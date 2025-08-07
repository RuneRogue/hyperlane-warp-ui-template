import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

// A list of Warp Route token configs
// These configs will be merged with the warp routes in the configured registry
// The input here is typically the output of the Hyperlane CLI warp deploy command
export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      // The ChainName of the token
      chainName: "polygon",
      // See https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/token/TokenStandard.ts
      standard: TokenStandard.EvmHypCollateral,
      // The token metadata (decimals, symbol, name)
      decimals: 18,
      symbol: "TT",
      name: "Test Token",
      // The router address
      addressOrDenom: "0xDb151a44c156E4aB98AaB6b19F732aaA9FeBE857",
      // The address of the underlying collateral token
      collateralAddressOrDenom: "0x5a45e4cf479dedd99940c2e0486dc8038561a875",
      // A path to a token logo image
      logoURI: '/logos/logo.svg',
      // The list of tokens this one is connected to
      connections: [{ token: "ethereum|blockx|0x08A6097Cf4b3D7f140B7ef7947CEd9D25f327612" }],
    },
    {
      chainName: "blockx",
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: "TT",
      name: "Test Token",
      addressOrDenom: "0x08A6097Cf4b3D7f140B7ef7947CEd9D25f327612",
      logoURI: '/logos/logo.svg',
      connections: [{ token: "ethereum|polygon|0xDb151a44c156E4aB98AaB6b19F732aaA9FeBE857" }],
    },
    {
      chainName: "polygon",
      standard: TokenStandard.EvmHypCollateral,
      decimals: 18,
      symbol: "TT2",
      name: "Test Token 2",
      addressOrDenom: "0x16Ef5bBF7454e6dc577bE9c299bd19FA5D101823",
      collateralAddressOrDenom: "0xa8e284c55140481c4c2803d90f345a6bda00e705",
      logoURI: '/logos/logo.svg',
      connections: [{ token: "ethereum|blockx|0x1Fc7eAED413845037E94C1Cc7b96833b68BE676a" }],
    },
    {
      chainName: "blockx",
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 18,
      symbol: "TT2",
      name: "Test Token 2",
      addressOrDenom: "0x1Fc7eAED413845037E94C1Cc7b96833b68BE676a",
      logoURI: '/logos/logo.svg',
      connections: [{ token: "ethereum|polygon|0x16Ef5bBF7454e6dc577bE9c299bd19FA5D101823" }],
    },
  ],
  options: {},
};
