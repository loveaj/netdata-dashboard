import React from 'react';

function DashboardCardWindowsCpuUtilisation({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "windows_" + targetHost + ".cpu_utilization_total"
  const targetDataId = collectorHost + "_windows_" + targetHost + "_cpu_utilization_total"
  
  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">CPU Total Utilisation</h2>     
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
              data-dimensions="dpc,user,privileged,interrupt"
              data-colors="#ef5675 #ffa600 #7a5195 #4daf4a"        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardWindowsCpuUtilisation;
