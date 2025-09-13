import React, { useState, useEffect } from 'react';
import { UserData } from '../types';
import { playBeep } from '../utils/sounds';

interface TerminalHeaderProps {
  user: UserData;
  onLogout: () => void;
  currentView: 'dashboard' | 'module' | 'leaderboard';
  onViewChange: (view: 'dashboard' | 'module' | 'leaderboard') => void;
}

const TerminalHeader: React.FC<TerminalHeaderProps> = ({ 
  user, 
  onLogout, 
  currentView, 
  onViewChange 
}) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [commandInput, setCommandInput] = useState('');
  const [showCommandLine, setShowCommandLine] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.toLowerCase().trim();
    
    switch (cmd) {
      case 'help':
        alert(`AVAILABLE COMMANDS:
- dashboard: Return to main dashboard
- leaderboard: View agent rankings  
- logout: End session
- whoami: Display current user info
- clear: Clear command line
- konami: Try the konami code!`);
        break;
      case 'dashboard':
        onViewChange('dashboard');
        playBeep();
        break;
      case 'leaderboard':
        onViewChange('leaderboard');
        playBeep();
        break;
      case 'logout':
        onLogout();
        break;
      case 'whoami':
        alert(`AGENT: ${user.handle}\nPIN: ${user.pin}\nLEVEL: ${user.level}\nSCORE: ${user.totalScore}`);
        break;
      case 'clear':
        setCommandInput('');
        break;
      case 'konami':
        alert('⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️\nEaster egg unlocked! 🥚');
        break;
      default:
        alert(`UNKNOWN COMMAND: ${cmd}\nType 'help' for available commands.`);
    }
    
    setCommandInput('');
    playBeep();
  };

  return (
    <header className="terminal-header">
      <div className="header-top">
        <div className="system-title">
          CYBERSEC.TERMINAL.V2.1
        </div>
        <div className="system-time">
          {currentTime.toLocaleString()}
        </div>
      </div>
      
      <div className="header-nav">
        <div className="nav-buttons">
          <button
            className={`nav-btn ${currentView === 'dashboard' ? 'active' : ''}`}
            onClick={() => {
              onViewChange('dashboard');
              playBeep();
            }}
          >
            DASHBOARD
          </button>
          <button
            className={`nav-btn ${currentView === 'leaderboard' ? 'active' : ''}`}
            onClick={() => {
              onViewChange('leaderboard');
              playBeep();
            }}
          >
            LEADERBOARD
          </button>
          <button
            className="nav-btn command-btn"
            onClick={() => {
              setShowCommandLine(!showCommandLine);
              playBeep();
            }}
          >
            CMD
          </button>
          <button
            className="nav-btn logout-btn"
            onClick={onLogout}
          >
            LOGOUT
          </button>
        </div>
        
        <div className="user-display">
          AGENT: {user.handle} | LVL: {user.level}
        </div>
      </div>
      
      {showCommandLine && (
        <div className="command-line">
          <form onSubmit={handleCommand} className="command-form">
            <span className="command-prompt">root@cybersec:~$ </span>
            <input
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              className="command-input"
              placeholder="enter command..."
              autoFocus
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default TerminalHeader;