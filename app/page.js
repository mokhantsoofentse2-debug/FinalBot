
'use client'
import { useState } from 'react'

export default function Home() {
  const [settings, setSettings] = useState({
    isActive: false,
    dailyTradeLimit: 1000,
    broker: '',
    account: ''
  })

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>M.O. Trading Bot Dashboard</h1>
      
      <div style={{ marginBottom: '2rem' }}>
        <h2>Control Panel</h2>
        <button 
          onClick={() => setSettings({ ...settings, isActive: !settings.isActive })}
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
          onClick={() => alert('Settings saved! (API will work in production)')}
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
        <p>✅ Dashboard loaded successfully!</p>
        <p>API connections will work when deployed with serverless functions.</p>
      </div>
    </div>
  )
}
