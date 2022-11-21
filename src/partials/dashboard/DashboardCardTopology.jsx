import React,{useRef, useState,useEffect, useCallback} from 'react';
import ForceGraph2D from 'react-force-graph-2d';


function DashboardCardTopology() {

  // Keep some state
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [initialCentre, setInitialCentre] =useState(true);
  const forceRef = useRef();

  // Read in topology data
  useEffect(() => {
    fetch('/datasets/topology.json').then((res)=>res.json()).then((data)=>{
      const nodes = data.nodes;
      const links = data.links;
      setGraphData({ nodes, links });
    })
  }, [])

  // Set some force and distance parameters
  useEffect(() => {
    forceRef.current.d3Force("charge").strength(-40);
    forceRef.current.d3Force("link").distance(150);
    forceRef.current.d3Force("charge").distanceMax(100);
  }, []);

  // Draw the node
  const paintNode = useCallback((node, ctx, globalScale) => {
    const nodeid = node.id;
    const nodelabel = node.description;
    const fontSize = 10/globalScale;
    const lineHeight = fontSize * 1.2;
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
    <div className="flex-initial bg-white border rounded-sm shadow-lg border-slate-200">
      <div className="px-5 pt-5">
        <h2 className="mb-2 text-lg font-semibold text-slate-800">UAT</h2>
      </div>
      <div classname="place-content-center">
        <ForceGraph2D
          graphData={graphData}
          backgroundColor="white"
          width={window.innerWidth*0.6}
          height={800}
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
          onNodeClick={node => window.location.replace(`${node.dashlink}`)}
          onNodeDragEnd={node => {
            node.fx = node.x;
            node.fy = node.y;
            node.fz = node.z;
          }}
        />
      </div>
    </div>
  );
}

export default DashboardCardTopology;
