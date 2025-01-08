import { WeeklyChart } from '../../ui/charts/weekly-chart';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import React from 'react';

export default function Page() {
  return (
    <main>
      <div className="mt-6 grid grid-cols-1 grid-rows-3 gap-1 md:grid-cols-4 lg:grid-cols-12">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <WeeklyChart />
        </Suspense>
        <p className="col-start-9 items-center pt-40 pl-1 col-span-3">
          这里是一个整体的每周更新的榜单。将鼠标放在歌名上面可以看到我对歌曲的简评！如果我有特别喜欢的歌曲的话，我会把它放在“小随想”中，欢迎来看！xD
        </p>
      </div>
    </main>
  );
}
