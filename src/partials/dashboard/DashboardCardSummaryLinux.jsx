import React,{useRef, useState, useEffect, useCallback} from 'react';
import SlidingPanel from '../SlidingPanel';

function DashboardCardSummaryLinux() {

  // Keep some state
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(false);
  const [selectedNodeLabel, setSelectedNodeLabel] = useState(false);
  const [selectedNodeOs, setSelectedNodeOs] = useState(false);
  const [collectorHost, setCollectorHost] = useState(false);
  const [targetHost, setTargetHost] = useState(false);

  const [nodeData, setNodeData] = useState([]);
  
  const getNodeData=()=>{
    fetch('/datasets/topology.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(function(response){
      console.log(response)
      return response.json();
    })
    .then(function(theJson) {
      console.log(theJson);
      setNodeData(theJson)
    });
  }
  useEffect(()=>{
    getNodeData()
  },[])
s
  const handleOpenPanel = (id, label, os, collectorhost, targethost) => {
    NETDATA.pause();    
    setSelectedNodeId(id);
    setSelectedNodeLabel(label);
    setSelectedNodeOs(os.toUpperCase());
    setCollectorHost(collectorhost);
    setTargetHost(targethost);  
    setOpenPanel(true);
    NETDATA.unpause();
  };

  const handleClosePanel = () => {
    NETDATA.pause();
    setTargetHost(false);  
    setOpenPanel(false);
    NETDATA.unpause();
  };

/*
  const serverNodes = fetch('/datasets/topology.json').then((res)=>res.json()).then((data)=>{
    const nodeList = data.nodes.map((item) => <p>{item}</p>)
    console.log(nodeList);
  })
*/

  // Return the force node graph
  return (
    <div className="flex-initial bg-white">
      <div className="place-content-center">
        BANANA

      </div>
      <div>
        <SlidingPanel openPanel={openPanel} setOpenPanel={setOpenPanel} closePanel={handleClosePanel} nodeId={selectedNodeId} nodeLabel={selectedNodeLabel} nodeOs={selectedNodeOs} collectorHost={collectorHost} targetHost={targetHost}/>
      </div>

    </div>
  );
}

export default DashboardCardSummaryLinux;
