import React from 'react';
import MiniCardWINDOWSDiskUsedPercent from './MiniCardWINDOWSDiskUsedPercent';

function MiniCardWINDOWS({ collectorHost, targetHost }) {

  return (
    <div className="bg-white">
      <MiniCardWINDOWSDiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardWINDOWS;
