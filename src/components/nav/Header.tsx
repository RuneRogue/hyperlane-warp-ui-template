import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';
import ProjectLogo from '/public/logos/ProjectLogo.svg';

export function Header() {
  return (
    <header className="w-full px-2 pb-2 pt-3 sm:px-6 lg:px-12">
      <div className="flex items-start justify-between">
        <Link href="/" className="flex items-center gap-3 py-2">
          <div className="bg-white rounded-lg p-2 shadow-md">
            <Image 
              src={ProjectLogo} 
              width={160} 
              alt="BlockX" 
              className="ml-1 mt-0.5 hidden sm:block" 
            />
          </div>
          {/* Hyperbridge branding with beta tag */}
          <div className="hidden sm:flex items-center gap-3">
            <h1
              style={{
                fontFamily: '"Space Grotesk", "Inter", sans-serif',
                fontSize: '42px',
                fontWeight: '700',
                color: '#FFFFFF',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 20px rgba(255, 255, 255, 0.3)',
              }}
            >
              Hyperbridge
            </h1>
            <span 
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                fontSize: '13px',
                fontWeight: '700',
                padding: '6px 14px',
                background: 'linear-gradient(135deg, #FFD700 0%, #FF8C00 100%)',
                color: '#000000',
                letterSpacing: '2px',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(255, 140, 0, 0.5)',
              }}
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
