import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import ProjectLogo from '/public/logos/ProjectLogo.svg';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center gap-2 py-2 sm:gap-3">
          {/* Logo - smaller on mobile */}
          <div className="rounded-lg bg-white p-1.5 shadow-md sm:p-2">
            <Image
              src={ProjectLogo}
              width={100}
              height={30}
              alt="BlockX"
              className="ml-0.5 mt-0.5 w-16 sm:ml-1 sm:w-32 md:w-40"
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
              className="px-2 py-1 text-[9px] sm:px-3 sm:py-1.5 sm:text-xs md:text-[13px]"
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
