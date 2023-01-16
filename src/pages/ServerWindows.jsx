import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCardWindowsCpuUtilisation from '../partials/dashboard/DashboardCardWindowsCpuUtilisation';
import DashboardCardWindowsDiskUsedPercent from '../partials/dashboard/DashboardCardWindowsDiskUsedPercent';
import DashboardCardWindowsMemoryUtilisation from '../partials/dashboard/DashboardCardWindowsMemoryUtilisation';
import DashboardCardWindowsPagingUsage from '../partials/dashboard/DashboardCardWindowsPagingUsage';

function ServerWindows() {

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
                MS Windows server summary
            </div>
            <div className="mb-10 text-2xl font-light uppercase text-sky-500">
                {targetHost}
            </div>            
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Disk utilisation  */}
              < DashboardCardWindowsDiskUsedPercent />
              {/* CPU system.cpu */}
              <DashboardCardWindowsCpuUtilisation />
              {/* Memory visible */}
              < DashboardCardWindowsMemoryUtilisation />
              {/* Paging usage */}
              < DashboardCardWindowsPagingUsage />
            </div>
 
          </div>
        </main>
      </div>
    </div>      
  );
}
export default ServerWindows;