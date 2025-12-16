import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Blockx Hyperbridge';
export const APP_DESCRIPTION =
  'A fast and secure cross-chain bridge enabling seamless transfers of assets between BlockX and major blockchain networks.';
export const APP_URL = 'hyperbridge.blockxnet.com';
export const BRAND_COLOR = Color.primary['500'];
export const BACKGROUND_COLOR = Color.primary['500'];
export const BACKGROUND_IMAGE = 'url(/backgrounds/main.svg)';
