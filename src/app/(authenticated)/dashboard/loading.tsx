import React from "react";

function Loading() {
  return (
    <>
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-1/2" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 animate-pulse">
        <div className="h-64 bg-gray-200 rounded" />
        <div className="h-64 bg-gray-200 rounded" />
      </div>
    </>
  );
}

export default Loading;
