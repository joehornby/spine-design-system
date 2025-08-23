"use client";
import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  addEdge,
  useNodesState,
  useEdgesState,
  Connection,
} from "reactflow";
import "reactflow/dist/style.css";
import { BaseNode } from "./nodes/BaseNode";
import { NodePalette, type PaletteItem } from "./palette/NodePalette";

const nodeTypes = { base: BaseNode };

export function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node[]>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
  const [id, setId] = useState(1);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow") || "base";
      const bounds = (event.target as HTMLElement).getBoundingClientRect();
      const position = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      const nextId = String(id);
      setId((v) => v + 1);
      setNodes((nds) =>
        nds.concat({
          id: nextId,
          type,
          position,
          data: { title: `${type} ${nextId}` },
        } as Node)
      );
    },
    [id, setNodes]
  );

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const palette: PaletteItem[] = useMemo(
    () => [
      { type: "base", label: "Base node" },
      // extend with domain-specific nodes later
    ],
    []
  );

  return (
    <div className="grid grid-cols-[240px_1fr] gap-2">
      <NodePalette items={palette} />
      <div
        className="h-[600px] rounded-md border border-black/10 dark:border-white/10"
        onDrop={onDrop}
        onDragOver={onDragOver}
        aria-label="Flow canvas"
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          proOptions={{ hideAttribution: true }}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
