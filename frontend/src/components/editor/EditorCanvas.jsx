import { useEffect, useCallback, memo, useMemo, useRef, useState } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Panel,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { GripHorizontal, Hand } from "lucide-react";

const wrapper = "flex-1 relative overflow-hidden bg-[#f4fbf5]";

const canvasHint = [
  "bg-white/92 backdrop-blur-[10px]",
  "border border-[#dfe7e1] rounded-[10px]",
  "px-3.5 py-2",
  "text-[0.74rem] text-[#526058] font-bold font-[var(--inter-font)]",
  "flex items-center gap-[6px]",
  "shadow-[0_1px_4px_rgba(0,0,0,0.06)]",
  "whitespace-nowrap",
].join(" ");

const nodeFrameBase = [
  "bg-white rounded-[14px] border border-[#dfe7e1] overflow-hidden",
  "shadow-[0_8px_18px_-5px_rgba(22,32,26,0.08),0_24px_54px_-18px_rgba(22,32,26,0.22)]",
  "transition-[box-shadow,border-color] duration-200",
  "hover:border-[#bfe8c8]",
  "hover:shadow-[0_12px_20px_-6px_rgba(22,32,26,0.1),0_30px_64px_-20px_rgba(22,32,26,0.24)]",
].join(" ");

const nodeBar = [
  "drag-handle__custom",                              // ← drag handle class
  "flex items-center justify-between px-3 py-[6px]",
  "bg-[#fbfdfb] border-b border-[#e5eee7]",
  "cursor-grab active:cursor-grabbing select-none",
].join(" ");

const nodeBarLeft = [
  "flex items-center gap-2",
  "text-[0.72rem] font-black text-[#6a786f] font-[var(--inter-font)]",
].join(" ");

const trafficLights = "flex gap-[5px]";
const loadingOverlay =
  "absolute inset-0 bg-white/74 backdrop-blur-[1px] z-20 pointer-events-none";
const loadingRail =
  "absolute top-0 left-0 h-[3px] w-full bg-[#eaf9ee] overflow-hidden";

const getViewportWidth = (viewport) => {
  if (viewport === "mobile") return 375;
  if (viewport === "tablet") return 768;
  return 1280;
};

const getViewportMinHeight = (viewport) => {
  if (viewport === "mobile") return 680;
  if (viewport === "tablet") return 760;
  return 860;
};

// ── Custom Node ────────────────────────────────────────────────

