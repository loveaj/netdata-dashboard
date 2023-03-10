import React from 'react';
import MiniCardLINUXDiskUsedPercent from './MiniCardLINUXDiskUsedPercent';

function MiniCardLINUX({ collectorHost, targetHost }) {

  return (
    <div className="flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4">
      <MiniCardLINUXDiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardLINUX;
