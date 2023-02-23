import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import MiniCardIbmiAspUsedPercent from './dashboard/MiniCardIbmiAspUsedPercent';
import { XMarkIcon } from '@heroicons/react/24/outline'
import "../css/additional-styles/react-sliding-pane.css";

function SlidingPanel({ openPanel, setOpenPanel, close, nodeId, nodeLabel, collectorHost, targetHost }) {

  return (
        <SlidingPane
        isOpen={openPanel}
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setOpenPanel(false);
        }}
      >

          <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-gray-500 shadow-xl">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">

              <div className="bg-gray-200 mt-6 py-6 px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="text-base font-bold text-black">Service details</div>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-gray-200 text-black hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-900"
                      onClick={() => setOpenPanel(false)}
                    >
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-1">
                  <p className="text-xs text-black">
                    Name: {nodeId}
                  </p>
                </div>
                <div className="mt-1">
                  <p className="text-xs text-gray-700">
                    Type: {nodeLabel}
                  </p>
                </div>
                <div className="inline-flex w-12 pt-0.5 px-1.5 mt-2 mb-1 justify-center text-xs font-semibold text-white uppercase rounded-full bg-sky-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="-tr-ml-1 tr-mr-2.5 tr-h-4 tr-w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z">
                    </path>
                  </svg>
                  {PLATFORM.environment}
                </div>
              </div>

              <div className="relative flex-1 px-4 sm:px-6">
                {/* Replace with your content */}
                  {/* Gauge chart (ASP utilisation %) */}
                  <MiniCardIbmiAspUsedPercent collectorHost={collectorHost} targetHost={targetHost} />
                {/* /End replace */}
              </div>
            </div>
            <div className="flex flex-shrink-0 justify-end px-4 py-4">
              <button
                type="button"
                className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={() => setOpenPanel(false)}
              >
                Expand
              </button>
            </div>
          </div>


      </SlidingPane>
    )
}

export default SlidingPanel;