import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import SidebarLinkGroup from './SidebarLinkGroup';
import { ServerStackIcon, BoltIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'
import CompanyLogo from '../images/logo_ajbell_white.svg';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true');

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (!sidebarOpen || sidebar.current.contains(target) || trigger.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector('body').classList.add('sidebar-expanded');
    } else {
      document.querySelector('body').classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-gray-900 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between pr-3 mb-10 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-gray-300"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink reloadDocument end to="/" className="block">
            <img src={CompanyLogo} width="160" height="80" alt="Company Logo" />
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="pl-3 text-sm font-semibold text-white uppercase">
              <span className="hidden w-6 text-center text-gray-900 lg:block lg:sidebar-expanded:hidden 2xl:hidden" aria-hidden="true">
                •
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">Trading Platform Dashboard</span>
            </h3>
            <ul className="mt-3">
              
              {/* Platform Infrastructure*/}
              <SidebarLinkGroup activecondition={pathname === '/' || pathname.includes('platform')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-white hover:text-red-300 truncate transition duration-150 ${
                          (pathname === '/' || pathname.includes('platform')) && 'hover:text-red-300'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">

                            <ServerStackIcon className="bg-gray-900 rounded-full" width="32" height="32" alt="Infrastructure" />
                            <span className="ml-2 text-sm font-bold duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Infrastructure
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex ml-2 shrink-0">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-300 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-10 mt-1 ${!open && 'hidden'}`}>
                        <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/"
                              className="block text-white truncate transition duration-150 hover:text-red-300"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Service map
                              </span>
                            </NavLink>
                          </li>                          
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/platform/ibmi?collectorHost=localhost&targetHost=AJBCOPY"
                              className="block text-white truncate transition duration-150 hover:text-red-300"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                IBM i
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/platform/serverlinux?collectorHost=localhost"
                              className="block text-white truncate transition duration-150 hover:text-red-300"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Linux servers
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/platform/example"
                              className="block text-white truncate transition duration-150 hover:text-red-300"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Windows servers
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* Platform Activity */}
              <SidebarLinkGroup activecondition={pathname.includes('platform')}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-300 hover:text-white truncate transition duration-150 ${
                          pathname.includes('activity') && 'hover:text-gray-200'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          sidebarExpanded ? handleClick() : setSidebarExpanded(false);
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <BoltIcon className="bg-gray-900 rounded-full" width="32" height="32" alt="Activity" />
                            <span className="ml-2 text-sm font-bold duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Business Activity
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex ml-2 shrink-0">
                            <svg className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-300 ${open && 'rotate-180'}`} viewBox="0 0 12 12">
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-10 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/"
                              className="block text-gray-300 truncate transition duration-150 hover:text-white"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Summary
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/"
                              className="block text-gray-300 truncate transition duration-150 hover:text-white"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Trading
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/"
                              className="block text-gray-300 truncate transition duration-150 hover:text-white"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Cash in
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              reloadDocument
                              end
                              to="/"
                              className="block text-gray-300 truncate transition duration-150 hover:text-white"
                            >
                              <span className="text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                Cash out
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>

              {/* More ... */}
              <li className={`px-2 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname.includes('more') && 'bg-gray-900'}`}>
                <NavLink
                  reloadDocument
                  end
                  to="/"
                  className={`block text-gray-300 hover:text-white truncate transition duration-150 ${
                    pathname.includes('more') && 'hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-center">
                    <SquaresPlusIcon className="bg-gray-900 rounded-full" width="32" height="32" alt="More" />
                    <span className="ml-2 text-sm font-bold duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">More ...</span>
                  </div>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-gray-300" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-slate-600" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;