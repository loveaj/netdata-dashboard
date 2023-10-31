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
            <div className="inline-flex w-12 pt-0.5 px-1.5 mb-4 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z">
                </path>
              </svg>
              {PLATFORM.environment}
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
