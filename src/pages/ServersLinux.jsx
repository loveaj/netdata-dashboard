import React, { useState } from 'react';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';


function ServersLinux() {

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
            <div className="mb-10 text-2xl font-light text-gray-500">
                Linux servers
            </div>
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">
              {/* Gauge chart (CPU utilisation) */}
              <DashboardCard03 />
            </div>
 
          </div>
        </main>
      </div>
    </div>      
  );
}
export default ServersLinux;
