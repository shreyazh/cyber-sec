import React, { useState } from 'react';
import { UserData } from '../types';
import { playBeep, playError, playSuccess } from '../utils/sounds';

interface LoginScreenProps {
  onLogin: (userData: UserData) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [pin, setPin] = useState('');
  const [handle, setHandle] = useState('');
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const generateRandomPin = () => {
    const newPin = Math.floor(1000 + Math.random() * 9000).toString();
    setPin(newPin);
    playBeep();
  };

  const checkPinAvailability = (pinToCheck: string): boolean => {
    const existingUsers = JSON.parse(localStorage.getItem('registeredPins') || '[]');
    return !existingUsers.includes(pinToCheck);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      setError('INVALID PIN FORMAT. MUST BE 4 DIGITS.');
      playError();
      setIsProcessing(false);
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('allUsers') || '{}');

    if (isNewUser) {
      // Registration
      if (!handle.trim()) {
        setError('HANDLE REQUIRED FOR REGISTRATION.');
        playError();
        setIsProcessing(false);
        return;
      }

      if (!checkPinAvailability(pin)) {
        setError('PIN ALREADY EXISTS. GENERATING NEW PIN...');
        playError();
        generateRandomPin();
        setIsProcessing(false);
        return;
      }

      const newUser: UserData = {
        pin,
        handle: handle.toUpperCase(),
        level: 1,
        totalScore: 0,
        completedModules: [],
        badges: [],
        createdAt: new Date().toISOString()
      };

      // Save user data
      existingUsers[pin] = newUser;
      localStorage.setItem('allUsers', JSON.stringify(existingUsers));

      // Save PIN to registered list
      const registeredPins = JSON.parse(localStorage.getItem('registeredPins') || '[]');
      registeredPins.push(pin);
      localStorage.setItem('registeredPins', JSON.stringify(registeredPins));

      onLogin(newUser);
    } else {
      // Login
      if (existingUsers[pin]) {
        onLogin(existingUsers[pin]);
      } else {
        setError('PIN NOT FOUND. CREATE NEW ACCOUNT?');
        playError();
        setIsProcessing(false);
        return;
      }
    }

    setIsProcessing(false);
  };

  const toggleMode = () => {
    setIsNewUser(!isNewUser);
    setError('');
    setPin('');
    setHandle('');
    playBeep();
  };

  return (
    <div className="login-screen">
      <div className="login-container">
        <div className="ascii-banner">
          <pre className="ascii-art">
{`░█▀▀░█░█░█▀▄░█▀▀░█▀▄░░░█▀▀░█▀▀░█▀▀
░█░░░░█░░█▀▄░█▀▀░█▀▄░░░▀▀█░█▀▀░█░░
░▀▀▀░░▀░░▀▀░░▀▀▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀

   ╔═══════════════════════════╗
   ║    SECURE ACCESS PORTAL   ║
   ╚═══════════════════════════╝`}
          </pre>
        </div>

        <div className="terminal-window">
          <div className="window-header">
            <span className="window-title">
              {isNewUser ? 'REGISTRATION PROTOCOL' : 'AUTHENTICATION REQUIRED'}
            </span>
          </div>
          
          <div className="window-content">
            {isProcessing ? (
              <div className="processing-screen">
                <div className="processing-text">
                  {isNewUser ? 'REGISTERING NEW AGENT...' : 'AUTHENTICATING...'}
                </div>
                <div className="progress-dots">
                  <span>.</span><span>.</span><span>.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                  <label className="input-label">
                    &gt; ENTER 4-DIGIT ACCESS CODE:
                  </label>
                  <div className="pin-input-container">
                    <input
                      type="text"
                      value={pin}
                      onChange={(e) => setPin(e.target.value.slice(0, 4))}
                      className="pin-input"
                      placeholder="****"
                      maxLength={4}
                    />
                    {isNewUser && (
                      <button
                        type="button"
                        onClick={generateRandomPin}
                        className="generate-btn"
                      >
                        GENERATE
                      </button>
                    )}
                  </div>
                </div>

                {isNewUser && (
                  <div className="input-group">
                    <label className="input-label">
                      &gt; CHOOSE AGENT HANDLE:
                    </label>
                    <input
                      type="text"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value.slice(0, 12))}
                      className="terminal-input"
                      placeholder="AGENT_NAME"
                      maxLength={12}
                    />
                  </div>
                )}

                {error && (
                  <div className="error-message">
                    ERROR: {error}
                  </div>
                )}

                <div className="button-group">
                  <button type="submit" className="primary-btn">
                    {isNewUser ? 'CREATE AGENT' : 'ACCESS SYSTEM'}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="secondary-btn"
                  >
                    {isNewUser ? 'EXISTING AGENT?' : 'NEW AGENT?'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="system-status">
          <div className="status-line">
            SYSTEM STATUS: <span className="status-ok">OPERATIONAL</span>
          </div>
          <div className="status-line">
            SECURITY LEVEL: <span className="status-warning">MAXIMUM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;