import React from 'react'
import { MdSmartToy as Bot, MdCheckCircle as CheckCircle, MdWarning as AlertTriangle, MdAccessTime as Clock, MdPlayArrow as Play, MdPause as Pause } from 'react-icons/md'

const agents = [
  {
    id: 1,
    name: 'Customer Support Agent',
    status: 'active',
    tasks: 23,
    uptime: '99.8%',
    lastActive: '2 min ago'
  },
  {
    id: 2,
    name: 'Data Analysis Agent',
    status: 'active',
    tasks: 15,
    uptime: '98.5%',
    lastActive: '5 min ago'
  },
  {
    id: 3,
    name: 'Content Generator',
    status: 'warning',
    tasks: 8,
    uptime: '95.2%',
    lastActive: '12 min ago'
  },
  {
    id: 4,
    name: 'Email Automation',
    status: 'inactive',
    tasks: 0,
    uptime: '0%',
    lastActive: '2 hours ago'
  }
]

const statusConfig = {
  active: { color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle },
  warning: { color: 'text-yellow-600', bg: 'bg-yellow-100', icon: AlertTriangle },
  inactive: { color: 'text-gray-600', bg: 'bg-gray-100', icon: Clock }
}

export default function AgentStatusCard() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Agent Status</h3>
        <button className="btn-secondary text-sm">Manage Agents</button>
      </div>

      <div className="space-y-4">
        {agents.map((agent) => {
          const config = statusConfig[agent.status]
          const StatusIcon = config.icon
          
          return (
            <div key={agent.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-gray-400" />
                  <div>
                    <h4 className="font-medium text-gray-900">{agent.name}</h4>
                    <p className="text-sm text-gray-500">Last active: {agent.lastActive}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{agent.tasks}</p>
                  <p className="text-xs text-gray-500">Tasks</p>
                </div>
                
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">{agent.uptime}</p>
                  <p className="text-xs text-gray-500">Uptime</p>
                </div>

                <div className="flex items-center space-x-2">
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full ${config.bg}`}>
                    <StatusIcon className={`h-3 w-3 ${config.color}`} />
                    <span className={`text-xs font-medium capitalize ${config.color}`}>
                      {agent.status}
                    </span>
                  </div>
                  
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    {agent.status === 'active' ? (
                      <Pause className="h-4 w-4" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}