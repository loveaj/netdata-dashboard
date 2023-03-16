import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import MiniCardOS400 from './cards/MiniCardOS400';
import MiniCardLINUX from './cards/MiniCardLINUX';
import MiniCardWINDOWS from './cards/MiniCardWINDOWS';

function SlidingPanel({ openPanel, setOpenPanel, closePanel, nodeId, nodeLabel, nodeOs, collectorHost, targetHost }) {

  const DynamicComponent = (nodeOs === 'OS400') ? MiniCardOS400 : (nodeOs === 'LINUX') ? MiniCardLINUX: MiniCardWINDOWS;
  
  return (
    <Transition.Root show={openPanel} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closePanel}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                unmount={false}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full bg-white divide-y divide-gray-200 shadow-xl shadow-gray-500">
                    <div className="flex flex-col flex-1 min-h-0 py-6 overflow-y-scroll">

                      <div className="px-4 py-6 mt-6 bg-gray-200 sm:px-6">
                        <div className="flex items-center justify-between">
                          <Dialog.Title className="text-base font-bold text-black">Service details</Dialog.Title>
                          <div className="flex items-center ml-3 h-7">
                            <button
                              type="button"
                              className="text-black bg-gray-200 rounded-md hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-900"
                              onClick={() => closePanel()}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
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
                            OS: {nodeOs}
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

                      <div className="px-4 sm:px-6">
                        <DynamicComponent collectorHost={collectorHost} targetHost={targetHost} />
                      </div>
                    </div>
                    <div className="flex justify-end flex-shrink-0 px-4 py-4">
                      <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => setOpenPanel(false)}
                      >
                        Expand
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlidingPanel;