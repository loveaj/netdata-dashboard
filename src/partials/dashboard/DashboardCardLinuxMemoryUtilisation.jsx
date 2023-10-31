import React from 'react';

function DashboardCardLinuxMemoryUtilisation({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/host/" + targetHost
  const targetData = "system.ram"
  const targetDataId = collectorHost + "_system_ram"

  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Memory Utilisation</h2>        
      </div>
      <div className="mt-2 mb-2 grow">
        <div data-netdata={targetData} 
              // data-id={targetDataId}
              data-host={collectorUrl}
              data-chart-library="dygraph" 
              data-dygraph-type="sparkline"
              data-title="" 
              data-width="95%"
              data-height="260px"
              data-after="-300"
              data-append-options="match-ids"
              data-dygraph-valuerange="[0, null]"
              data-dygraph-strokewidth="1.5"
              data-dimensions="free,used,cached,buffers"
              data-colors="#ef5675 #ffa600 #7a5195 #4daf4a"        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardLinuxMemoryUtilisation;
