import React from 'react';

function DashboardCard02() {

  return (
    <div className="flex-initial w-64 bg-white border rounded-sm shadow-lg h-96 col-span-full sm:col-span-5 xl:col-span-4 border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Memory Utilisation</h2>
        <div className="w-8 pt-0.5 px-1.5 mb-1 text-xs font-semibold text-white uppercase rounded-full bg-sky-500">{PLATFORM.environment}</div>
      </div>
      <div className="grow">
        <div data-netdata="system.ram" 
              data-host="http://localhost:19999/"
              data-chart-library="easypiechart" 
              data-title="Used Memory" 
              data-units="Mb"
              data-decimal-digits="0" 
              data-width="250px"
              data-height="250px"
              data-easypiechart-barcolor="(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})"
              data-easypiechart-min-value="0"
              data-easypiechart-max-value="16000"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCard02; 
