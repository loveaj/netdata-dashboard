import React from 'react';

function DashboardCardWindowsMemoryUtilisation({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "windows_" + targetHost + ".os_visible_memory_usage"
  const targetDataId = collectorHost + "_windows_" + targetHost + "_os_visible_memory_usage"
  
  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Visible Memory Utilisation</h2>      
      </div>
      <div className="mt-2 mb-2 grow">
        <div data-netdata={targetData} 
              data-id={targetDataId}
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
              data-dimensions="free,used"
              data-units="B"
              data-desired-units="GiB"
              data-colors="#ef5675 #ffa600"        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardWindowsMemoryUtilisation;
