import React  from 'react';

function DashboardCardIbmiJobs({ collectorHost, targetHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/"
  const targetData = "ibmi_remote.job_stats"
  const targetDataId = collectorHost + "_ibmi_remote_job_stats"
 
  return (
    <div className="flex-initial border rounded-sm shadow-lg bg-stone-50 h-110 col-span-full sm:col-span-10 xl:col-span-10 border-slate-300">
      <div className="px-5 pt-5">
        <header className="flex items-start justify-between mb-2">
        </header>
        <h2 className="mb-2 text-lg font-semibold text-slate-800">Job Information</h2>
        <div className="flex items-start">
          <div className="mb-2 text-xs text-slate-600">
            The total number of user and system jobs that are currently in the system. <br/>
            The number of jobs active in the system (jobs that have been started, but have not yet ended), including both user and system jobs.<br/>
            The number of interactive jobs active in the system.
          </div>
        </div>
      </div>
      <div className="mt-2 mb-2 grow">
        <div data-netdata={targetData} 
              // data-id={targetDataId}
              data-host={collectorUrl}
              data-chart-library="dygraph" 
              data-dygraph-type="sparkline"
              data-title="" 
              data-width="95%"
              data-height="260px"
              data-after="-300"
              data-append-options="match-ids"
              data-dygraph-valuerange="[0, null]"
              data-dygraph-strokewidth="1.5"
              data-dimensions="system_total_jobs,system_active_jobs,system_interactive_jobs"
              data-colors="#7a5195 #ef5675 #ffa600"
        >
        </div>
      </div>
    </div>
  );
}
export default DashboardCardIbmiJobs;
