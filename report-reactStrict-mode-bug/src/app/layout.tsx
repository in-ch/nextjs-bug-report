import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './globals.css';
import Providers from '@utils/provider';
import { images } from '@constants/images';

export const metadata = {
  title: 'test',
  description: 'test.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <header className="fixed top-0 left-50 w-screen border-2 bg-white">
          <p className="justify-end h-16 flex items-center pr-9">Hello, world</p>
          <div className="fixed top-0 left-0 bg-slate-300 w-16 h-full pt-3 flex flex-col items-center">
            <Link href="/">
              <Image src={images.calendar} alt="neofect" width={40} height={30} />
            </Link>
          </div>
        </header>
        <div className="mt-16 ml-32">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
