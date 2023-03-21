import React from 'react';

function MiniCardOS400MemoryActiveToIneligible( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/"
  const targetData = "ibmi_remote.memory_active_to_ineligible"
  const targetDataId = collectorHost + "_ibmi_remote_memory_active_to_ineligible"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">Memory Pool Thread Transitions from Active to Ineligible</h2>
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
                data-width="95%"
                data-height="260px"
                data-after="-300"
                data-append-options="match-ids"
                data-colors="#5c64b0 #1e88c5 #11a6c6 #5dc0bd"
          >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardOS400MemoryActiveToIneligible;
