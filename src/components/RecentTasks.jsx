import React from 'react'
import { MdCheckCircle as CheckCircle, MdAccessTime as Clock, MdWarning as AlertTriangle, MdSmartToy as Bot } from 'react-icons/md'

const tasks = [
  {
    id: 1,
    title: 'Process customer inquiry',
    agent: 'Support Agent',
    status: 'completed',
    time: '2 min ago'
  },
  {
    id: 2,
    title: 'Generate monthly report',
    agent: 'Analytics Agent',
    status: 'in-progress',
    time: '5 min ago'
  },
  {
    id: 3,
    title: 'Send welcome email',
    agent: 'Email Agent',
    status: 'completed',
    time: '8 min ago'
  },
  {
    id: 4,
    title: 'Analyze user feedback',
    agent: 'Data Agent',
    status: 'failed',
    time: '12 min ago'
  },
  {
    id: 5,
    title: 'Update product catalog',
    agent: 'Content Agent',
    status: 'completed',
    time: '15 min ago'
  }
]

const statusConfig = {
  completed: { color: 'text-green-600', bg: 'bg-green-100', icon: CheckCircle },
  'in-progress': { color: 'text-blue-600', bg: 'bg-blue-100', icon: Clock },
  failed: { color: 'text-red-600', bg: 'bg-red-100', icon: AlertTriangle }
}

export default function RecentTasks() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
        <button className="text-sm text-primary-600 hover:text-primary-700">View all</button>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => {
          const config = statusConfig[task.status]
          const StatusIcon = config.icon
          
          return (
            <div key={task.id} className="flex items-start space-x-3">
              <div className={`p-1 rounded-full ${config.bg} mt-1`}>
                <StatusIcon className={`h-3 w-3 ${config.color}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {task.title}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <Bot className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{task.agent}</span>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{task.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}