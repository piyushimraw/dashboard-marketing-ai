import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

function loading() {
  return (
      <Card className="shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">
            Post Content Details
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-4/6" />
            <div className="h-4 bg-gray-200 rounded w-3/6" />
            <div className="h-4 bg-gray-200 rounded w-2/6" />
            <div className="h-4 bg-gray-200 rounded w-1/6" />
          </div>
        </CardContent>
      </Card>
  );
}

export default loading;
