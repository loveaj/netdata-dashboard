import React from 'react';
import MiniCardOS400DiskUsedPercent from './MiniCardOS400DiskUsedPercent';
import MiniCardOS400Jobs from './MiniCardOS400Jobs';
import MiniCardOS400MemoryActiveToIneligible from './MiniCardOS400MemoryActiveToIneligible';
import MiniCardOS400MemoryActiveToWait from './MiniCardOS400MemoryActiveToWait';
import MiniCardOS400MemoryDatabaseFaults from './MiniCardOS400MemoryDatabaseFaults';
import MiniCardOS400MemoryDatabasePages from './MiniCardOS400MemoryDatabasePages';
import MiniCardOS400MemoryNonDatabaseFaults from './MiniCardOS400MemoryNonDatabaseFaults';
import MiniCardOS400MemoryNonDatabasePages from './MiniCardOS400MemoryNonDatabasePages';
import MiniCardOS400MemoryPoolSizes from './MiniCardOS400MemoryPoolSizes';
import MiniCardOS400MemoryWaitToIneligible from './MiniCardOS400MemoryWaitToIneligible';
import MiniCardOS400TempStorageUtilisation from './MiniCardOS400TempStorageUtilisation';

function MiniCardOS400({ collectorHost, targetHost }) {

  return (
    <div className="bg-white ">
      <MiniCardOS400DiskUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400Jobs collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryActiveToIneligible collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryActiveToWait collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryDatabaseFaults collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryDatabasePages collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryNonDatabaseFaults collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryNonDatabasePages collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryPoolSizes collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400MemoryWaitToIneligible collectorHost={collectorHost} targetHost={targetHost} />
      <MiniCardOS400TempStorageUtilisation collectorHost={collectorHost} targetHost={targetHost} />
    </div>
  );

}
export default MiniCardOS400;
