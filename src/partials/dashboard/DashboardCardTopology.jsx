import React,{useRef, useState, useEffect, useCallback} from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import SlidingPanel from '../SlidingPanel';

function DashboardCardTopology() {

  // Keep some state
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [initialCentre, setInitialCentre] =useState(true);
  const forceRef = useRef();
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState(false);
  const [selectedNodeLabel, setSelectedNodeLabel] = useState(false);
  const [selectedNodeOs, setSelectedNodeOs] = useState(false);
  const [collectorHost, setCollectorHost] = useState(false);
  const [targetHost, setTargetHost] = useState(false);


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

  // Read in topology data
  useEffect(() => {
    fetch('/datasets/topology.json').then((res)=>res.json()).then((data)=>{
      const {nodes} = data;
      const {links} = data;
      setGraphData({ nodes, links });
    })
  }, [])

  // Set some force and distance parameters
  useEffect(() => {
    forceRef.current.d3Force("charge").strength(-250);
    forceRef.current.d3Force("link").distance(100);
    forceRef.current.d3Force("charge").distanceMax(100);
  }, []);



  // Draw the node
  const paintNode = useCallback((node, ctx, globalScale) => {
    const nodeid = node.id;
    const fontSize = 10/globalScale;
    ctx.font = `bold ${fontSize}px Sans-Serif`;  
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.beginPath();
    ctx.arc(node.x, node.y, node.scale * 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();

    ctx.lineWidth = 1;
    ctx.strokeStyle = node.colour;
    ctx.stroke();

    ctx.fillStyle = 'gray';
    ctx.fillText(nodeid, node.x, node.y);

  }, []);

  // Return the force node graph
  return (
    <div className="flex-initial bg-white">
      <div className="place-content-center">
        <ForceGraph2D
          graphData={graphData}
          backgroundColor="white"
          width={window.innerWidth*0.6}
          height={window.innerHeight*0.7}
          ref={forceRef}
          cooldownTicks={50}
          nodeRelSize={3}
          linkDirectionalArrowLength={2}
          linkDirectionalArrowRelPos={0.5}
          linkCurvature={0.25}
          linkColor="gray"
          linkWidth={1}
          onEngineStop={() => {
              if (initialCentre) {
                forceRef.current.zoomToFit(400, 50);
              }
              setInitialCentre(false);  
            }
          }
          nodeCanvasObjectMode={() => "after"}
          nodeCanvasObject={paintNode}
          nodeLabel={node => `${node.label}`}
          nodeOs={node => `${node.os}`}
          onNodeClick={node => handleOpenPanel(`${node.id}`, `${node.label}`, `${node.os}`, `${node.collectorhost}`, `${node.targethost}`)}
          onNodeDragEnd={node => {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
          }}
        />
      </div>
      <div>
        <SlidingPanel openPanel={openPanel} setOpenPanel={setOpenPanel} closePanel={handleClosePanel} nodeId={selectedNodeId} nodeLabel={selectedNodeLabel} nodeOs={selectedNodeOs} collectorHost={collectorHost} targetHost={targetHost}/>
      </div>

    </div>
  );
}

export default DashboardCardTopology;