const ComponentNode = memo(({ data }) => {
  const { config, variantName, viewport, getCode } = data;
  const width = getViewportWidth(viewport);
  const minHeight = getViewportMinHeight(viewport);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(8);
  const progressTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  const srcdoc = useMemo(
    () => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet"/>
  <style>* { margin: 0; padding: 0; box-sizing: border-box; }</style>
</head>
<body>
  ${getCode(config)}
  <script>
    (function () {
      document.addEventListener("click", function (event) {
        var anchor = event.target.closest("a");
        if (anchor) {
          event.preventDefault();
          anchor.setAttribute("href", "#");
          return;
        }

        var button = event.target.closest("button");
        if (button && (!button.type || button.type.toLowerCase() === "submit")) {
          event.preventDefault();
        }
      }, true);

      document.addEventListener("submit", function (event) {
        event.preventDefault();
      }, true);
    })();
  </script>
</body>
</html>`,
    [config, getCode],
  );

  useEffect(() => {
    setIsLoading(true);
    setProgress(8);

    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    progressTimerRef.current = setInterval(() => {
      setProgress((prev) => (prev >= 90 ? prev : Math.min(prev + 6, 90)));
    }, 120);

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [srcdoc]);

  const handleLoad = useCallback((event) => {
    try {
      const doc = event.target.contentDocument;
      if (doc?.documentElement) {
        const htmlEl = doc.documentElement;
        const bodyEl = doc.body;
        const measuredHeight = Math.max(
          htmlEl.scrollHeight || 0,
          htmlEl.offsetHeight || 0,
          htmlEl.clientHeight || 0,
          bodyEl?.scrollHeight || 0,
          bodyEl?.offsetHeight || 0,
          bodyEl?.clientHeight || 0,
          minHeight,
        );
        event.target.style.height = measuredHeight + "px";
      }
    } catch {
      // ignore cross-document sizing errors
    } finally {
      setProgress(100);
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => setIsLoading(false), 180);
    }
  }, [minHeight]);

  return (
    <div className={`${nodeFrameBase} relative`} style={{ width: `${width}px` }}>
      {/* Title bar — drag handle */}
      <div className={nodeBar}>
        <div className={nodeBarLeft}>
          <GripHorizontal size={12} className="text-[#94a3b8]" />
          {variantName}
        </div>
        <div className={trafficLights}>
          <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#28c840]" />
        </div>
      </div>

      {/* Iframe — nodrag prevents drag conflicts with preview content */}
      <div className="nodrag nopan">
        <iframe
          srcDoc={srcdoc}
          width={width}
          style={{
            display: "block",
            border: "none",
            width: `${width}px`,
            height: `${minHeight}px`,
          }}
          onLoad={handleLoad}
          title={variantName}
        />
      </div>
      {isLoading && (
        <div className={loadingOverlay}>
          <div className={loadingRail}>
            <div
              className="h-full bg-[#16a34a] transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
});

ComponentNode.displayName = "ComponentNode";
const nodeTypes = { componentNode: ComponentNode };

const RF_STYLES = `
  .react-flow__attribution          { display: none !important; }
  .react-flow__controls             { box-shadow: 0 12px 28px rgba(22,32,26,0.10); border-radius: 12px; border: 1px solid #dfe7e1; overflow: hidden; }
  .react-flow__controls-button      { background: #fff; border-bottom: 1px solid #edf3ef; color: #26312a; width: 31px; height: 31px; }
  .react-flow__controls-button:hover{ background: #eaf9ee; color: #128d3d; }
  .react-flow__controls-button svg  { width: 12px; height: 12px; }
  .react-flow__minimap              { border-radius: 14px; border: 1px solid #dfe7e1; overflow: hidden; box-shadow: 0 14px 34px rgba(22,32,26,0.08); }
  .react-flow__node                 { cursor: grab; }
  .react-flow__node:active          { cursor: grabbing; }
  .react-flow__node.selected        { outline: none !important; }
  .react-flow__handle               { opacity: 0; pointer-events: none; }
`;

// ── Main Component ─────────────────────────────────────────────

const EditorCanvas = ({ variantData, config, viewport, onZoomChange }) => {
  const initialNodes = [
    {
      id: "component-node",
      type: "componentNode",
      position: { x: 60, y: 60 },
      draggable: true,
      dragHandle: ".drag-handle__custom",      // ← only the title bar drags
      selectable: true,
      data: {
        LiveComponent: variantData.component,
        getCode: variantData.getCode,
        config,
        variantName: variantData.name,
        viewport,
      },
    },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    setNodes((nds) =>
      nds.map((n) =>
        n.id === "component-node"
          ? {
              ...n,
              data: {
                ...n.data,
                config,
                viewport,
                LiveComponent: variantData.component,
                getCode: variantData.getCode,
                variantName: variantData.name,
              },
            }
          : n,
      ),
    );
  }, [config, viewport, variantData, setNodes]);

  const onMoveEnd = useCallback(
    (_, vp) => onZoomChange(Math.round(vp.zoom * 100)),
    [onZoomChange],
  );

  const onInit = useCallback(
    (rf) => onZoomChange(Math.round(rf.getZoom() * 100)),
    [onZoomChange],
  );

  return (
    <div className={wrapper}>
      <style>{RF_STYLES}</style>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onMoveEnd={onMoveEnd}
        onInit={onInit}
        fitView
        fitViewOptions={{ padding: 0.12, maxZoom: 0.9 }}
        minZoom={0.15}
        maxZoom={2}
        nodesConnectable={false}
        elementsSelectable={true}
        panOnDrag={true}
        zoomOnScroll={true}
        panOnScroll={false}
        proOptions={{ hideAttribution: true }}
        nodeDragThreshold={1}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={24}
          size={1.4}
          color="#c7ded0"
          style={{ background: "#f4fbf5" }}
        />
        <Controls position="bottom-left" showInteractive={false} />
        <MiniMap
          position="bottom-right"
          nodeColor="#d6e7da"
          maskColor="rgba(244,251,245,0.88)"
          style={{ width: 140, height: 88 }}
        />
        <Panel position="top-left">
          <div className={canvasHint}>
            <Hand size={12} className="text-[#94a3b8] flex-shrink-0" />
            Drag to pan · Scroll to zoom · Node is draggable
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default EditorCanvas;
