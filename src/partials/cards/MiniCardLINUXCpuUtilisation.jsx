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
      <div className="flex pb-5">
        <div className="pt-3 grow">
          <div data-netdata={targetData} 
                data-id={targetDataId}
                data-host={collectorUrl}
                data-chart-library="dygraph" 
                data-dygraph-type="sparkline"
                data-dygraph-strokewidth="1.5"
                data-dygraph-valuerange="[0, null]"
                data-title="" 
                data-width="100%"
                data-height="150px"
                data-after="-120"
                data-append-options="match-ids"
                data-dimensions="user,system"
                data-colors="#5c64b0 #5dc0bd"
                data-legend="yes"  
                data-decimal-digits="-1"   
            >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardLINUXCpuUtilisation;
