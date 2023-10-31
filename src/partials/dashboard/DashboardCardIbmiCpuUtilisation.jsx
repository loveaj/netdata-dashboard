import React  from 'react';

function DashboardCardIbmiCpuUtilisation({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "ibmi_remote.cpu_utilisation"
  const targetDataId = collectorHost + "_ibmi_remote_cpu_utilisation"
 
  return (
    <div className="flex-initial border rounded-sm shadow-lg bg-stone-50 h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-300">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">CPU Utilisation</h2>
        <div className="flex items-start">
          <div className="mb-2 text-xs text-slate-600">The maximum, minimum and average CPU utilisation of the system.</div>
        </div>
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
              data-dimensions="system_min_cpu_utilisation,system_avg_cpu_utilisation,system_max_cpu_utilisation"
              data-colors="#ef5675 #ffa600 #7a5195"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardIbmiCpuUtilisation;
