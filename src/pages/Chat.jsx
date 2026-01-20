import React, { useState, useRef, useEffect } from 'react'
import { MdSend as Send, MdSmartToy as Bot, MdPerson as User, MdAttachFile as Paperclip, MdMic as Mic, MdMoreVert as MoreVertical } from 'react-icons/md'

const initialMessages = [
  {
    id: 1,
    type: 'bot',
    content: 'Hello! I\'m your AI assistant. How can I help you today?',
    timestamp: '10:30 AM'
  },
  {
    id: 2,
    type: 'user',
    content: 'Can you help me analyze the recent sales data?',
    timestamp: '10:31 AM'
  },
  {
    id: 3,
    type: 'bot',
    content: 'Of course! I\'d be happy to help you analyze your sales data. I can see that your sales have increased by 15% this quarter compared to the previous one. Would you like me to break down the data by product categories or regions?',
    timestamp: '10:31 AM'
  },
  {
    id: 4,
    type: 'user',
    content: 'Please break it down by product categories',
    timestamp: '10:32 AM'
  },
  {
    id: 5,
    type: 'bot',
    content: 'Here\'s the breakdown by product categories:\n\n• Electronics: +22% growth\n• Clothing: +8% growth\n• Home & Garden: +18% growth\n• Books: -3% decline\n• Sports: +12% growth\n\nElectronics and Home & Garden are your top performers this quarter. Would you like me to dive deeper into any specific category?',
    timestamp: '10:32 AM'
  }
]

export default function Chat() {
  const [messages, setMessages] = useState(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: 'I understand your request. Let me process that information and provide you with a detailed response. This is a simulated response for demonstration purposes.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <div className="flex flex-col h-full max-h-[calc(100vh-8rem)]">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white rounded-t-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">AI Assistant</h2>
            <p className="text-sm text-green-600">Online</p>
          </div>
        </div>
        
        <button className="p-2 text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
              message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.type === 'user' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {message.type === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              
              <div className={`px-4 py-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-900 shadow-sm border border-gray-200'
              }`}>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                }`}>
                  {message.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Bot className="h-4 w-4 text-gray-600" />
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t border-gray-200 rounded-b-lg">
        <div className="flex items-end space-x-2">
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Paperclip className="h-5 w-5" />
          </button>
          
          <div className="flex-1 relative">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              rows="1"
              style={{ minHeight: '40px', maxHeight: '120px' }}
            />
          </div>
          
          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Mic className="h-5 w-5" />
          </button>
          
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className="btn-primary p-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}