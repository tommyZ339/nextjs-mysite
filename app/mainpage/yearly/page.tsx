import { YearlyChart } from '../../ui/charts/yearly-chart';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '../../ui/skeletons';
import React from 'react';

export default function Page() {
  return (
    <main>
      <div className="mt-6 grid grid-cols-1 grid-rows-3 gap-1 md:grid-cols-4 lg:grid-cols-12">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <YearlyChart />
        </Suspense>
      </div>
    </main>
  );
}
