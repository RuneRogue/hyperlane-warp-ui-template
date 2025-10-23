import { Head, Html, Main, NextScript } from 'next/document';
import { APP_DESCRIPTION, APP_NAME, APP_URL, BRAND_COLOR, MAIN_FONT } from '../consts/app';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color={BRAND_COLOR} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* Google Fonts for Hyperbridge branding */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Space+Grotesk:wght@500;600;700&family=Inter:wght@700;800;900&display=swap" 
          rel="stylesheet" 
        />

        <meta name="application-name" content={APP_NAME} />
        <meta name="keywords" content={APP_NAME + ' Hyperlane Token Bridge Interchain App'} />
        <meta name="description" content={APP_DESCRIPTION} />

        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-title" content={APP_NAME} />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta property="og:url" content={APP_URL} />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${APP_URL}/logo.png`} />
        <meta property="og:description" content={APP_DESCRIPTION} />
      </Head>
      <body className={`${MAIN_FONT.variable} font-sans text-black`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
