import React from 'react';
import { useSearchParams } from "react-router-dom";

function DashboardCardWindowsDiskUsedPercent() {

  let [searchParams, setSearchParams] = useSearchParams()
  const targetHost = searchParams.get("targetHost")
  const collectorUrl = "http://localhost:19999/"
  const collectorHost = searchParams.get("collectorHost")
  const targetData = "wmi_" + targetHost + ".logical_disk_C:_space_usage"
  const targetDataId = collectorHost + "_wmi_" + targetHost + "_logical_disk_C:_space_usage"
  
  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Disk Utilisation</h2>
        <div className="inline-flex w-12 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" stroke-width="2" stroke="currentColor" aria-hidden="true" class="-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z">
            </path>
          </svg>
          {PLATFORM.environment}
        </div>        
      </div>
      <div className="mt-2 mb-2 grow">
        <div data-netdata={targetData} 
              data-id={targetDataId}
              data-host={collectorUrl}
              data-append-options="percentage"
              data-chart-library="easypiechart" 
              data-title="Used disk C:" 
              data-units="%"
              data-decimal-digits="0" 
              data-width="250px"
              data-height="250px"
              data-easypiechart-barcolor="(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})"
              data-easypiechart-min-value="0"
              data-easypiechart-max-value="100"
              data-dimensions="used"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardWindowsDiskUsedPercent;