import React  from 'react';

function DashboardCardIbmiMemoryWaitToIneligible() {

 
  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-96 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Memory Pool Thread Transitions from Wait to Ineligible</h2>
        <div className="inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" stroke-width="2" stroke="currentColor" aria-hidden="true" class="-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
          {PLATFORM.environment}
        </div>
      </div>
      <div className="grow">
        <div data-netdata="ibmi_remote.memory_wait_to_ineligible" 
              data-host="http://localhost:19999/"
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
export default DashboardCardIbmiMemoryWaitToIneligible;