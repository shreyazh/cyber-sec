import React, { useEffect, useState } from 'react';
import { UserData, LearningModuleData } from '../types';
import ProgressBar from './ProgressBar';
import { playBeep } from '../utils/sounds';

interface DashboardProps {
  user: UserData;
  modules: LearningModuleData[];
  onModuleSelect: (module: LearningModuleData) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, modules, onModuleSelect }) => {
  const availableModules = modules.filter(module => 
    !module.isLocked || user.level >= module.requiredLevel
  );
  
  const completedCount = user.completedModules.length;
  const totalModules = modules.length;
  const completionPercentage = (completedCount / totalModules) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'ROOKIE': return '#00ff00';
      case 'AGENT': return '#ffff00';
      case 'ELITE': return '#ff0000';
      default: return '#00ff00';
    }
  };

  const getModuleStatus = (module: LearningModuleData) => {
    if (user.completedModules.includes(module.id)) return 'COMPLETED';
    if (module.isLocked && user.level < module.requiredLevel) return 'LOCKED';
    return 'AVAILABLE';
  };

  const [showBadgeAnimation, setShowBadgeAnimation] = useState(false);
  const [newBadge, setNewBadge] = useState<string | null>(null);
  const [prevBadges, setPrevBadges] = useState(user.badges);

  useEffect(() => {
    if (user.badges.length > prevBadges.length) {
      const latestBadge = user.badges[user.badges.length - 1];
      setNewBadge(latestBadge);
      setShowBadgeAnimation(true);
      setTimeout(() => setShowBadgeAnimation(false), 3500);
    }
    setPrevBadges(user.badges);
    // eslint-disable-next-line
  }, [user.badges]);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="agent-info">
          <h2 className="agent-title">AGENT: {user.handle}</h2>
          <div className="agent-stats">
            <div className="stat-item">
              <span className="stat-label">LEVEL:</span>
              <span className="stat-value">{user.level}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">SCORE:</span>
              <span className="stat-value">{user.totalScore}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">MISSIONS:</span>
              <span className="stat-value">{completedCount}/{totalModules}</span>
            </div>
          </div>
        </div>
        
        <div className="progress-section">
          <h3>OVERALL PROGRESS</h3>
          <ProgressBar 
            progress={completionPercentage} 
            label={`${completedCount} MISSIONS COMPLETED`}
          />
        </div>
      </div>

      <div className="missions-grid">
        <h3 className="section-title">AVAILABLE MISSIONS</h3>
        <div className="modules-container">
          {availableModules.map((module) => {
            const status = getModuleStatus(module);
            const isCompleted = status === 'COMPLETED';
            const isLocked = status === 'LOCKED';
            
            return (
              <div
                key={module.id}
                className={`module-card ${status.toLowerCase()}`}
                onClick={() => {
                  if (!isLocked) {
                    onModuleSelect(module);
                  } else {
                    playBeep();
                  }
                }}
                style={{ cursor: isLocked ? 'not-allowed' : 'pointer' }}
              >
                <div className="module-header">
                  <div className="module-title">{module.title}</div>
                  <div 
                    className="module-difficulty"
                    style={{ color: getDifficultyColor(module.difficulty) }}
                  >
                    {module.difficulty}
                  </div>
                </div>
                
                <div className="module-description">
                  {module.description}
                </div>
                
                <div className="module-footer">
                  <div className="module-category">{module.category}</div>
                  <div className={`module-status ${status.toLowerCase()}`}>
                    {isCompleted && '✓ '}
                    {isLocked && '🔒 '}
                    {status}
                  </div>
                </div>
                
                {isLocked && (
                  <div className="lock-requirement">
                    REQUIRES LEVEL {module.requiredLevel}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="achievements-section">
        <h3 className="section-title">RECENT ACHIEVEMENTS</h3>
        <div className="achievements-grid">
          {user.badges.length > 0 ? (
            user.badges.slice(-3).map((badge, index) => (
              <div key={index} className="achievement-badge real-badge">
                <span className="badge-svg">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="#FFD700" stroke="#B8860B" strokeWidth="4" />
                    <circle cx="24" cy="24" r="14" fill="#fffbe6" stroke="#FFD700" strokeWidth="2" />
                    <text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B8860B">★</text>
                  </svg>
                </span>
                <span className="badge-name">{badge}</span>
              </div>
            ))
          ) : (
            <div className="no-achievements">
              COMPLETE MISSIONS TO EARN BADGES
            </div>
          )}
        </div>
        {showBadgeAnimation && newBadge && (
          <div className="badge-hurray-overlay">
            <div className="badge-hurray-confetti">
              {[...Array(30)].map((_, i) => (
                <span key={i} className={`confetti confetti-${i % 6}`}></span>
              ))}
            </div>
            <div className="badge-hurray-content">
              <div className="achievement-badge real-badge big">
                <span className="badge-svg">
                  <svg width="96" height="96" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="20" fill="#FFD700" stroke="#B8860B" strokeWidth="4" />
                    <circle cx="24" cy="24" r="14" fill="#fffbe6" stroke="#FFD700" strokeWidth="2" />
                    <text x="24" y="29" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B8860B">★</text>
                  </svg>
                </span>
                <span className="badge-name">{newBadge}</span>
              </div>
              <div className="hurray-text">HURRAY! NEW BADGE UNLOCKED!</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
