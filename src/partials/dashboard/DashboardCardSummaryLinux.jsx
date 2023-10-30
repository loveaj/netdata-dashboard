import React,{useRef, useState, useEffect, useCallback} from 'react';
import logoLinux from '../../images/linux-logo-01.svg';
import SlidingPanel from '../SlidingPanel';

function DashboardCardSummaryLinux({ collectorHost }) {

  const collectorUrl = "http://" + collectorHost + ":19999/host/"

  const [openPanel, setOpenPanel] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(false);
  const [selectedNodeLabel, setSelectedNodeLabel] = useState(false);
  const [selectedNodeOs, setSelectedNodeOs] = useState(false);
  const [selectedCollectorHost, setCollectorHost] = useState(false);
  const [selectedTargetHost, setTargetHost] = useState(false);

  const badgeLabelBgColour ="lightgrey"
  const badgeValueBgColours = "grey:null|78be20<80|e57200<90|d50032"
  const badgeUrlBase = "/api/v1/badge.svg?scale=125&options=percentage&precision=0&value_color=" + badgeValueBgColours + "&label_color=" + badgeLabelBgColour
  const badgeUrlCpu = badgeUrlBase + "&label=CPU&chart=system.cpu"
  const badgeUrlRam = badgeUrlBase + "&dimensions=used&label=RAM&chart=system.ram"
  const badgeUrlDisk = badgeUrlBase + "&dimensions=used&label=Disk&chart=disk_space._"
    
  const [nodeData, setNodeData] = useState([]);
  
  const getNodeData=()=>{
    fetch('/datasets/topology.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then((res)=>res.json())
    .then((topologydata)=>{
      const nodes = topologydata.nodes.filter(function(linuxnode) {
        return linuxnode.os.toUpperCase() == "LINUX";
      });
      console.log(nodes)
      setNodeData(nodes)
    })
  }
  
  useEffect(()=>{
    getNodeData()
  },[])



  const handleOpenPanel = (id, label, os, collectorhost, targethost) => {
    NETDATA.pause();    
    setSelectedNodeId(id);
    setSelectedNodeLabel(label);
    setSelectedNodeOs(os.toUpperCase());
    setCollectorHost(collectorhost);
    setTargetHost(targethost);  
    setOpenPanel(true);
    console.log('The link was '+  name + label + os + collectorhost + targethost);
    NETDATA.unpause();
  };

  const handleClosePanel = () => {
    NETDATA.pause();
    setTargetHost(false);  
    setOpenPanel(false);
    NETDATA.unpause();
  };
  
  // Return a list of Linux server node status summaries
  return (
    <div className="flex-initial bg-white">
      {/* List of server nodes */}

      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {nodeData.map((node) => (
          
          <li key={node.id} className="col-span-1 divide-y rounded-lg shadow-lg divide-stone-300 bg-stone-50 shadow-slate-300">
            <div className="flex items-center justify-between w-full p-6 space-x-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="text-sm font-semibold text-black truncate cursor-pointer hover:text-red-600" onClick={() => {
                    handleOpenPanel(`${node.id}`, `${node.label}`, `${node.os}`, `${node.collectorhost}`, `${node.targethost}`);
                  }}>
                    {node.id.toUpperCase()}
                  </h3>
                </div>
                <p className="mt-1 text-sm text-gray-500 truncate">{node.label}</p>
              </div>
              <img className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-full shadow-inner shadow-gray-700" src={logoLinux} alt="" />
            </div>
            <div>
              <div className="flex py-4 -mt-px divide-x divide-stone-300">
                <div className="flex justify-center flex-1 w-0">
                  <img src={`${collectorUrl}${node.targethost}${badgeUrlCpu}`}></img>
                </div>
                <div className="flex justify-center flex-1 w-0">
                  <img src={`${collectorUrl}${node.targethost}${badgeUrlRam}`}></img>
                </div>
                <div className="flex justify-center flex-1 w-0 -ml-px">
                  <img src={`${collectorUrl}${node.targethost}${badgeUrlDisk}`}></img>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <SlidingPanel openPanel={openPanel} setOpenPanel={setOpenPanel} closePanel={handleClosePanel} nodeId={selectedNodeId} nodeLabel={selectedNodeLabel} nodeOs={selectedNodeOs} collectorHost={selectedCollectorHost} targetHost={selectedTargetHost}/>
      </div>
    </div>
  );
}

export default DashboardCardSummaryLinux;
