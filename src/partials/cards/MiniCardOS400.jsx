import React from 'react';
import MiniCardOS400DiskUsedPercent from './MiniCardOS400DiskUsedPercent';

function MiniCardOS400({ collectorHost, targetHost }) {

  return (
    <div className="bg-white ">
      <MiniCardOS400DiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardOS400;
