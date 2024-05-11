import type { Metadata } from "next";
import { Marhey, Reem_Kufi } from "next/font/google";
import '@radix-ui/themes/styles.css';

import "./globals.css";
import { Theme } from '@radix-ui/themes';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';


const marhey = Marhey({ subsets: ["latin"],weight:'400' });

export const metadata: Metadata = {
  title: "الهلال",
  description: "مدونة عربية",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={marhey.className}>
      <AppRouterCacheProvider>
      <Theme
  appearance="light"
  accentColor="bronze"
  grayColor="gray"
  panelBackground="solid"
  scaling="100%"
  radius="small"
>
          {children}
          </Theme>
          </AppRouterCacheProvider>
        </body>
    </html>
  );
}
