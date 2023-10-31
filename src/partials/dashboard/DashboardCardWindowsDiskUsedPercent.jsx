import React from 'react';

function DashboardCardWindowsDiskUsedPercent({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "windows_" + targetHost + ".logical_disk_C:_space_usage"
  const targetDataId = collectorHost + "_windows_" + targetHost + "_logical_disk_C:_space_usage"
  
  return (
    <div className="flex-initial bg-white border rounded-sm shadow-lg h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Disk Utilisation</h2>        
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
