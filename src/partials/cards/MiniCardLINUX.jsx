import React from 'react';
import MiniCardLINUXDiskUsedPercent from './MiniCardLINUXDiskUsedPercent';
import MiniCardLINUXCpuUtilisation from './MiniCardLINUXCpuUtilisation';

function MiniCardLINUX({ collectorHost, targetHost }) {

  return (
    <div className="bg-white">
      <MiniCardLINUXDiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardLINUXCpuUtilisation collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardLINUX;
