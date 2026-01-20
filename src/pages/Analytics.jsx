import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { MdTrendingUp as TrendingUp, MdPeople as Users, MdAccessTime as Clock, MdGpsFixed as Target } from 'react-icons/md'

const performanceData = [
  { name: 'Mon', tasks: 120, success: 115 },
  { name: 'Tue', tasks: 98, success: 94 },
  { name: 'Wed', tasks: 156, success: 148 },
  { name: 'Thu', tasks: 134, success: 128 },
  { name: 'Fri', tasks: 178, success: 172 },
  { name: 'Sat', tasks: 89, success: 85 },
  { name: 'Sun', tasks: 67, success: 64 }
]

const agentTypeData = [
  { name: 'Conversational', value: 35, color: '#3b82f6' },
  { name: 'Analytical', value: 25, color: '#10b981' },
  { name: 'Creative', value: 20, color: '#f59e0b' },
  { name: 'Automation', value: 20, color: '#8b5cf6' }
]

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <div className="flex items-center space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-900">2,847</p>
              <p className="text-sm text-green-600">+12.5% from last week</p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Success Rate</p>
              <p className="text-2xl font-bold text-gray-900">96.8%</p>
              <p className="text-sm text-green-600">+2.1% from last week</p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">1,234</p>
              <p className="text-sm text-green-600">+8.3% from last week</p>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response</p>
              <p className="text-2xl font-bold text-gray-900">1.2s</p>
              <p className="text-sm text-green-600">-0.3s from last week</p>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <Clock className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Weekly Performance</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Bar dataKey="tasks" fill="#3b82f6" name="Total Tasks" />
                <Bar dataKey="success" fill="#10b981" name="Successful Tasks" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Agent Distribution */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Agent Type Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={agentTypeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {agentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Detailed Table */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Agent Performance Details</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Agent Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tasks Completed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Success Rate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg Response Time
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Customer Support Agent
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Conversational
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  1,247
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  98.5%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  0.8s
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Data Analysis Agent
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Analytical
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  856
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  96.2%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  2.1s
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Content Generator
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Creative
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  423
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600">
                  94.8%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  1.5s
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}