import React, { useState } from 'react';
import { useSearchParams } from "react-router-dom";

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCardSummaryWindows from '../partials/dashboard/DashboardCardSummaryWindows';

function ServerWindows() {

  const [searchParams, setSearchParams] = useSearchParams()
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
            <div className="text-2xl font-light text-gray-500 mb-2">
                MS Windows server summary
            </div>
            <div className="inline-flex w-12 py-1 px-2 mb-4 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
              {PLATFORM.environment}
            </div>            
            {/* Cards */}
            <div className="min-w-full min-h-full px-0 py-8 mx-auto">
              {/* Summary of Windows server status  */}
              <DashboardCardSummaryWindows collectorHost={collectorHost} />
            </div>
          </div>
        </main>

      </div>
    </div>      
  );
}
export default ServerWindows;
