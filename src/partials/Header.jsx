import React, { useState } from 'react';
import Help from './header/Help';
import UserMenu from './header/UserMenu';
import DateTimeRangePicker from './header/DateTimeRangePicker';
import HamburgerMenuIcon from '../images/bars-dark.svg';


function Header({ sidebarOpen, setSidebarOpen }) {

  const timeWindowTodayEnd = new Date();
  const timeWindowTodayStart = new Date(timeWindowTodayEnd.getFullYear(), timeWindowTodayEnd.getMonth(), timeWindowTodayEnd.getDate());
  const [defaultDateTimes, setDateTimes] = useState([timeWindowTodayStart, timeWindowTodayEnd]);
  
  return (
    <header className="sticky top-0 z-30 bg-gray-900 border-b border-slate-200">
      <div>
        <div className="flex items-center justify-between h-16">

          {/* Header: Left side */}
          <div className="flex-none h-16 px-4 py-2 bg-red-900 sm:px-6 lg:px-8 sm:py-2 lg:py-6">

            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 bg-transparent lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => { e.stopPropagation(); setSidebarOpen(!sidebarOpen); }}
            >
              <span className="sr-only">Open sidebar</span>
              <img className="w-12 h-12 bg-white rounded-full" src={HamburgerMenuIcon} width="64" height="64" alt="Menu" />
            </button>

          </div>

          {/* Spacer */}
          <div className="flex-auto h-16 bg-red-900">
            ...
          </div>

          {/* Header: Right side */}
          <div className="flex items-center">
            <DateTimeRangePicker 
              useDateTimes={ defaultDateTimes }
            />
            <Help />
            <UserMenu />
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;