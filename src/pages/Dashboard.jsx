import React from 'react'
import { 
  MdSmartToy as Bot, 
  MdActivity as Activity, 
  MdTrendingUp as TrendingUp, 
  MdAccessTime as Clock,
  MdCheckCircle as CheckCircle,
  MdWarning as AlertTriangle,
  MdFlash as Zap
} from 'react-icons/md'
import StatsCard from '../components/StatsCard'
import AgentStatusCard from '../components/AgentStatusCard'
import ActivityChart from '../components/ActivityChart'
import RecentTasks from '../components/RecentTasks'

export default function Dashboard() {
  const stats = [
    {
      title: 'Active Agents',
      value: '12',
      change: '+2.5%',
      changeType: 'positive',
      icon: Bot,
      color: 'blue'
    },
    {
      title: 'Tasks Completed',
      value: '1,247',
      change: '+12.3%',
      changeType: 'positive',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Success Rate',
      value: '98.2%',
      change: '+0.8%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'purple'
    },
    {
      title: 'Avg Response Time',
      value: '1.2s',
      change: '-0.3s',
      changeType: 'positive',
      icon: Zap,
      color: 'orange'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">AI Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-600">All systems operational</span>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Status */}
        <div className="lg:col-span-2">
          <AgentStatusCard />
        </div>
        
        {/* Recent Tasks */}
        <div>
          <RecentTasks />
        </div>
      </div>

      {/* Activity Chart */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Activity Overview</h3>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-gray-500 hover:text-gray-700">7D</button>
            <button className="text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-md">30D</button>
            <button className="text-sm text-gray-500 hover:text-gray-700">90D</button>
          </div>
        </div>
        <ActivityChart />
      </div>
    </div>
  )
}