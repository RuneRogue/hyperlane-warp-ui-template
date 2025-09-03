import { ChainMap, ChainMetadata, ExplorerFamily } from '@hyperlane-xyz/sdk';
import { ProtocolType } from '@hyperlane-xyz/utils';

// A map of chain names to ChainMetadata
// Chains can be defined here, in chains.json, or in chains.yaml
// Chains already in the SDK need not be included here unless you want to override some fields
// Schema here: https://github.com/hyperlane-xyz/hyperlane-monorepo/blob/main/typescript/sdk/src/metadata/chainMetadataTypes.ts
export const chains: ChainMap<ChainMetadata & { mailbox?: Address }> = {
  blockx: {
    protocol: ProtocolType.Ethereum,
    chainId: 19191,
    domainId: 19191,
    name: 'blockx',
    displayName: 'BlockX',
    nativeToken: { name: 'BlockX', symbol: 'BCX', decimals: 18 },
    rpcUrls: [{ http: 'https://web3.blockxnet.com' }],
    blockExplorers: [
      {
        name: 'BlockX Explorer',
        url: 'https://explorer.blockxnet.com',
        apiUrl: 'https://api.blockxnet.com',
        family: ExplorerFamily.Blockscout,
      },
    ],
    blocks: {
      confirmations: 3,
      reorgPeriod: 'finalized',
      estimateBlockTime: 1,
    },
    logoURI: '/logos/logo.svg',
  },
  // mycustomchain: {
  //   protocol: ProtocolType.Ethereum,
  //   chainId: 123123,
  //   domainId: 123123,
  //   name: 'mycustomchain',
  //   displayName: 'My Chain',
  //   nativeToken: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  //   rpcUrls: [{ http: 'https://mycustomchain-rpc.com' }],
  //   blockExplorers: [
  //     {
  //       name: 'MyCustomScan',
  //       url: 'https://mycustomchain-scan.com',
  //       apiUrl: 'https://api.mycustomchain-scan.com/api',
  //       family: ExplorerFamily.Etherscan,
  //     },
  //   ],
  //   blocks: {
  //     confirmations: 1,
  //     reorgPeriod: 1,
  //     estimateBlockTime: 10,
  //   },
  //   logoURI: '/logo.svg',
  // },
};

// rent account payment for (mostly for) SVM chains added on top of IGP,
// not exact but should be pretty close to actual payment
export const chainsRentEstimate: ChainMap<bigint> = {
  eclipsemainnet: BigInt(Math.round(0.00004019 * 10 ** 9)),
  solanamainnet: BigInt(Math.round(0.00411336 * 10 ** 9)),
  sonicsvm: BigInt(Math.round(0.00411336 * 10 ** 9)),
  soon: BigInt(Math.round(0.00000355 * 10 ** 9)),
};
