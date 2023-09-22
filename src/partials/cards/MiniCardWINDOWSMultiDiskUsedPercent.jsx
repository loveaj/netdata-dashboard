import React from 'react';

function MiniCardWINDOWSMultiDiskUsedPercent( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/"
  const targetData = "windows_" + targetHost + ".os_visible_memory_usage"
  const targetData1 = "windows_" + targetHost + ".logical_disk_C:_space_usage"
  const targetData2 = "windows_" + targetHost + ".logical_disk_D:_space_usage"
  const targetData3 = "windows_" + targetHost + ".logical_disk_E:_space_usage"
  const targetData4 = "windows_" + targetHost + ".logical_disk_S:_space_usage"
  const targetDataId1 = collectorHost + "_windows_" + targetHost + "_logical_disk_C:_space_usage"
  const targetDataId2 = collectorHost + "_windows_" + targetHost + "_logical_disk_D:_space_usage"
  const targetDataId3 = collectorHost + "_windows_" + targetHost + "_logical_disk_E:_space_usage"
  const targetDataId4 = collectorHost + "_windows_" + targetHost + "_logical_disk_S:_space_usage"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">Disk Utilisation</h2>
      </div>  
      <div className="flex pb-5">
        <div className="pt-3 grow">
          <div data-netdata={targetData1} 
                data-id={targetDataId1}
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
          <div data-netdata={targetData2} 
                data-id={targetDataId2}
                data-host={collectorUrl}
                data-append-options="percentage"
                data-chart-library="easypiechart" 
                data-title="Used disk D:" 
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
          <div data-netdata={targetData3} 
                data-id={targetDataId3}
                data-host={collectorUrl}
                data-append-options="percentage"
                data-chart-library="easypiechart" 
                data-title="Used disk E:" 
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
          <div data-netdata={targetData4} 
                data-id={targetDataId4}
                data-host={collectorUrl}
                data-append-options="percentage"
                data-chart-library="easypiechart" 
                data-title="Used disk S:" 
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
    </React.Fragment>
  );
}
export default MiniCardWINDOWSMultiDiskUsedPercent;
