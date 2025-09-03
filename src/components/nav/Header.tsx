import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import ProjectLogo from '/public/logos/ProjectLogo.svg';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center py-2">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <Image 
              src={ProjectLogo} 
              width={160} 
              alt="BlockX" 
              className="ml-1 mt-0.5 hidden sm:block" 
            />
          </div>
        </Link>
        <div className="flex flex-col items-end gap-2 md:flex-row-reverse md:items-start">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
