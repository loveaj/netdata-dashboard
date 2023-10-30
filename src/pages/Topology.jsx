import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCardTopology from '../partials/dashboard/DashboardCardTopology';

function Topology() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">

        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="min-w-full min-h-full">
          <div className="min-w-full min-h-full sm:px-2 sm:py-2 lg:px-4 lg:py-4">
            <div className="mb-2 text-2xl font-bold text-gray-900">
              Infrastructure
            </div>
            <div className="mb-3 text-2xl font-light text-gray-500">
              Service map
            </div>
            {/* Cards */}
            <div className="min-w-full min-h-full px-4 py-8 mx-auto sm:px-6 lg:px-8">
              {/* Gauge chart (CPU utilization) */}
              <DashboardCardTopology />
            </div>
          </div>
        </main>

      </div>
    </div>      
  );
}
export default Topology;
