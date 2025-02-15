import React from 'react';

function MiniCardOS400DiskUsedPercent({ collectorHost, targetHost }) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "ibmi_remote.asp_used_percent"
  const targetDataId = collectorHost + "_ibmi_remote_asp_used_percent"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">ASP Utilisation</h2>
      </div>      
      <div className="flex pb-5">
        <div className="text-white grow"/>
        <div className="pt-3 grow-0">
          <div 
                  data-netdata={targetData}  
                  data-host={collectorUrl}
                  data-chart-library="easypiechart"
                  data-title="Used ASP"
                  data-units="%"
                  data-decimal-digits="0"
                  data-width="150px"
                  data-height="150px"
                  data-easypiechart-barcolor="(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})"
                  data-easypiechart-min-value="0"
                  data-easypiechart-max-value="100"
            >
          </div>
        </div>
        <div className="text-white grow"/>
      </div>
    </React.Fragment>
  );

}
export default MiniCardOS400DiskUsedPercent;
