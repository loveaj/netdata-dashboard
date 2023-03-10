import React from 'react';
import MiniCardWINDOWSDiskUsedPercent from './MiniCardWINDOWSDiskUsedPercent';

function MiniCardWINDOWS({ collectorHost, targetHost }) {

  return (
    <div className="flex-initial bg-white h-110 col-span-full sm:col-span-5 xl:col-span-4">
      <MiniCardWINDOWSDiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardWINDOWS;
