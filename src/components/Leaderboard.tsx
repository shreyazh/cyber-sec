import React, { useState, useEffect } from 'react';
import { UserData } from '../types';

const Leaderboard: React.FC = () => {
  const [leaderboard, setLeaderboard] = useState<UserData[]>([]);
  const [currentUser, setCurrentUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Load leaderboard data
    const leaderboardData = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    setLeaderboard(leaderboardData.slice(0, 50)); // Top 50

    // Get current user
    const userData = localStorage.getItem('cyberSecUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  const getRankSuffix = (rank: number): string => {
    if (rank % 100 >= 11 && rank % 100 <= 13) return 'TH';
    switch (rank % 10) {
      case 1: return 'ST';
      case 2: return 'ND';
      case 3: return 'RD';
      default: return 'TH';
    }
  };

  const getTrophyIcon = (rank: number): string => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    if (rank <= 10) return '🏆';
    return '📊';
  };

  const currentUserRank = currentUser 
    ? leaderboard.findIndex(user => user.pin === currentUser.pin) + 1 
    : 0;

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <div className="ascii-title">
          <pre>
{`╦  ╔═╗╔═╗╔╦╗╔═╗╦═╗╔╗ ╔═╗╔═╗╦═╗╔╦╗
║  ║╣ ╠═╣ ║║║╣ ╠╦╝╠╩╗║ ║╠═╣╠╦╝ ║║
╩═╝╚═╝╩ ╩═╩╝╚═╝╩╚═╚═╝╚═╝╩ ╩╩╚══╩╝`}
          </pre>
        </div>
        <div className="leaderboard-subtitle">
          TOP CYBERSECURITY AGENTS
        </div>
      </div>

      {currentUser && (
        <div className="user-rank-display">
          <div className="rank-card">
            <div className="rank-info">
              <span className="rank-label">YOUR RANK:</span>
              <span className="rank-number">
                {currentUserRank > 0 ? `${currentUserRank}${getRankSuffix(currentUserRank)}` : 'UNRANKED'}
              </span>
            </div>
            <div className="user-info">
              <span className="user-handle">{currentUser.handle}</span>
              <span className="user-score">{currentUser.totalScore} PTS</span>
            </div>
          </div>
        </div>
      )}

      <div className="leaderboard-table">
        <div className="table-header">
          <div className="header-rank">RANK</div>
          <div className="header-agent">AGENT</div>
          <div className="header-level">LVL</div>
          <div className="header-missions">MISSIONS</div>
          <div className="header-score">SCORE</div>
        </div>

        <div className="table-body">
          {leaderboard.length > 0 ? (
            leaderboard.map((user, index) => {
              const rank = index + 1;
              const isCurrentUser = currentUser?.pin === user.pin;
              
              return (
                <div 
                  key={user.pin} 
                  className={`table-row ${isCurrentUser ? 'current-user' : ''}`}
                >
                  <div className="cell-rank">
                    <span className="trophy">{getTrophyIcon(rank)}</span>
                    <span className="rank-text">
                      {rank}{getRankSuffix(rank)}
                    </span>
                  </div>
                  <div className="cell-agent">
                    <div className="agent-info">
                      <div className="agent-handle">{user.handle}</div>
                      <div className="agent-pin">#{user.pin}</div>
                    </div>
                  </div>
                  <div className="cell-level">{user.level}</div>
                  <div className="cell-missions">{user.completedModules.length}</div>
                  <div className="cell-score">{user.totalScore}</div>
                </div>
              );
            })
          ) : (
            <div className="empty-leaderboard">
              <div className="empty-message">
                NO AGENTS REGISTERED YET
              </div>
              <div className="empty-subtitle">
                BE THE FIRST TO CLIMB THE RANKS!
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="leaderboard-footer">
        <div className="update-info">
          LAST UPDATED: {new Date().toLocaleString()}
        </div>
        <div className="ranking-info">
          RANKINGS BASED ON TOTAL SCORE AND COMPLETED MISSIONS
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;