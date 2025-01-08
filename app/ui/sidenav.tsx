import Link from 'next/link';
import NaviLinks from '@/app/ui/navilinks';
import MyLogo from '@/app/ui/mylogo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 md:py-1">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-transparent p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <MyLogo />
        </div>
      </Link>
      <NaviLinks />
    </div>
  );
}

/*
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>

                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        */
