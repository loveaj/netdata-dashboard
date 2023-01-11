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

  let [searchParams, setSearchParams] = useSearchParams()
  const targetHost = searchParams.get("targetHost")
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
            <div className="text-2xl font-light text-gray-500">
                IBM i
            </div>
            <div className="mb-10 text-2xl font-light uppercase text-sky-500">
                {targetHost}
            </div> 
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Gauge chart (ASP utilisation %) */}
              <DashboardCardIbmiAspUsedPercent />
              {/* Sparkline (ASP utilisation) */}
              <DashboardCardIbmiAspUsed />
              {/* Sparkline (Temp storage utilisation) */}
              <DashboardCardIbmiTempStorageUtilisation />
              {/* Sparkline (CPU utilisation) */}
              <DashboardCardIbmiCpuUtilisation />
              {/* Sparkline (Job stats) */}
              <DashboardCardIbmiJobs />
              {/* Sparkline (Memory pool sizes) */}
              <DashboardCardIbmiMemoryPoolSizes />
              {/* Sparkline (Memory pool database faults) */}
              <DashboardCardIbmiMemoryDatabaseFaults />
              {/* Sparkline (Memory pool non-database faults) */}
              <DashboardCardIbmiMemoryNonDatabaseFaults />
              {/* Sparkline (Memory pool database pages) */}
              <DashboardCardIbmiMemoryDatabasePages />
              {/* Sparkline (Memory pool non-database pages) */}
              <DashboardCardIbmiMemoryNonDatabasePages />
              {/* Sparkline (Memory pool thread transitions from Active to Ineligible) */}
              <DashboardCardIbmiMemoryActiveToIneligible />
              {/* Sparkline (Memory pool thread transitions from Active to Wait) */}
              <DashboardCardIbmiMemoryActiveToWait />
              {/* Sparkline (Memory pool thread transitions from Wait to Ineligible) */}
              <DashboardCardIbmiMemoryWaitToIneligible />
            </div>
 
          </div>
        </main>
      </div>
    </div>      
  );
}
export default ServerIbmi;
