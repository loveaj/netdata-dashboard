import React from 'react';

function MiniCardOS400CpuUtilisation( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/"
  const targetData = "ibmi_remote.cpu_utilisation"
  const targetDataId = collectorHost + "_ibmi_remote_cpu_utilisation"

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
                data-chart-library="google" 
                data-title="" 
                data-width="95%"
                data-height="260px"
                data-after="-300"
                data-append-options="match-ids"
                data-dygraph-valuerange="[0, null]"
                data-dygraph-strokewidth="1.5"
                data-dimensions="system_min_cpu_utilisation,system_avg_cpu_utilisation,system_max_cpu_utilisation"
                data-colors="##5c64b0 #0098c7 #5dc0bd"
          >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardOS400CpuUtilisation;