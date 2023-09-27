import React from 'react';

function MiniCardWINDOWSDiskUsedPercent( { collectorHost, targetHost } ) {

  const collectorUrl = "http://BCA-AJC-ND-01:19999/host/" + targetHost
  const targetData = "windows_" + targetHost + ".logical_disk_C:_space_usage"
  const targetDataId = targetHost + "_windows_" + targetHost + "_logical_disk_C:_space_usage"
  
  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">Disk Utilisation</h2>
      </div>        
      <div className="flex">
        <div className="text-white grow"/>
        <div className="pt-3 grow-0">
          <div data-netdata={targetData} 
                data-id={targetDataId}
                data-host={collectorUrl}
                data-append-options="percentage"
                data-chart-library="easypiechart" 
                data-title="Used disk C:" 
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
        <div className="text-white grow"/>
      </div>
    </React.Fragment>
  );
}
export default MiniCardWINDOWSDiskUsedPercent;
