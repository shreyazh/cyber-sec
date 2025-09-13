import React, { useState, useEffect } from 'react';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import LearningModule from './components/LearningModule';
import Leaderboard from './components/Leaderboard';
import TerminalHeader from './components/TerminalHeader';
import { UserData, LearningModuleData } from './types';
import { learningModules } from './data/modules';
import { playBeep, playSuccess, playError } from './utils/sounds';

function App() {
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);
  const [currentView, setCurrentView] = useState<'dashboard' | 'module' | 'leaderboard'>('dashboard');
  const [selectedModule, setSelectedModule] = useState<LearningModuleData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing user session
    const savedUser = localStorage.getItem('cyberSecUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData: UserData) => {
    setCurrentUser(userData);
    localStorage.setItem('cyberSecUser', JSON.stringify(userData));
    playSuccess();
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('cyberSecUser');
    setCurrentView('dashboard');
    playBeep();
  };

  const handleModuleSelect = (module: LearningModuleData) => {
    setSelectedModule(module);
    setCurrentView('module');
    playBeep();
  };

  const handleModuleComplete = (moduleId: string, score: number) => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      completedModules: [...currentUser.completedModules, moduleId],
      totalScore: currentUser.totalScore + score,
      level: Math.floor((currentUser.totalScore + score) / 1000) + 1
    };

    setCurrentUser(updatedUser);
    localStorage.setItem('cyberSecUser', JSON.stringify(updatedUser));
    
    // Update leaderboard
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    const existingIndex = leaderboard.findIndex((user: any) => user.pin === updatedUser.pin);
    
    if (existingIndex >= 0) {
      leaderboard[existingIndex] = updatedUser;
    } else {
      leaderboard.push(updatedUser);
    }
    
    leaderboard.sort((a: any, b: any) => b.totalScore - a.totalScore);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    
    playSuccess();
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedModule(null);
    playBeep();
  };

  if (isLoading) {
    return (
      <div className="cyber-terminal loading-screen">
        <div className="loading-content">
          <div className="ascii-logo">
            ░█▀▀░█░█░█▀▄░█▀▀░█▀▄░░░█▀▀░█▀▀░█▀▀<br/>
            ░█░░░░█░░█▀▄░█▀▀░█▀▄░░░▀▀█░█▀▀░█░░<br/>
            ░▀▀▀░░▀░░▀▀░░▀▀▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀
          </div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
          <p className="loading-text">INITIALIZING MAINFRAME...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="cyber-terminal">
      <TerminalHeader 
        user={currentUser}
        onLogout={handleLogout}
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      
      <main className="terminal-content">
        {currentView === 'dashboard' && (
          <Dashboard
            user={currentUser}
            modules={learningModules}
            onModuleSelect={handleModuleSelect}
          />
        )}
        
        {currentView === 'module' && selectedModule && (
          <LearningModule
            module={selectedModule}
            user={currentUser}
            onComplete={handleModuleComplete}
            onBack={handleBackToDashboard}
          />
        )}
        
        {currentView === 'leaderboard' && (
          <Leaderboard />
        )}
      </main>
      
      <footer className="terminal-footer">
        <div className="system-info">
          CYBERSEC.TERMINAL.V2.1 | USER: {currentUser.handle} | LVL: {currentUser.level}
        </div>
      </footer>
    </div>
  );
}

export default App;