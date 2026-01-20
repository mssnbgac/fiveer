import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', tasks: 400, success: 380 },
  { name: 'Feb', tasks: 300, success: 290 },
  { name: 'Mar', tasks: 500, success: 485 },
  { name: 'Apr', tasks: 280, success: 275 },
  { name: 'May', tasks: 590, success: 580 },
  { name: 'Jun', tasks: 320, success: 310 },
  { name: 'Jul', tasks: 450, success: 440 },
]

export default function ActivityChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="tasks" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            name="Total Tasks"
          />
          <Line 
            type="monotone" 
            dataKey="success" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            name="Successful Tasks"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}