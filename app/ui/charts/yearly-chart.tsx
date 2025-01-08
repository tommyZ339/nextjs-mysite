import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { Popover } from 'antd';

function contentMake(content: string) {
  return (
    <div className="flex flex-col">
      <p className="text-sm">{content}</p>
    </div>
  );
}

export async function YearlyChart() {
  const getWeekNumber = (date: Date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date.getTime() - startOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  };

  const currentWeekNumber = getWeekNumber(new Date());
  const currentYear = new Date().getFullYear();
  const data = [
    {
      title: 'Good luck, babe',
      singer: 'Chappell Roan',
      content: 'This is a song about love and heartbreak...',
    },
    {
      title: 'Austin',
      singer: 'Dasha',
      content: 'This is a song about boots and cowboys.',
    },
    {
      title: 'No doubt',
      singer: 'Enhypen',
      content: 'great kpop!',
    },
    {
      title: 'Juno',
      singer: 'Sabrina Carpenter',
      content: 'grower!',
    },
    {
      title: 'Savage',
      singer: 'Megan Thee Stallion',
      content: 'This is a song about being a savage...',
    },
    {
      title: 'Kiss me more',
      singer: 'Doja Cat',
      content: 'This is a song about kissing...',
    },
  ]; // future database substitute

  return (
    <div className="flex w-full flex-col col-span-3 md: ml-40 md: col-span-6">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        {currentYear}年截至第{currentWeekNumber}周，我的实时年榜...
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-pink p-2">
        {
          <div className="bg-pink px-6">
            {data.map((item, i) => {
              return (
                <div
                  key={item.title}
                  className={clsx(
                    'flex flex-row items-center justify-between py-4 bg-pink',
                    {
                      'border-t': i !== 0,
                    }
                  )}
                >
                  <div className="flex items-center">
                    <Image
                      src="/globe.svg"
                      alt={`${item.title}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                    <div className="min-w-0">
                      <Popover content={contentMake(item.content)}>
                        <p className="truncate text-sm font-semibold md:text-base hover:">
                          {item.title}
                        </p>
                      </Popover>
                    </div>
                  </div>
                  <p
                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                  >
                    {item.singer}
                  </p>
                </div>
              );
            })}
          </div>
        }
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated This week.</h3>
        </div>
      </div>
    </div>
  );
}
