import React from 'react';
import MiniCardOS400DiskUsedPercent from './MiniCardOS400DiskUsedPercent';

function MiniCardOS400({ collectorHost, targetHost }) {

  return (
    <div className="flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4">
      <MiniCardOS400DiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardOS400;
