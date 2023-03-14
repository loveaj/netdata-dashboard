import React from 'react';

function MiniCardLINUXDiskUsedPercent( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/host/" + targetHost
  const targetData = "disk_space._"
  const targetDataId = collectorHost + "_disk_space__"

  return (
    <div className="flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4">
      <div className="pt-5">
        <header className="flex items-start justify-between mb-2">
        </header> 
        <h2 className="mb-2 text-sm font-semibold text-slate-800">Disk Utilisation</h2>      
      </div>
      <div className="ml-15 grow">
        <div data-netdata={targetData} 
              data-id={targetDataId}
              data-host={collectorUrl}
              data-append-options="percentage"
              data-chart-library="easypiechart" 
              data-title="Used disk" 
              data-units="%"
              data-decimal-digits="0" 
              data-width="150px"
              data-height="150px"
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
export default MiniCardLINUXDiskUsedPercent;
