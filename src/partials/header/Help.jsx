import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Transition from '../../utils/Transition';

import HelpIcon from '../../images/circle-question-regular-red.svg';


function Help() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex px-4 bg-red-900">
      <button
        ref={trigger}
        className={`w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition duration-150 rounded-full ${dropdownOpen && 'bg-slate-200'}`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Need help?</span>
        <img className="w-8 h-8 bg-white rounded-full" src={HelpIcon} width="32" height="32" alt="Help" />
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <div className="text-xs font-semibold text-black uppercase pt-1.5 pb-2 px-4">Need help?</div>
          <ul>
            <li>
              <Link
                className="flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg className="w-3 h-3 mr-2 text-gray-300 fill-current shrink-0" viewBox="0 0 12 12">
                  <rect y="3" width="12" height="9" rx="1" />
                  <path d="M2 0h8v2H2z" />
                </svg>
                <span>Documentation</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg className="w-3 h-3 mr-2 text-gray-300 fill-current shrink-0" viewBox="0 0 12 12">
                  <path d="M10.5 0h-9A1.5 1.5 0 000 1.5v9A1.5 1.5 0 001.5 12h9a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 0zM10 7L8.207 5.207l-3 3-1.414-1.414 3-3L5 2h5v5z" />
                </svg>
                <span>Support Site</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center px-3 py-1 text-sm font-medium text-gray-700 hover:text-gray-900"
                to="#0"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <svg className="w-3 h-3 mr-2 text-gray-300 fill-current shrink-0" viewBox="0 0 12 12">
                  <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" />
                </svg>
                <span>Contact us</span>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}

export default Help;