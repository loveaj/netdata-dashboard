import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

// Import pages
import Dashboard from './pages/Dashboard';
import ServersLinux from './pages/ServersLinux';

function App() {

  const location = useLocation();

  // Pause Netdata just before page refresh
  useEffect(() => {
    const onPageUnload = () => {
      NETDATA.pause();
    }
 
    window.addEventListener('beforeunload', onPageUnload);
    return () => {
      window.removeEventListener('beforeunload', onPageUnload);
    }
  }, []);

  // Start Netdata once the DOM has completely loaded after refresh
  useEffect(() => {
    const onPageLoad = () => {
      NETDATA.start();
    }

    window.addEventListener("load", onPageLoad);
    // Remove the event listener when component unmounts
    window.addEventListener('load', onPageLoad);
    return () => {
      window.removeEventListener('load', onPageLoad);
    }
  }, []);


  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/infrastructure/ibmi" element={<Dashboard />} />
        <Route exact path="/infrastructure/serverslinux" element={<ServersLinux />} />
      </Routes>
    </>
  );

}

export default App;
