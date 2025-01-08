import Image from 'next/image';
import { playwrite } from './ui/fonts';
import { SparklesIcon, MusicalNoteIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center items-center">
          <MusicalNoteIcon className="w-16 h-16 text-gray-300" />
        </div>
        <ol className="list-inside text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6" />
            <span className="font-bold">欢迎来到Tom的音乐记录所 </span>
            <code
              className={`${playwrite.className} bg-cyan/[.05] dark:bg-white/[.07] px-1 py-0.5 rounded`}
            >
              Tomspace
            </code>
            <span className="font-bold">.</span>
          </li>
          <li className="mb-2 flex items-center gap-2">
            <SparklesIcon className="w-6 h-6" />
            <span className="font-bold">
              我会在这里记录我喜欢的音乐以及当时听到时的感受。希望自己常常更新！
            </span>
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/mainpage"
          >
            进入<p className={`${playwrite.className}`}>Tomspace</p>
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://baidu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            遗憾离场(sad face.jpg)
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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

/*
          <Image
            className="dark:hover:bg-[#1a1a1a] rounded-full"
            src="/michael_de_santa.png"
            alt="Next.js logo"
            width={80}
            height={0}
            priority
          />
*/
