import React from 'react';

function MiniCardWINDOWSPagingUsage( { collectorHost, targetHost } ) {

  //const collectorUrl = "http://" + collectorHost + ":19999/"
  const collectorUrl = "http://" + collectorHost + ":19999/host/" + targetHost
  const targetData = "windows_" + targetHost + ".os_paging_files_usage"
  const targetDataId = targetHost + "_windows_" + targetHost + "_os_paging_files_usage"

  return (
    <React.Fragment>
      <div className="pt-5 border-b-2 grow">
        <h2 className="mb-2 text-sm font-semibold text-slate-800">Paging Files Usage</h2>
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
                data-dimensions="free,used"
                data-desired-units="Mb"
                data-units="Mb"                
                data-colors="#256BD1 #B21C87 #F5D88E #56A7C7 #4FB776"
                data-legend="yes"  
                data-decimal-digits="-1"   
            >
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MiniCardWINDOWSPagingUsage;
