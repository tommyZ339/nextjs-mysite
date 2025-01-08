'use client';

import SideNav from '@/app/ui/sidenav';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:overflow-hidden bg-custom">
      <div className="w-full flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:p-0 md:overflow-y-auto max-h-fit">
        {children}
      </div>
      <footer className="flex gap-6 items-center justify-center mb-1">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mb-1"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          About me...
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mb-1"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Admin entry
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mb-1"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org（Thanks a lot, nextjs！）
        </a>
      </footer>
    </div>
  );
}
