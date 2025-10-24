import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import ProjectLogo from '/public/logos/ProjectLogo.svg';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 py-2">
          {/* Logo - smaller on mobile */}
          <div className="bg-white rounded-lg p-1.5 sm:p-2 shadow-md">
            <Image 
              src={ProjectLogo} 
              width={100}
              height={30}
              alt="BlockX" 
              className="w-16 sm:w-32 md:w-40 ml-0.5 sm:ml-1 mt-0.5" 
            />
          </div>
          {/* Hyperbridge branding with beta tag - responsive sizing */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <h1
              style={{
                fontFamily: '"Space Grotesk", "Inter", sans-serif',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)',
              }}
              className="text-xl sm:text-3xl md:text-4xl lg:text-[42px]"
            >
              Hyperbridge
            </h1>
            <span 
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
                color: '#000000',
                letterSpacing: '2px',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(255, 140, 0, 0.5)',
              }}
              className="text-[9px] sm:text-xs md:text-[13px] px-2 py-1 sm:px-3 sm:py-1.5"
            >
              BETA
            </span>
          </div>
        </Link>
        <div className="flex flex-col items-end gap-2 md:flex-row-reverse md:items-start">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
