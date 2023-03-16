import React from 'react';

function MiniCardLINUXCpuUtilisation( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/host/" + targetHost
  const targetData = "system.cpu"
  const targetDataId = collectorHost + "_system_cpu"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">CPU Utilisation</h2>
      </div>  
      <div className="flex">
        <div className="text-white grow"/>
        <div className="pt-3 grow-0">
          <div data-netdata={targetData} 
                data-id={targetDataId}
                data-host={collectorUrl}
                data-chart-library="dygraph" 
                data-dygraph-type="sparkline"
                data-title="" 
                data-width="95%"
                data-height="150px"
                data-after="-300"
                data-append-options="match-ids"
                data-dygraph-valuerange="[0, null]"
                data-dygraph-strokewidth="1.5"
                data-dimensions="user,system"
                data-colors="#ef5675 #ffa600"        
            >
          </div>
        </div>
        <div className="text-white grow"/>
      </div>
    </React.Fragment>
  );
}
export default MiniCardLINUXCpuUtilisation;
