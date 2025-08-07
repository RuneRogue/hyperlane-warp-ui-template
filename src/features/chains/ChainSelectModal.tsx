import { ChainMetadata } from '@hyperlane-xyz/sdk';
import { ChainSearchMenu, ChainSearchMenuProps, Modal } from '@hyperlane-xyz/widgets';
import { config } from '../../consts/config';
import { useStore } from '../store';

export function ChainSelectListModal({
  isOpen,
  close,
  onSelect,
  customListItemField,
  showChainDetails,
  chainFilter,
}: {
  isOpen: boolean;
  close: () => void;
  onSelect: (chain: ChainName) => void;
  customListItemField?: ChainSearchMenuProps['customListItemField'];
  showChainDetails?: ChainSearchMenuProps['showChainDetails'];
  chainFilter?: Set<string>;
}) {
  const { chainMetadata, chainMetadataOverrides, setChainMetadataOverrides } = useStore((s) => ({
    chainMetadata: s.chainMetadata,
    chainMetadataOverrides: s.chainMetadataOverrides,
    setChainMetadataOverrides: s.setChainMetadataOverrides,
  }));

  // Filter chains if chainFilter is provided
  const filteredChainMetadata = chainFilter 
    ? Object.fromEntries(
        Object.entries(chainMetadata).filter(([chainName]) => chainFilter.has(chainName))
      )
    : chainMetadata;

  const onSelectChain = (chain: ChainMetadata) => {
    onSelect(chain.name);
    close();
  };

  return (
    <Modal isOpen={isOpen} close={close} panelClassname="p-4 sm:p-5 max-w-lg min-h-[40vh]">
      <ChainSearchMenu
        chainMetadata={filteredChainMetadata}
        onClickChain={onSelectChain}
        overrideChainMetadata={chainMetadataOverrides}
        onChangeOverrideMetadata={setChainMetadataOverrides}
        customListItemField={customListItemField}
        defaultSortField="custom"
        showChainDetails={showChainDetails}
        shouldDisableChains={config.shouldDisableChains}
        showAddChainButton={config.showAddChainButton}
      />
    </Modal>
  );
}
