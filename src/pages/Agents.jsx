import React, { useState } from 'react'
import { MdSmartToy as Bot, MdAdd as Plus, MdSearch as Search, MdFilterList as Filter, MdMoreVert as MoreVertical, MdPlayArrow as Play, MdPause as Pause, MdSettings as Settings } from 'react-icons/md'

const agents = [
  {
    id: 1,
    name: 'Customer Support Agent',
    description: 'Handles customer inquiries and support tickets',
    status: 'active',
    type: 'Conversational',
    tasksCompleted: 1247,
    successRate: 98.5,
    lastActive: '2 minutes ago',
    avatar: '🤖'
  },
  {
    id: 2,
    name: 'Data Analysis Agent',
    description: 'Processes and analyzes large datasets',
    status: 'active',
    type: 'Analytical',
    tasksCompleted: 856,
    successRate: 96.2,
    lastActive: '5 minutes ago',
    avatar: '📊'
  },
  {
    id: 3,
    name: 'Content Generator',
    description: 'Creates marketing content and blog posts',
    status: 'warning',
    type: 'Creative',
    tasksCompleted: 423,
    successRate: 94.8,
    lastActive: '12 minutes ago',
    avatar: '✍️'
  },
  {
    id: 4,
    name: 'Email Automation',
    description: 'Manages email campaigns and responses',
    status: 'inactive',
    type: 'Automation',
    tasksCompleted: 2156,
    successRate: 99.1,
    lastActive: '2 hours ago',
    avatar: '📧'
  }
]

const statusColors = {
  active: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  inactive: 'bg-gray-100 text-gray-800'
}

export default function Agents() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || agent.type.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesFilter
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">AI Agents</h1>
        <button className="btn-primary flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Agent</span>
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        >
          <option value="all">All Types</option>
          <option value="conversational">Conversational</option>
          <option value="analytical">Analytical</option>
          <option value="creative">Creative</option>
          <option value="automation">Automation</option>
        </select>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{agent.avatar}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${statusColors[agent.status]}`}>
                    {agent.status}
                  </span>
                </div>
              </div>
              
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-4">{agent.description}</p>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Type:</span>
                <span className="font-medium">{agent.type}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tasks Completed:</span>
                <span className="font-medium">{agent.tasksCompleted.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Success Rate:</span>
                <span className="font-medium text-green-600">{agent.successRate}%</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Last Active:</span>
                <span className="font-medium">{agent.lastActive}</span>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  {agent.status === 'active' ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100">
                  <Settings className="h-4 w-4" />
                </button>
              </div>
              
              <button className="btn-secondary text-sm">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}