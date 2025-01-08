'use client';

import Link from 'next/link';
import {
  ChartBarIcon,
  ChartBarSquareIcon,
  HomeIcon,
  FaceSmileIcon,
} from '@heroicons/react/20/solid';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: '通览', href: '/mainpage', icon: HomeIcon },
  { name: '我的每周榜单', href: '/mainpage/weekly', icon: ChartBarIcon },
  { name: '我的年榜', href: '/mainpage/yearly', icon: ChartBarSquareIcon },
  { name: '小随想...', href: '/mainpage/thoughts', icon: FaceSmileIcon },
];

export default function NaviLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 p-4 w-full">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] items-center justify-center gap-2 rounded-md bg-gray-40 p-3 text-md font-bold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 w-full md:w-auto',
              {
                'bg-pink-200/[0.45] text-blue-600': pathname === link.href,
              }
            )}
          >
            <Icon className="w-6 h-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
