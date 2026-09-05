import React from "react";

export const GridLines: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none grid grid-cols-4 h-full w-full z-10 px-6 md:px-12">
      <div className="border-l border-dashed border-[#40372e]/25 h-full"></div>
      <div className="border-l border-dashed border-[#40372e]/25 h-full"></div>
      <div className="border-l border-dashed border-[#40372e]/25 h-full"></div>
      <div className="border-l border-r border-dashed border-[#40372e]/25 h-full"></div>
    </div>
  );
};
