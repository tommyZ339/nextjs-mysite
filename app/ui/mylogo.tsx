import { playwrite } from '@/app/ui/fonts';
import Image from 'next/image';

export default function MyLogo() {
  return (
    <div
      className={`${playwrite.className} flex flex-row items-center leading-none text-white`}
    >
      <Image src="/michael_de_santa.png" alt="my logo" width={40} height={0} />
      <p className="text-[44px]">Tomspace</p>
    </div>
  );
}
