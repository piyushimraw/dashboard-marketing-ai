import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

function Loading() {
  return (
    <Card className="shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium">
            Generated Post Previews
          </CardTitle>
        </CardHeader>
        <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg space-y-4">
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
  )
}

export default Loading