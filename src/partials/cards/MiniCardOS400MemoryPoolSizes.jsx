import React from 'react';

function MiniCardOS400MemoryPoolSizes( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://localhost:19999/"
  const targetData = "ibmi_remote.memory_current_size"
  const targetDataId = collectorHost + "_ibmi_remote_memory_current_size"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">Memory Pool Current Sizes</h2>
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
                data-colors="#256BD1 #B21C87 #C9596A #F5D88E"
          >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardOS400MemoryPoolSizes;
