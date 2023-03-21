import React from 'react';

function MiniCardWINDOWSCpuUtilisation( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/"
  const targetData = "wmi_" + targetHost + ".cpu_utilization_total"
  const targetDataId = collectorHost + "_wmi_" + targetHost + "_cpu_utilization_total"

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
                data-width="100%"
                data-height="150px"
                data-after="-120"
                data-append-options="match-ids"
                data-dimensions="dpc,user,privileged,interrupt"
                data-colors="#5c64b0 #1e88c5 #11a6c6 #5dc0bd"
                data-legend="yes"  
                data-decimal-digits="-1"   
            >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardWINDOWSCpuUtilisation;