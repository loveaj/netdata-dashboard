import React from 'react';

function DashboardCard04() {

  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-96 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Disk I/O</h2>
        <div className="w-8 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">UAT</div>
      </div>
      <div className="grow">
        <div data-netdata="system.io" 
              data-host="http://localhost:19999/"
              data-chart-library="dygraph" 
              data-title="" 
              data-width="95%"
              data-height="260px"
              data-after="-300"
              data-colors="#ea8099 #cb71e0"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCard04;
