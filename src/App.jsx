import React, { useState } from 'react'
import './index.css'

// Utility functions for localStorage
const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error('Error saving to localStorage:', error)
  }
}

const loadFromStorage = (key, defaultValue) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Error loading from localStorage:', error)
    return defaultValue
  }
}

// Navigation Component
function Sidebar({ activeTab, setActiveTab }) {
  const navigation = [
    { name: 'Dashboard', id: 'dashboard', icon: '📊' },
    { name: 'AI Agents', id: 'agents', icon: '🤖' },
    { name: 'Analytics', id: 'analytics', icon: '📈' },
    { name: 'Chat', id: 'chat', icon: '💬' },
    { name: 'Settings', id: 'settings', icon: '⚙️' },
  ]

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-900">AI Dashboard</h1>
      </div>
      
      <nav className="mt-8 px-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

// Dashboard Component
function Dashboard({ theme, cardClasses }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Dashboard</h1>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>All systems operational</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Active Agents</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>12</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600 text-2xl">🤖</div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-green-600">+2.5%</span>
            <span className={`text-sm ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>

        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tasks Completed</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1,247</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 text-green-600 text-2xl">✅</div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-green-600">+12.3%</span>
            <span className={`text-sm ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>

        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Success Rate</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>98.2%</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600 text-2xl">📈</div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-green-600">+0.8%</span>
            <span className={`text-sm ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>

        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Avg Response Time</p>
              <p className={`text-2xl font-bold mt-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1.2s</p>
            </div>
            <div className="p-3 rounded-lg bg-orange-50 text-orange-600 text-2xl">⚡</div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-sm font-medium text-green-600">-0.3s</span>
            <span className={`text-sm ml-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>from last month</span>
          </div>
        </div>
      </div>

      {/* Agent Status */}
      <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Active Agents</h3>
        <div className="space-y-4">
          {[
            { name: 'Customer Support Agent', status: 'active', tasks: 23, uptime: '99.8%' },
            { name: 'Data Analysis Agent', status: 'active', tasks: 15, uptime: '98.5%' },
            { name: 'Content Generator', status: 'warning', tasks: 8, uptime: '95.2%' },
            { name: 'Email Automation', status: 'inactive', tasks: 0, uptime: '0%' }
          ].map((agent, index) => (
            <div key={index} className={`flex items-center justify-between p-4 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">🤖</span>
                <div>
                  <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{agent.name}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Tasks: {agent.tasks} | Uptime: {agent.uptime}</p>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                agent.status === 'active' ? 'bg-green-100 text-green-800' :
                agent.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {agent.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Agents Component
function Agents({ theme, cardClasses }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showConfigModal, setShowConfigModal] = useState(false)
  const [selectedAgent, setSelectedAgent] = useState(null)
  const [notification, setNotification] = useState('')
  
  // Load agents from localStorage or use default data
  const getInitialAgents = () => {
    const savedAgents = localStorage.getItem('aiDashboard_agents')
    if (savedAgents) {
      return JSON.parse(savedAgents)
    }
    // Default agents data
    return [
      { id: 1, name: 'Customer Support Agent', type: 'Conversational', status: 'active', tasks: 1247, success: 98.5, avatar: '🤖', description: 'Handles customer inquiries and support tickets with high accuracy' },
      { id: 2, name: 'Data Analysis Agent', type: 'Analytical', status: 'active', tasks: 856, success: 96.2, avatar: '📊', description: 'Processes and analyzes large datasets for business insights' },
      { id: 3, name: 'Content Generator', type: 'Creative', status: 'warning', tasks: 423, success: 94.8, avatar: '✍️', description: 'Creates marketing content and blog posts automatically' },
      { id: 4, name: 'Email Automation', type: 'Automation', status: 'inactive', tasks: 2156, success: 99.1, avatar: '📧', description: 'Manages email campaigns and automated responses' }
    ]
  }

  const [agents, setAgents] = useState(getInitialAgents)

  // Save agents to localStorage whenever agents change
  React.useEffect(() => {
    localStorage.setItem('aiDashboard_agents', JSON.stringify(agents))
  }, [agents])

  const filteredAgents = agents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleCreateAgent = () => {
    setShowCreateModal(true)
  }

  const handleViewDetails = (agent) => {
    setSelectedAgent(agent)
    setShowDetailsModal(true)
  }

  const handleConfigure = (agent) => {
    setSelectedAgent(agent)
    setShowConfigModal(true)
  }

  const handleConfigSave = (configData) => {
    // Update agent with new configuration
    setAgents(prev => prev.map(agent => 
      agent.id === selectedAgent.id 
        ? { ...agent, ...configData }
        : agent
    ))
    setShowConfigModal(false)
    setNotification(`${selectedAgent.name} configuration updated successfully! ⚙️`)
    setTimeout(() => setNotification(''), 3000)
  }

  const handleCreateSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const agentName = formData.get('agentName')
    const agentType = formData.get('agentType')
    const agentDescription = formData.get('agentDescription')
    
    // Create new agent with proper initialization
    const newAgent = {
      id: Date.now(), // Use timestamp for unique ID
      name: agentName,
      type: agentType.charAt(0).toUpperCase() + agentType.slice(1),
      status: 'active',
      tasks: 0, // New agents start with 0 tasks
      success: 0, // New agents start with 0% success rate
      avatar: getAgentAvatar(agentType),
      description: agentDescription || `A ${agentType} agent designed to help with various tasks`,
      createdAt: new Date().toISOString().split('T')[0] // Today's date
    }
    
    // Add to agents list
    setAgents(prevAgents => [...prevAgents, newAgent])
    setNotification(`${agentName} created successfully! 🎉`)
    setShowCreateModal(false)
    setTimeout(() => setNotification(''), 3000)
  }

  const getAgentAvatar = (type) => {
    const avatars = {
      conversational: '🤖',
      analytical: '📊',
      creative: '✍️',
      automation: '⚙️'
    }
    return avatars[type] || '🤖'
  }

  const handleDeleteAgent = (agentId) => {
    if (confirm('Are you sure you want to delete this agent? This action cannot be undone.')) {
      const agentToDelete = agents.find(a => a.id === agentId)
      setAgents(prevAgents => prevAgents.filter(agent => agent.id !== agentId))
      setNotification(`Agent "${agentToDelete.name}" deleted successfully.`)
      setShowDetailsModal(false)
      setTimeout(() => setNotification(''), 3000)
    }
  }

  return (
    <div className="space-y-6">
      {/* Notification */}
      {notification && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>{notification}</span>
          <button onClick={() => setNotification('')} className="text-green-700 hover:text-green-900">
            ✕
          </button>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Agents</h1>
        <button 
          onClick={handleCreateAgent}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <span>+</span>
          <span>Create Agent</span>
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className={`${cardClasses} rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">{agent.avatar}</div>
                <div>
                  <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{agent.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                    agent.status === 'active' ? 'bg-green-100 text-green-800' :
                    agent.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {agent.status}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Type:</span>
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{agent.type}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Tasks:</span>
                <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{agent.tasks.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Success Rate:</span>
                <span className="font-medium text-green-600">{agent.success}%</span>
              </div>
            </div>

            <div className={`flex items-center justify-between mt-6 pt-4 border-t ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <button 
                onClick={() => handleConfigure(agent)}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                Configure
              </button>
              <button 
                onClick={() => handleViewDetails(agent)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  theme === 'dark' 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Agent Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${cardClasses} rounded-lg p-6 w-full max-w-md`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Create New Agent</h3>
              <button 
                onClick={() => setShowCreateModal(false)}
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Agent Name</label>
                <input
                  type="text"
                  name="agentName"
                  placeholder="e.g., Sales Assistant"
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Agent Type</label>
                <select 
                  name="agentType"
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="conversational">Conversational</option>
                  <option value="analytical">Analytical</option>
                  <option value="creative">Creative</option>
                  <option value="automation">Automation</option>
                </select>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Description</label>
                <textarea
                  name="agentDescription"
                  placeholder="Describe what this agent will do..."
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  rows="3"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Create Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Agent Details Modal */}
      {showDetailsModal && selectedAgent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${cardClasses} rounded-lg p-6 w-full max-w-lg`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Agent Details</h3>
              <button 
                onClick={() => setShowDetailsModal(false)}
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{selectedAgent.avatar}</div>
                <div>
                  <h4 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{selectedAgent.name}</h4>
                  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
                    selectedAgent.status === 'active' ? 'bg-green-100 text-green-800' :
                    selectedAgent.status === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {selectedAgent.status}
                  </span>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h5 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Description</h5>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{selectedAgent.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-900">Tasks Completed</h5>
                  <p className="text-2xl font-bold text-blue-600">{selectedAgent.tasks.toLocaleString()}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-900">Success Rate</h5>
                  <p className="text-2xl font-bold text-green-600">{selectedAgent.success}%</p>
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h5 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Performance Metrics</h5>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Average Response Time:</span>
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1.2s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Uptime:</span>
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>99.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Last Active:</span>
                    <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2 minutes ago</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-end space-x-3 pt-4">
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleConfigure(selectedAgent)
                    setShowDetailsModal(false)
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Configure Agent
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Agent Configuration Modal */}
      {showConfigModal && selectedAgent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className={`${cardClasses} rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Configure {selectedAgent.name}
              </h3>
              <button 
                onClick={() => setShowConfigModal(false)}
                className={`${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const configData = {
                name: formData.get('agentName'),
                description: formData.get('agentDescription'),
                status: formData.get('agentStatus'),
                maxTasks: parseInt(formData.get('maxTasks')),
                responseTime: parseFloat(formData.get('responseTime')),
                priority: formData.get('priority')
              }
              handleConfigSave(configData)
            }} className="space-y-6">
              
              {/* Basic Settings */}
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Basic Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Agent Name
                    </label>
                    <input
                      type="text"
                      name="agentName"
                      defaultValue={selectedAgent.name}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                      required
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Status
                    </label>
                    <select
                      name="agentStatus"
                      defaultValue={selectedAgent.status}
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                      <option value="warning">Warning</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4">
                  <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Description
                  </label>
                  <textarea
                    name="agentDescription"
                    defaultValue={selectedAgent.description}
                    className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      theme === 'dark' 
                        ? 'bg-gray-600 border-gray-500 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                    rows="3"
                  ></textarea>
                </div>
              </div>

              {/* Performance Settings */}
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Performance Settings</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Max Tasks per Hour
                    </label>
                    <input
                      type="number"
                      name="maxTasks"
                      defaultValue="100"
                      min="1"
                      max="1000"
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Response Time (seconds)
                    </label>
                    <input
                      type="number"
                      name="responseTime"
                      defaultValue="1.2"
                      min="0.1"
                      max="10"
                      step="0.1"
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      Priority Level
                    </label>
                    <select
                      name="priority"
                      defaultValue="medium"
                      className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        theme === 'dark' 
                          ? 'bg-gray-600 border-gray-500 text-white' 
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Advanced Settings */}
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Advanced Settings</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Auto-restart on failure</h5>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Automatically restart agent if it encounters errors</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Enable logging</h5>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Log all agent activities for debugging</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Send notifications</h5>
                      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Notify when agent completes tasks or encounters issues</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setShowConfigModal(false)}
                  className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Save Configuration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

// Chat Component
function Chat({ theme, cardClasses, messages, setMessages }) {
  const [inputValue, setInputValue] = useState('')
  const messagesEndRef = React.useRef(null)

  // Auto-scroll to bottom when messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return
    
    const userInput = inputValue.toLowerCase().trim()
    const originalInput = inputValue.trim()
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    
    // Add user message
    setMessages(prevMessages => {
      const newUserMessage = {
        id: Date.now(),
        type: 'user',
        content: originalInput,
        time: currentTime
      }
      
      // Generate bot response with precise matching
      let botResponse = ''
      let matchedPattern = 'none'
      
      // EXACT phrase matching first (most specific)
      if (userInput === 'hello' || userInput === 'hi' || userInput === 'hey') {
        botResponse = 'Hello! I\'m your AI Dashboard Assistant. How can I help you today?'
        matchedPattern = 'greeting'
      }
      else if (userInput === 'help' || userInput === 'help me') {
        botResponse = 'I can help with: 📊 Dashboard, 🤖 Agents, 📈 Analytics, ⚙️ Settings, 💬 Chat. What do you need?'
        matchedPattern = 'help'
      }
      else if (userInput === 'status' || userInput === 'system status') {
        botResponse = '🟢 All systems operational! 12 agents active, 98.2% success rate, 99.8% uptime.'
        matchedPattern = 'status'
      }
      
      // SPECIFIC PHRASES (order matters - most specific first)
      else if (userInput.includes('sales assistant') && userInput.includes('productive')) {
        botResponse = 'The Sales Assistant is quite productive! It handles 423 tasks with 94.8% success rate. It\'s one of our efficient agents for customer inquiries and order processing.'
        matchedPattern = 'sales-assistant-productive'
      }
      else if (userInput.includes('productive assistant') || userInput === 'productive assistant?') {
        botResponse = 'Your most productive assistant is the Email Automation agent with 2,156 completed tasks! It leads in volume, followed by Customer Support (1,247 tasks). Which agent\'s productivity interests you?'
        matchedPattern = 'productive-assistant'
      }
      else if (userInput.includes('sales assistant') || userInput === 'what about sales assistant?' || userInput === 'sales assistant?') {
        const salesResponses = [
          'Sales Assistant overview: ✅ Active status, 423 completed tasks, 94.8% success rate. It specializes in product inquiries, order processing, and customer support.',
          'Your Sales Assistant is performing well! Current stats: 423 tasks done, 94.8% success rate, handling customer inquiries efficiently. Need configuration help?',
          'Sales Assistant metrics: 423 tasks completed, 94.8% success rate, currently managing 15 active conversations. It\'s optimized for sales support and order management.'
        ]
        botResponse = salesResponses[Math.floor(Math.random() * salesResponses.length)]
        matchedPattern = 'sales-assistant'
      }
      
      // BROADER CATEGORIES (only if no specific match above)
      else if (userInput.includes('how many') && (userInput.includes('product') || userInput.includes('sold'))) {
        botResponse = 'Sales numbers: 1,247 products sold this month, 856 active listings, $127,450 total revenue. Daily average: 41 sales.'
        matchedPattern = 'product-count'
      }
      else if (userInput.includes('agent') && (userInput.includes('create') || userInput.includes('new'))) {
        botResponse = 'To create a new agent: Go to AI Agents page → Click "Create Agent" → Choose type → Configure. What type do you need?'
        matchedPattern = 'create-agent'
      }
      else if (userInput.includes('agent') && (userInput.includes('list') || userInput.includes('show'))) {
        botResponse = 'Your agents: Customer Support (1,247 tasks), Data Analysis (856 tasks), Content Generator (423 tasks), Email Automation (2,156 tasks).'
        matchedPattern = 'list-agents'
      }
      else if (userInput.includes('analytics') || userInput.includes('analytic')) {
        botResponse = 'Analytics summary: 98.2% success rate, 2,847 total tasks, 12% monthly growth. Visit Analytics page for detailed charts!'
        matchedPattern = 'analytics'
      }
      else if (userInput.includes('time') || userInput.includes('date')) {
        const now = new Date()
        botResponse = `Current time: ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}. System uptime: 99.8%.`
        matchedPattern = 'time'
      }
      else if (userInput.includes('joke') || userInput.includes('funny')) {
        const jokes = [
          'Why did the AI cross the road? To get to the other site! 😄',
          'What\'s an AI\'s favorite music? Algo-rhythms! 🎵',
          'Why don\'t AIs ever panic? They always stay calm and collected! 😎'
        ]
        botResponse = jokes[Math.floor(Math.random() * jokes.length)]
        matchedPattern = 'joke'
      }
      
      // SINGLE WORD MATCHES (most general)
      else if (userInput === 'sales' || userInput === 'sales?') {
        botResponse = 'Sales overview: 15% quarterly growth, 1,247 transactions, $127,450 revenue. Your sales performance is strong!'
        matchedPattern = 'sales-general'
      }
      else if (userInput === 'agents' || userInput === 'agent' || userInput === 'agents?') {
        botResponse = 'You have 12 active AI agents with 98.2% overall success rate. They\'ve completed 2,847 total tasks. Which agent interests you?'
        matchedPattern = 'agents-general'
      }
      else if (userInput === 'productivity' || userInput === 'productive') {
        botResponse = 'System productivity is excellent! 2,847 tasks completed, 98.2% success rate, 12% monthly improvement. All agents performing well!'
        matchedPattern = 'productivity-general'
      }
      
      // FALLBACK RESPONSES (completely different each time)
      else {
        const fallbacks = [
          `Interesting! You asked about "${originalInput}". I can help with dashboard management, agents, analytics, or system status. What would you like to explore?`,
          `I see you mentioned "${originalInput}". Your dashboard is running smoothly (98.2% success rate). Which area can I assist with: agents, sales, or analytics?`,
          `Thanks for asking about "${originalInput}"! I specialize in AI dashboard support. Your system looks great! How can I help you today?`,
          `Regarding "${originalInput}" - I'm here to help! Your metrics are excellent. Would you like help with agents, data analysis, or system configuration?`,
          `You asked about "${originalInput}". As your AI assistant, I can help with dashboard features, agent management, or performance monitoring. What interests you most?`
        ]
        botResponse = fallbacks[Math.floor(Math.random() * fallbacks.length)]
        matchedPattern = 'fallback'
      }
      
      // Debug logging (remove in production)
      console.log(`Input: "${userInput}" | Pattern: ${matchedPattern} | Response: "${botResponse.substring(0, 50)}..."`)
      
      // Add user message immediately
      const updatedMessages = [...prevMessages, newUserMessage]
      
      // Add bot response after delay
      setTimeout(() => {
        setMessages(currentMessages => [...currentMessages, {
          id: Date.now() + 1,
          type: 'bot',
          content: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
      }, 600)
      
      return updatedMessages
    })
    
    setInputValue('')
  }

  return (
    <div className="h-full flex flex-col">
      <div className={`flex items-center justify-between p-4 border-b ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      } ${cardClasses} rounded-t-lg`}>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg">
            🤖
          </div>
          <div>
            <h2 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Assistant</h2>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>
        <button
          onClick={() => {
            setMessages([{
              id: Date.now(),
              type: 'bot',
              content: 'Chat cleared! Hello! I\'m your AI Dashboard Assistant. How can I help you today?',
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }])
          }}
          className={`px-3 py-1 text-xs rounded-lg transition-colors ${
            theme === 'dark' 
              ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          }`}
          title="Clear chat history"
        >
          Clear Chat
        </button>
      </div>

      <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`} style={{ maxHeight: 'calc(100vh - 300px)' }}>
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
              message.type === 'user'
                ? 'bg-blue-600 text-white'
                : theme === 'dark'
                  ? 'bg-gray-700 text-white shadow-sm border border-gray-600'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-200'
            }`}>
              <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.type === 'user' 
                  ? 'text-blue-100' 
                  : theme === 'dark' 
                    ? 'text-gray-400' 
                    : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      <div className={`p-4 border-t ${
        theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
      } ${cardClasses} rounded-b-lg`}>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

// Analytics Component
function Analytics({ theme, cardClasses }) {
  const [selectedMetric, setSelectedMetric] = useState('tasks')
  const [refreshMessage, setRefreshMessage] = useState('')

  const handleRefreshData = () => {
    setRefreshMessage('Refreshing analytics data... 📊')
    setTimeout(() => {
      setRefreshMessage('Analytics data updated successfully! ✅')
      setTimeout(() => setRefreshMessage(''), 3000)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Analytics</h1>
        <button
          onClick={handleRefreshData}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <span>🔄</span>
          <span>Refresh Data</span>
        </button>
      </div>

      {/* Refresh Message */}
      {refreshMessage && (
        <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>{refreshMessage}</span>
          <button onClick={() => setRefreshMessage('')} className="text-blue-700 hover:text-blue-900">
            ✕
          </button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div 
          className={`${cardClasses} rounded-lg shadow-sm border p-6 cursor-pointer transition-all hover:shadow-md ${
            selectedMetric === 'tasks' ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setSelectedMetric('tasks')}
        >
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Performance Metrics</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Tasks</span>
              <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2,847</span>
            </div>
            <div className="flex justify-between">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Success Rate</span>
              <span className="font-semibold text-green-600">96.8%</span>
            </div>
            <div className="flex justify-between">
              <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Active Users</span>
              <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1,234</span>
            </div>
          </div>
        </div>

        <div 
          className={`${cardClasses} rounded-lg shadow-sm border p-6 cursor-pointer transition-all hover:shadow-md ${
            selectedMetric === 'agents' ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setSelectedMetric('agents')}
        >
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Agent Distribution</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Conversational</span>
              <div className="flex items-center space-x-2">
                <div className={`w-20 rounded-full h-2 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <div className="bg-blue-600 h-2 rounded-full" style={{width: '35%'}}></div>
                </div>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>35%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Analytical</span>
              <div className="flex items-center space-x-2">
                <div className={`w-20 rounded-full h-2 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <div className="bg-green-600 h-2 rounded-full" style={{width: '25%'}}></div>
                </div>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>25%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Creative</span>
              <div className="flex items-center space-x-2">
                <div className={`w-20 rounded-full h-2 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <div className="bg-yellow-600 h-2 rounded-full" style={{width: '20%'}}></div>
                </div>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>20%</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className={`${cardClasses} rounded-lg shadow-sm border p-6 cursor-pointer transition-all hover:shadow-md ${
            selectedMetric === 'activity' ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setSelectedMetric('activity')}
        >
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Task completed</span>
              <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>2m ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Agent started</span>
              <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>5m ago</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Warning resolved</span>
              <span className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>8m ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Metric Details */}
      <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {selectedMetric === 'tasks' && 'Task Performance Details'}
          {selectedMetric === 'agents' && 'Agent Distribution Analysis'}
          {selectedMetric === 'activity' && 'Activity Timeline'}
        </h3>
        <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {selectedMetric === 'tasks' && 'Your AI agents have completed 2,847 tasks with an impressive 96.8% success rate. Performance has improved by 12% this month.'}
            {selectedMetric === 'agents' && 'Your agent portfolio is well-balanced with 35% conversational agents leading productivity, followed by 25% analytical and 20% creative agents.'}
            {selectedMetric === 'activity' && 'Recent activity shows consistent performance with regular task completions and proactive system maintenance. All systems are operating optimally.'}
          </p>
        </div>
      </div>
    </div>
  )
}

// Help & Support Component
function HelpSupport({ theme, cardClasses }) {
  const [activeSection, setActiveSection] = useState('getting-started')
  const [searchQuery, setSearchQuery] = useState('')
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'general',
    priority: 'medium',
    description: ''
  })
  const [submitMessage, setSubmitMessage] = useState('')

  const handleTicketSubmit = (e) => {
    e.preventDefault()
    setSubmitMessage('Support ticket submitted successfully! We\'ll get back to you within 24 hours. 🎫')
    setTicketForm({ subject: '', category: 'general', priority: 'medium', description: '' })
    setTimeout(() => setSubmitMessage(''), 5000)
  }

  const faqItems = [
    {
      question: "How do I create a new AI agent?",
      answer: "Navigate to the AI Agents page and click the 'Create Agent' button. Fill in the agent name, select the type (Conversational, Analytical, Creative, or Automation), and provide a description of what the agent will do."
    },
    {
      question: "Why is my agent showing a warning status?",
      answer: "Warning status typically indicates performance issues or configuration problems. Check the agent's success rate and recent activity. You may need to adjust the agent's parameters or update its training data."
    },
    {
      question: "How can I improve my agents' success rate?",
      answer: "Monitor your analytics regularly, provide clear instructions to your agents, ensure proper training data, and regularly update agent configurations based on performance metrics."
    },
    {
      question: "Can I export my analytics data?",
      answer: "Yes! Go to the Analytics page and click the 'Export Data' button. You can export data in CSV, JSON, or PDF formats for further analysis."
    },
    {
      question: "How do I change my account settings?",
      answer: "Visit the Settings page to modify your theme preferences, notification settings, and API configurations. For profile information, use the Profile page."
    }
  ]

  const helpSections = [
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'agents', title: 'Managing Agents', icon: '🤖' },
    { id: 'analytics', title: 'Analytics & Reports', icon: '📊' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' },
    { id: 'api', title: 'API Documentation', icon: '📡' },
    { id: 'faq', title: 'FAQ', icon: '❓' }
  ]

  const renderSectionContent = () => {
    switch(activeSection) {
      case 'getting-started':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Welcome to AI Dashboard! 🎉
            </h3>
            <div className="space-y-4">
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-blue-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Step 1: Explore Your Dashboard
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Start by familiarizing yourself with the main dashboard. Here you'll see an overview of your active agents, completed tasks, and system performance.
                </p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-green-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Step 2: Create Your First Agent
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Navigate to the AI Agents section and click "Create Agent" to set up your first AI assistant. Choose from different types based on your needs.
                </p>
              </div>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-purple-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Step 3: Monitor Performance
                </h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Use the Analytics page to track your agents' performance, success rates, and identify areas for improvement.
                </p>
              </div>
            </div>
          </div>
        )
      case 'agents':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Managing Your AI Agents 🤖
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Agent Types</h4>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• <strong>Conversational:</strong> Handle customer support and chat interactions</li>
                  <li>• <strong>Analytical:</strong> Process data and generate insights</li>
                  <li>• <strong>Creative:</strong> Generate content, images, and creative materials</li>
                  <li>• <strong>Automation:</strong> Handle repetitive tasks and workflows</li>
                </ul>
              </div>
              <div>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Best Practices</h4>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Provide clear, specific instructions for each agent</li>
                  <li>• Regularly monitor performance metrics</li>
                  <li>• Update agent configurations based on results</li>
                  <li>• Use descriptive names for easy identification</li>
                </ul>
              </div>
            </div>
          </div>
        )
      case 'faq':
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Frequently Asked Questions ❓
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className={`${cardClasses} rounded-lg border p-4`}>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.question}
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )
      default:
        return (
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {helpSections.find(s => s.id === activeSection)?.title}
            </h3>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Detailed documentation for this section is coming soon. In the meantime, check out our FAQ or contact support for assistance.
            </p>
          </div>
        )
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Help & Support
        </h1>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              theme === 'dark' 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`}
          />
        </div>
      </div>

      {/* Submit Message */}
      {submitMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>{submitMessage}</span>
          <button onClick={() => setSubmitMessage('')} className="text-green-700 hover:text-green-900">
            ✕
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Help Navigation */}
        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Help Topics
          </h3>
          <nav className="space-y-2">
            {helpSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-3 ${
                  activeSection === section.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span>{section.icon}</span>
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Help Content */}
        <div className={`lg:col-span-3 ${cardClasses} rounded-lg shadow-sm border p-6`}>
          {renderSectionContent()}
        </div>
      </div>

      {/* Contact Support */}
      <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Contact Support 📞
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick Contact Options
            </h4>
            <div className="space-y-3">
              <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <span>📧</span>
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email Support</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>support@aidashboard.com</p>
                </div>
              </div>
              <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <span>💬</span>
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Live Chat</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Available 24/7</p>
                </div>
              </div>
              <div className={`flex items-center space-x-3 p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <span>📞</span>
                <div>
                  <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Phone Support</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>+1 (555) 123-HELP</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Submit a Support Ticket
            </h4>
            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  value={ticketForm.subject}
                  onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <select
                  value={ticketForm.category}
                  onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                  className={`px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="general">General</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing</option>
                  <option value="feature">Feature Request</option>
                </select>
                <select
                  value={ticketForm.priority}
                  onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                  className={`px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Describe your issue or question..."
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Submit Support Ticket
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
function Profile({ theme, cardClasses }) {
  const [isEditing, setIsEditing] = useState(false)
  
  // Load profile data from localStorage or use defaults
  const [profileData, setProfileData] = useState(() => {
    const savedProfile = localStorage.getItem('aiDashboard_profileData')
    if (savedProfile) {
      return JSON.parse(savedProfile)
    }
    return {
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'AI Dashboard Administrator',
      company: 'TechCorp Solutions',
      phone: '+1 (555) 123-4567',
      location: 'San Francisco, CA',
      timezone: 'Pacific Standard Time (PST)',
      joinDate: 'January 2024'
    }
  })
  
  const [saveMessage, setSaveMessage] = useState('')

  // Save profile data to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('aiDashboard_profileData', JSON.stringify(profileData))
  }, [profileData])

  const handleSave = () => {
    setIsEditing(false)
    setSaveMessage('Profile updated successfully! ✅')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Profile</h1>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <span>{isEditing ? '💾' : '✏️'}</span>
          <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
        </button>
      </div>

      {/* Save Message */}
      {saveMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>{saveMessage}</span>
          <button onClick={() => setSaveMessage('')} className="text-green-700 hover:text-green-900">
            ✕
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture & Basic Info */}
        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <div className="text-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-4xl">👤</span>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {profileData.name}
            </h3>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
              {profileData.role}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
              Member since {profileData.joinDate}
            </p>
            
            <div className="mt-6 space-y-2">
              <div className={`flex items-center justify-center space-x-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <span>🏢</span>
                <span>{profileData.company}</span>
              </div>
              <div className={`flex items-center justify-center space-x-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                <span>📍</span>
                <span>{profileData.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className={`lg:col-span-2 ${cardClasses} rounded-lg shadow-sm border p-6`}>
          <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              ) : (
                <p className={`py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.name}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              ) : (
                <p className={`py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.email}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              ) : (
                <p className={`py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.phone}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Company
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              ) : (
                <p className={`py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.company}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Location
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              ) : (
                <p className={`py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.location}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Timezone
              </label>
              {isEditing ? (
                <select
                  value={profileData.timezone}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark' 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="Pacific Standard Time (PST)">Pacific Standard Time (PST)</option>
                  <option value="Mountain Standard Time (MST)">Mountain Standard Time (MST)</option>
                  <option value="Central Standard Time (CST)">Central Standard Time (CST)</option>
                  <option value="Eastern Standard Time (EST)">Eastern Standard Time (EST)</option>
                  <option value="Greenwich Mean Time (GMT)">Greenwich Mean Time (GMT)</option>
                </select>
              ) : (
                <p className={`py-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {profileData.timezone}
                </p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="mt-6 flex items-center justify-end space-x-3">
              <button
                onClick={() => setIsEditing(false)}
                className={`px-4 py-2 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-800'}`}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Account Statistics */}
      <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
        <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Account Statistics
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>12</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Active Agents</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>2,847</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Tasks Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">98.2%</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Success Rate</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>45</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Days Active</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
        <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          Recent Profile Activity
        </h3>
        
        <div className="space-y-4">
          <div className={`flex items-center space-x-4 p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Profile information updated</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>2 hours ago</p>
            </div>
          </div>
          <div className={`flex items-center space-x-4 p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Password changed successfully</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>1 day ago</p>
            </div>
          </div>
          <div className={`flex items-center space-x-4 p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className={`text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>New agent created: Customer Support v2</p>
              <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>3 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
function Settings({ theme, setTheme, cardClasses }) {
  // Load settings from localStorage or use defaults
  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('aiDashboard_emailNotifications')
    return saved ? JSON.parse(saved) : true
  })
  
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem('aiDashboard_apiKey') || ''
  })
  
  const [webhookUrl, setWebhookUrl] = useState(() => {
    return localStorage.getItem('aiDashboard_webhookUrl') || ''
  })
  
  const [saveMessage, setSaveMessage] = useState('')

  // Save settings to localStorage when they change
  React.useEffect(() => {
    localStorage.setItem('aiDashboard_emailNotifications', JSON.stringify(notifications))
  }, [notifications])

  React.useEffect(() => {
    localStorage.setItem('aiDashboard_apiKey', apiKey)
  }, [apiKey])

  React.useEffect(() => {
    localStorage.setItem('aiDashboard_webhookUrl', webhookUrl)
  }, [webhookUrl])

  const handleSaveSettings = () => {
    setSaveMessage('Settings saved successfully! ✅')
    setTimeout(() => setSaveMessage(''), 3000)
  }

  const handleResetDashboard = () => {
    if (confirm('Are you sure you want to reset all dashboard data? This will clear all agents, chat messages, and settings. This action cannot be undone.')) {
      // Clear all localStorage data
      localStorage.removeItem('aiDashboard_agents')
      localStorage.removeItem('aiDashboard_chatMessages')
      localStorage.removeItem('aiDashboard_notifications')
      localStorage.removeItem('aiDashboard_profileData')
      localStorage.removeItem('aiDashboard_emailNotifications')
      localStorage.removeItem('aiDashboard_apiKey')
      localStorage.removeItem('aiDashboard_webhookUrl')
      localStorage.removeItem('aiDashboard_theme')
      localStorage.removeItem('aiDashboard_activeTab')
      
      setSaveMessage('Dashboard reset successfully! Please refresh the page to see changes. 🔄')
      setTimeout(() => {
        window.location.reload()
      }, 2000)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Settings</h1>
      
      {/* Save Message */}
      {saveMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center justify-between">
          <span>{saveMessage}</span>
          <button onClick={() => setSaveMessage('')} className="text-green-700 hover:text-green-900">
            ✕
          </button>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>General Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Theme</label>
              <select 
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
              <p className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                {theme === 'light' && '🌞 Light theme is active'}
                {theme === 'dark' && '🌙 Dark theme is active'}
                {theme === 'auto' && '🔄 Auto theme follows system preference'}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email Notifications</h4>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => {
                    setNotifications(e.target.checked)
                    setSaveMessage(`Email notifications ${e.target.checked ? 'enabled' : 'disabled'} ✅`)
                    setTimeout(() => setSaveMessage(''), 3000)
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>

        <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>API Configuration</h3>
          
          <div className="space-y-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>API Key</label>
              <input
                type="password"
                placeholder="sk-..."
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Webhook URL</label>
              <input
                type="url"
                placeholder="https://your-webhook-url.com"
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
            </div>
            
            <button
              onClick={handleSaveSettings}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>

      {/* Theme Preview */}
      <div className={`${cardClasses} rounded-lg shadow-sm border p-6`}>
        <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Theme Preview - Click to Switch</h3>
        <div className="grid grid-cols-3 gap-4">
          <div 
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
              theme === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setTheme('light')}
          >
            <div className="w-full h-8 bg-white border border-gray-200 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-100 rounded mb-1"></div>
            <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
            <p className="text-xs mt-2 text-center font-medium">🌞 Light</p>
          </div>
          
          <div 
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
              theme === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setTheme('dark')}
          >
            <div className="w-full h-8 bg-gray-800 border border-gray-700 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-700 rounded mb-1"></div>
            <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
            <p className="text-xs mt-2 text-center font-medium">🌙 Dark</p>
          </div>
          
          <div 
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-105 ${
              theme === 'auto' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onClick={() => setTheme('auto')}
          >
            <div className="w-full h-8 bg-gradient-to-r from-white to-gray-800 border border-gray-400 rounded mb-2"></div>
            <div className="w-full h-4 bg-gray-400 rounded mb-1"></div>
            <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
            <p className="text-xs mt-2 text-center font-medium">🔄 Auto</p>
          </div>
        </div>
      </div>

      {/* Reset Dashboard Section */}
      <div className={`${cardClasses} rounded-lg shadow-sm border border-red-200 p-6`}>
        <h3 className={`text-lg font-semibold mb-4 text-red-600`}>Danger Zone</h3>
        <div className="space-y-4">
          <div>
            <h4 className={`font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Reset Dashboard</h4>
            <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              This will permanently delete all your agents, chat history, notifications, profile data, and settings. This action cannot be undone.
            </p>
            <button
              onClick={handleResetDashboard}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <span>🗑️</span>
              <span>Reset All Data</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Login Component
function LoginPage({ onLogin, theme }) {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simulate login validation
    setTimeout(() => {
      if (credentials.username && credentials.password) {
        localStorage.setItem('aiDashboard_isLoggedIn', 'true')
        localStorage.setItem('aiDashboard_loginTime', new Date().toISOString())
        onLogin()
      } else {
        setError('Please enter both username and password')
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.95)',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '400px',
        width: '90%',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤖</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: '#1f2937', fontWeight: '600' }}>
          AI Dashboard
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem' }}>
          Sign in to access your AI agents
        </p>

        <form onSubmit={handleLogin} style={{ textAlign: 'left' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              Username
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              placeholder="Enter your username"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>
              Password
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              placeholder="Enter your password"
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>

          {error && (
            <div style={{
              background: '#fef2f2',
              color: '#dc2626',
              padding: '0.75rem',
              borderRadius: '8px',
              fontSize: '0.9rem',
              marginBottom: '1rem',
              border: '1px solid #fecaca'
            }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              background: isLoading ? '#9ca3af' : '#4f46e5',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease'
            }}
            onMouseOver={(e) => !isLoading && (e.target.style.background = '#4338ca')}
            onMouseOut={(e) => !isLoading && (e.target.style.background = '#4f46e5')}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.8rem', color: '#6b7280', margin: '0 0 0.5rem 0' }}>Demo Credentials:</p>
          <p style={{ fontSize: '0.8rem', color: '#374151', margin: '0' }}>
            Username: <strong>admin</strong> | Password: <strong>demo</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
function App() {
  // Check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('aiDashboard_isLoggedIn') === 'true'
  })

  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem('aiDashboard_activeTab') || 'dashboard'
  })
  
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('aiDashboard_theme') || 'light'
  })
  
  const [showNotifications, setShowNotifications] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const [notification, setNotification] = useState('')
  const [showProfileModal, setShowProfileModal] = useState(false)
  const [showHelpModal, setShowHelpModal] = useState(false)
  
  // Load chat messages from localStorage or use default messages
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem('aiDashboard_chatMessages')
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages)
        // Only keep recent messages (last 10) to avoid clutter
        return parsed.slice(-10)
      } catch (e) {
        // If parsing fails, start fresh
        localStorage.removeItem('aiDashboard_chatMessages')
      }
    }
    return [
      { id: 1, type: 'bot', content: 'Hello! I\'m your AI Dashboard Assistant. I can help you with agent management, analytics, sales data, and system monitoring. What would you like to know?', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
    ]
  })

  // Persistent notifications with localStorage
  const [notifications, setNotifications] = useState(() => {
    const savedNotifications = localStorage.getItem('aiDashboard_notifications')
    if (savedNotifications) {
      return JSON.parse(savedNotifications)
    }
    return [
      { id: 1, title: 'Agent Performance Alert', message: 'Customer Support Agent completed 50 tasks', time: '5 min ago', type: 'success', read: false },
      { id: 2, title: 'System Update', message: 'Dashboard updated to version 2.1.0', time: '1 hour ago', type: 'info', read: false },
      { id: 3, title: 'New Agent Created', message: 'Data Analysis Agent v2 is now active', time: '2 hours ago', type: 'success', read: true },
      { id: 4, title: 'Maintenance Scheduled', message: 'System maintenance at 2 AM tomorrow', time: '1 day ago', type: 'warning', read: true }
    ]
  })

  // Save data to localStorage when state changes
  React.useEffect(() => {
    localStorage.setItem('aiDashboard_activeTab', activeTab)
  }, [activeTab])

  React.useEffect(() => {
    localStorage.setItem('aiDashboard_theme', theme)
  }, [theme])

  React.useEffect(() => {
    localStorage.setItem('aiDashboard_chatMessages', JSON.stringify(chatMessages))
  }, [chatMessages])

  React.useEffect(() => {
    localStorage.setItem('aiDashboard_notifications', JSON.stringify(notifications))
  }, [notifications])

  // Notification actions
  const handleNotificationClick = (notificationId) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    )
    // Smooth notification interaction - no alert needed
    setShowNotifications(false)
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notif => ({ ...notif, read: true })))
  }

  const handleProfileAction = (action) => {
    setShowProfile(false)
    
    switch(action) {
      case 'settings':
        setActiveTab('settings')
        break
      case 'profile':
        setActiveTab('profile')
        setNotification('Profile loaded successfully! 👤')
        setTimeout(() => setNotification(''), 3000)
        break
      case 'dashboard':
        setActiveTab('dashboard')
        break
      case 'help':
        setActiveTab('help')
        setNotification('Help & Support center loaded! 📚')
        setTimeout(() => setNotification(''), 3000)
        break
      case 'signout':
        if (confirm('Are you sure you want to sign out?')) {
          setNotification('Signing out securely... 🔐')
          setTimeout(() => {
            // Clear login session
            localStorage.removeItem('aiDashboard_isLoggedIn')
            localStorage.removeItem('aiDashboard_loginTime')
            localStorage.removeItem('aiDashboard_activeTab')
            
            setNotification('You have been signed out successfully. 👋')
            setTimeout(() => {
              setIsLoggedIn(false)
            }, 1000)
          }, 1500)
        }
        break
      default:
        break
    }
  }

  const unreadCount = notifications.filter(n => !n.read).length

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLogin={() => setIsLoggedIn(true)} theme={theme} />
  }

  const themeClasses = {
    light: 'bg-gray-50 text-gray-900',
    dark: 'bg-gray-900 text-white',
    auto: 'bg-gray-50 text-gray-900' // You can add system preference detection here
  }

  const cardClasses = {
    light: 'bg-white border-gray-200',
    dark: 'bg-gray-800 border-gray-700',
    auto: 'bg-white border-gray-200'
  }

  const sidebarClasses = {
    light: 'bg-white',
    dark: 'bg-gray-800',
    auto: 'bg-white'
  }

  const headerClasses = {
    light: 'bg-white border-gray-200',
    dark: 'bg-gray-800 border-gray-700',
    auto: 'bg-white border-gray-200'
  }

  const renderContent = () => {
    const props = { theme, cardClasses: cardClasses[theme] }
    switch (activeTab) {
      case 'dashboard': return <Dashboard {...props} />
      case 'agents': return <Agents {...props} />
      case 'analytics': return <Analytics {...props} />
      case 'chat': return <Chat {...props} messages={chatMessages} setMessages={setChatMessages} />
      case 'profile': return <Profile {...props} />
      case 'help': return <HelpSupport {...props} />
      case 'settings': return <Settings theme={theme} setTheme={setTheme} cardClasses={cardClasses[theme]} />
      default: return <Dashboard {...props} />
    }
  }

  return (
    <div className={`flex h-screen ${themeClasses[theme]}`}>
      <div className={`w-64 ${sidebarClasses[theme]} shadow-lg h-full`}>
        <div className={`flex items-center justify-center h-16 border-b ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Dashboard</h1>
        </div>
        
        <nav className="mt-8 px-4">
          <ul className="space-y-2">
            {[
              { name: 'Dashboard', id: 'dashboard', icon: '📊' },
              { name: 'AI Agents', id: 'agents', icon: '🤖' },
              { name: 'Analytics', id: 'analytics', icon: '📈' },
              { name: 'Chat', id: 'chat', icon: '💬' },
              { name: 'Profile', id: 'profile', icon: '👤' },
              { name: 'Help & Support', id: 'help', icon: '❓' },
              { name: 'Settings', id: 'settings', icon: '⚙️' },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : theme === 'dark' 
                        ? 'text-gray-300 hover:bg-gray-700' 
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className={`${headerClasses[theme]} shadow-sm border-b relative`}>
          <div className="flex items-center justify-between h-16 px-6">
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Search agents, tasks, or data..."
                onFocus={() => {
                  setNotification('Search is ready! Try searching for agents or tasks... 🔍')
                  setTimeout(() => setNotification(''), 3000)
                }}
                className={`w-80 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  theme === 'dark' 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
            </div>
            <div className="flex items-center space-x-4 relative">
              {/* Notifications Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowNotifications(!showNotifications)
                    setShowProfile(false)
                  }}
                  className="p-2 text-gray-400 hover:text-gray-500 relative"
                >
                  <span className="text-xl">🔔</span>
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className={`absolute right-0 mt-2 w-80 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border rounded-lg shadow-lg z-50`}>
                    <div className={`p-4 border-b ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between">
                        <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          Notifications
                        </h3>
                        <div className="flex items-center space-x-2">
                          {unreadCount > 0 && (
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                              {unreadCount}
                            </span>
                          )}
                          <button
                            onClick={markAllAsRead}
                            className="text-xs text-blue-600 hover:text-blue-700"
                          >
                            Mark all read
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div 
                          key={notification.id} 
                          onClick={() => handleNotificationClick(notification.id)}
                          className={`p-3 border-b ${
                            theme === 'dark' ? 'border-gray-700' : 'border-gray-100'
                          } hover:${
                            theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                          } cursor-pointer transition-colors ${
                            !notification.read ? (theme === 'dark' ? 'bg-gray-750' : 'bg-blue-50') : ''
                          }`}
                        >
                          <div className="flex items-start space-x-3">
                            <div className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === 'success' ? 'bg-green-500' :
                              notification.type === 'warning' ? 'bg-yellow-500' :
                              'bg-blue-500'
                            }`}></div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className={`text-sm font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                  {notification.title}
                                </h4>
                                {!notification.read && (
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                )}
                              </div>
                              <p className={`text-xs ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              } mt-1`}>
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className={`p-3 border-t ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <button 
                        onClick={() => {
                          setShowNotifications(false)
                          setNotification('Loading all notifications... 📋')
                          setTimeout(() => {
                            setNotification('All notifications loaded successfully!')
                            setTimeout(() => setNotification(''), 3000)
                          }, 1000)
                        }}
                        className="w-full text-center text-sm text-blue-600 hover:text-blue-700"
                      >
                        View All Notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setShowProfile(!showProfile)
                    setShowNotifications(false)
                  }}
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <span className="text-white text-sm">👤</span>
                </button>
                
                {showProfile && (
                  <div className={`absolute right-0 mt-2 w-64 ${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                  } border rounded-lg shadow-lg z-50`}>
                    <div className={`p-4 border-b ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-lg">👤</span>
                        </div>
                        <div>
                          <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                            Admin User
                          </h3>
                          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                            admin@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="py-2">
                      <button 
                        onClick={() => handleProfileAction('settings')}
                        className={`w-full text-left px-4 py-2 text-sm hover:${
                          theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
                        } flex items-center space-x-2 transition-colors`}
                      >
                        <span>⚙️</span>
                        <span>Settings</span>
                      </button>
                      
                      <button 
                        onClick={() => handleProfileAction('profile')}
                        className={`w-full text-left px-4 py-2 text-sm hover:${
                          theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
                        } flex items-center space-x-2 transition-colors`}
                      >
                        <span>👤</span>
                        <span>Profile</span>
                      </button>
                      
                      <button 
                        onClick={() => handleProfileAction('dashboard')}
                        className={`w-full text-left px-4 py-2 text-sm hover:${
                          theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
                        } flex items-center space-x-2 transition-colors`}
                      >
                        <span>📊</span>
                        <span>Dashboard</span>
                      </button>
                      
                      <button 
                        onClick={() => handleProfileAction('help')}
                        className={`w-full text-left px-4 py-2 text-sm hover:${
                          theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'
                        } flex items-center space-x-2 transition-colors`}
                      >
                        <span>❓</span>
                        <span>Help & Support</span>
                      </button>
                      
                      <hr className={`my-2 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`} />
                      
                      <button 
                        onClick={() => handleProfileAction('signout')}
                        className={`w-full text-left px-4 py-2 text-sm hover:${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                        } text-red-600 hover:text-red-700 flex items-center space-x-2 transition-colors`}
                      >
                        <span>🚪</span>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Click outside to close dropdowns */}
          {(showNotifications || showProfile) && (
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => {
                setShowNotifications(false)
                setShowProfile(false)
              }}
            ></div>
          )}
        </header>

        {/* Main Content */}
        <main className={`flex-1 overflow-x-hidden overflow-y-auto p-6 ${themeClasses[theme]}`}>
          {/* Global Notification */}
          {notification && (
            <div className="mb-6 bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded-lg flex items-center justify-between animate-pulse">
              <span>{notification}</span>
              <button onClick={() => setNotification('')} className="text-blue-700 hover:text-blue-900">
                ✕
              </button>
            </div>
          )}
          {renderContent()}
        </main>
      </div>
    </div>
  )
}

export default App