import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCardIbmiAspUsedPercent from '../partials/dashboard/DashboardCardIbmiAspUsedPercent';
import DashboardCardIbmiAspUsed from '../partials/dashboard/DashboardCardIbmiAspUsed';
import DashboardCardIbmiTempStorageUtilisation from '../partials/dashboard/DashboardCardIbmiTempStorageUtilisation';
import DashboardCardIbmiCpuUtilisation from '../partials/dashboard/DashboardCardIbmiCpuUtilisation';
import DashboardCardIbmiJobs from '../partials/dashboard/DashboardCardIbmiJobs';
import DashboardCardIbmiMemoryPoolSizes from '../partials/dashboard/DashboardCardIbmiMemoryPoolSizes'
import DashboardCardIbmiMemoryDatabaseFaults from '../partials/dashboard/DashboardCardIbmiMemoryDatabaseFaults'
import DashboardCardIbmiMemoryNonDatabaseFaults from '../partials/dashboard/DashboardCardIbmiMemoryNonDatabaseFaults'
import DashboardCardIbmiMemoryDatabasePages from '../partials/dashboard/DashboardCardIbmiMemoryDatabasePages'
import DashboardCardIbmiMemoryNonDatabasePages from '../partials/dashboard/DashboardCardIbmiMemoryNonDatabasePages'
import DashboardCardIbmiMemoryActiveToIneligible from '../partials/dashboard/DashboardCardIbmiMemoryActiveToIneligible'
import DashboardCardIbmiMemoryActiveToWait from '../partials/dashboard/DashboardCardIbmiMemoryActiveToWait'
import DashboardCardIbmiMemoryWaitToIneligible from '../partials/dashboard/DashboardCardIbmiMemoryWaitToIneligible'

function ServerIbmi() {

  const [searchParams, setSearchParams] = useSearchParams()
  const targetHost = searchParams.get("targetHost")
  const collectorHost = searchParams.get("collectorHost")
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            <div className="mb-2 text-4xl font-light text-gray-900">
              Infrastructure
            </div>
            <div className="mb-2 text-2xl font-light text-gray-500">
              IBM i
            </div>
            <div className="inline-flex w-12 px-2 py-1 mb-4 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
              {PLATFORM.environment}
            </div>
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Gauge chart (ASP utilisation %) */}
              <DashboardCardIbmiAspUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (ASP utilisation) */}
              <DashboardCardIbmiAspUsed collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Temp storage utilisation) */}
              <DashboardCardIbmiTempStorageUtilisation collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (CPU utilisation) */}
              <DashboardCardIbmiCpuUtilisation collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Job stats) */}
              <DashboardCardIbmiJobs collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool sizes) */}
              <DashboardCardIbmiMemoryPoolSizes collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool database faults) */}
              <DashboardCardIbmiMemoryDatabaseFaults collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool non-database faults) */}
              <DashboardCardIbmiMemoryNonDatabaseFaults collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool database pages) */}
              <DashboardCardIbmiMemoryDatabasePages collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool non-database pages) */}
              <DashboardCardIbmiMemoryNonDatabasePages collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool thread transitions from Active to Ineligible) */}
              <DashboardCardIbmiMemoryActiveToIneligible collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool thread transitions from Active to Wait) */}
              <DashboardCardIbmiMemoryActiveToWait collectorHost={collectorHost} targetHost={targetHost} />
              {/* Sparkline (Memory pool thread transitions from Wait to Ineligible) */}
              <DashboardCardIbmiMemoryWaitToIneligible collectorHost={collectorHost} targetHost={targetHost} />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
export default ServerIbmi;
