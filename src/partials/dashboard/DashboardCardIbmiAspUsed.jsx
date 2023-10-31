import React  from 'react';

function DashboardCardIbmiAspUsed({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "ibmi_remote.asp_utilisation"
  const targetDataId = collectorHost + "_ibmi_remote_asp_utilisation"

  return (
    <div className="flex-initial border rounded-sm shadow-lg bg-stone-50 h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-300">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">ASP Used</h2>
        <div className="flex items-start">
          <div className="mb-2 text-xs text-slate-600">The total system storage pool capacity and amount currently in use.</div>
        </div>
      </div>
      <div className="mt-2 mb-2 grow">
        <div data-netdata={targetData} 
              data-host={collectorUrl}
              // data-id={targetDataId}
              data-chart-library="dygraph" 
              data-dygraph-type="sparkline"
              data-title="" 
              data-width="95%"
              data-height="260px"
              data-after="-300"
              data-append-options="match-ids"
              data-dygraph-valuerange="[0, null]"
              data-dygraph-strokewidth="1.5"
              data-dimensions="system_disk_used,system_disk_capacity"
              data-colors="#bc5090 #ef5675"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardIbmiAspUsed;
