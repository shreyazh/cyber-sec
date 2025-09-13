import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  label?: string;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  label, 
  color = '#00ff00' 
}) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className="progress-bar-container">
      {label && <div className="progress-label">{label}</div>}
      <div className="progress-bar">
        <div className="progress-track">
          <div 
            className="progress-fill"
            style={{ 
              width: `${clampedProgress}%`,
              backgroundColor: color
            }}
          />
        </div>
        <div className="progress-text">
          {Math.round(clampedProgress)}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;