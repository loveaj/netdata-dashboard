import React  from 'react';
import { useSearchParams } from "react-router-dom";

function DashboardCardIbmiMemoryNonDatabasePages() {

  let [searchParams, setSearchParams] = useSearchParams()
  const targetHost = searchParams.get("targetHost")
  const collectorUrl = "http://localhost:19999/"
  const collectorHost = searchParams.get("collectorHost")
  const targetData = "ibmi_remote.memory_nondatabase_pages"
  const targetDataId = collectorHost + "_ibmi_remote_memory_nondatabase_pages"
 
  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Memory Pool Non-Database Pages</h2>
        <div className="mb-2 text-xs text-slate-600">
        The rate in pages per second at which nondatabase pages are brought into the storage pool.<br/>
        </div>
        <div className="inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
          {PLATFORM.environment}
        </div>
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
              data-colors="#0b1d78 #0069c0 #00a9b5 #1fe074"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardIbmiMemoryNonDatabasePages;
