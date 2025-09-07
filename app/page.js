'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [settings, setSettings] = useState({
    isActive: false,
    dailyTradeLimit: 1000,
    broker: '',
    account: ''
  })
  const [status, setStatus] = useState({})

  useEffect(() => {
    fetchStatus()
  }, [])

  const fetchStatus = async () => {
    try {
      const response = await fetch('/api/trading/status')
      const data = await response.json()
      setStatus(data)
    } catch (error) {
      console.error('Error fetching status:', error)
    }
  }

  const updateSettings = async (newSettings) => {
    try {
      const response = await fetch('/api/trading', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSettings),
      })
      const data = await response.json()
      setSettings(data)
      await fetchStatus()
    } catch (error) {
      console.error('Error updating settings:', error)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>M.O. Trading Bot Dashboard</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Control Panel</h2>
        <button 
          onClick={() => updateSettings({ ...settings, isActive: !settings.isActive })}
          style={{ 
            backgroundColor: settings.isActive ? 'green' : 'red', 
            color: 'white', 
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          {settings.isActive ? 'ON' : 'OFF'}
        </button>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>Settings</h2>
        <div style={{ marginBottom: '1rem' }}>
          <label>Daily Trade Limit: </label>
          <input 
            type="number" 
            value={settings.dailyTradeLimit}
            onChange={(e) => setSettings({ ...settings, dailyTradeLimit: parseInt(e.target.value) })}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Broker: </label>
          <input 
            type="text" 
            value={settings.broker}
            onChange={(e) => setSettings({ ...settings, broker: e.target.value })}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Account: </label>
          <input 
            type="text" 
            value={settings.account}
            onChange={(e) => setSettings({ ...settings, account: e.target.value })}
            style={{ marginLeft: '10px', padding: '5px' }}
          />
        </div>
        <button 
          onClick={() => updateSettings(settings)}
          style={{ 
            backgroundColor: 'blue', 
            color: 'white', 
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Save Settings
        </button>
      </div>

      <div>
        <h2>Status</h2>
        <pre>{JSON.stringify(status, null, 2)}</pre>
      </div>
    </div>
  )
}
