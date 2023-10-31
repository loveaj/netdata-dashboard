import React  from 'react';

function DashboardCardIbmiMemoryNonDatabaseFaults({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "ibmi_remote.memory_nondatabase_faults"
  const targetDataId = collectorHost + "_ibmi_remote_memory_nondatabase_faults"
 
  return (
    <div className="flex-initial border rounded-sm shadow-lg bg-stone-50 h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-300">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Memory Pool Non-Database Page Faults</h2>
        <div className="mb-2 text-xs text-slate-600">
            The rate, in page faults per second, of nondatabase page faults against pages other than those designated as database pages.<br/>
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
              data-colors="#0b1d78 #0069c0 #00a9b5 #1fe074"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardIbmiMemoryNonDatabaseFaults;
