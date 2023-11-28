import React, { useContext } from 'react';
import DateTimeWindowContext from '../../components/DateTimeWindow';

function DashboardCardIbmiAspUsedPercent({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "ibmi_remote.asp_used_percent"
  const targetDataId = collectorHost + "_ibmi_remote_asp_used_percent"
  const selectedDateTimes = useContext(DateTimeWindowContext);

  return (
    <div className="flex-initial border rounded-sm shadow-lg bg-stone-50 h-110 col-span-full sm:col-span-5 xl:col-span-4 border-slate-300">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">ASP Utilisation</h2>
        <div className="flex items-start">
          <div className="mb-2 text-xs text-slate-600">The percentage of the system storage pool currently in use.</div>
        </div>
      </div>
      <div className="ml-15 grow">
        <div data-netdata={targetData} 
              data-host={collectorUrl}
              // data-id={targetDataId}
              data-chart-library="easypiechart" 
              data-title="Used ASP"
              data-units="%"
              data-decimal-digits="0"
              data-width="250px"
              data-height="250px"
              data-after="-300"
              // data-after={new Date(selectedDateTimes[0]).getTime() / 1000}
              // data-before={new Date(selectedDateTimes[1]).getTime() / 1000}
              data-easypiechart-barcolor="(function(percent){return(percent < 80 ? '#78be20' : percent < 90 ? '#e57200' : '#d50032');})"
              data-easypiechart-min-value="0"
              data-easypiechart-max-value="100"
        >
        </div>
      </div>
    </div>
  );

}
export default DashboardCardIbmiAspUsedPercent;
