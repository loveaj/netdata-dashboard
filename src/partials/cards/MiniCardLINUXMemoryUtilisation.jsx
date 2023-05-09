import React from 'react';

function MiniCardLINUXMemoryUtilisation( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/host/" + targetHost
  const targetData = "system.ram"
  const targetDataId = collectorHost + "_system_cpu"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">RAM Utilisation</h2>
      </div>  
      <div className="flex pb-5">
        <div className="pt-3 grow">
          <div data-netdata={targetData} 
                data-id={targetDataId}
                data-host={collectorUrl}
                data-chart-library="dygraph" 
                data-dygraph-strokewidth="1.5"
                data-dygraph-valuerange="[0, null]"
                data-dygraph-fillalpha="0.1" 
                data-title="" 
                data-width="100%"
                data-height="150px"
                data-after="-120"
                data-append-options="match-ids"
                data-dimensions="free,used,cached,buffers"
                data-colors="#256BD1 #B21C87 #C9596A #F5D88E" 
                data-legend="yes"  
                data-decimal-digits="-1"   
            >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardLINUXMemoryUtilisation;
