import React from 'react';
import MiniCardWINDOWSDiskUsedPercent from './MiniCardWINDOWSDiskUsedPercent';
import MiniCardWINDOWSCpuUtilisation from './MiniCardWINDOWSCpuUtilisation';
import MiniCardWINDOWSMemoryUtilisation from './MiniCardWINDOWSMemoryUtilisation';
import MiniCardWINDOWSPagingUsage from './MiniCardWINDOWSPagingUsage';

function MiniCardWINDOWS({ collectorHost, targetHost }) {

  return (
    <div className="bg-white">
      <MiniCardWINDOWSDiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardWINDOWSCpuUtilisation collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardWINDOWSMemoryUtilisation collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardWINDOWSPagingUsage collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardWINDOWS;
