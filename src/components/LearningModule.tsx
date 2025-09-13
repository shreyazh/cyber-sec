import React, { useState } from 'react';
import { UserData, LearningModuleData, QuizQuestion } from '../types';
import { playBeep, playSuccess, playError } from '../utils/sounds';

interface LearningModuleProps {
  module: LearningModuleData;
  user: UserData;
  onComplete: (moduleId: string, score: number) => void;
  onBack: () => void;
}

const LearningModule: React.FC<LearningModuleProps> = ({ 
  module, 
  user, 
  onComplete, 
  onBack 
}) => {
  const [currentSection, setCurrentSection] = useState<'intro' | 'content' | 'quiz' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizScore, setQuizScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const isCompleted = user.completedModules.includes(module.id);

  const handleStartContent = () => {
    setCurrentSection('content');
    playBeep();
  };

  const handleStartQuiz = () => {
    setCurrentSection('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setQuizScore(0);
    playBeep();
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const currentQuestion = module.quiz[currentQuestionIndex];
    const newAnswers = [...userAnswers, answerIndex];
    setUserAnswers(newAnswers);
    
    if (answerIndex === currentQuestion.correctAnswer) {
      setQuizScore(prev => prev + currentQuestion.points);
      playSuccess();
    } else {
      playError();
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    
    if (currentQuestionIndex < module.quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      playBeep();
    } else {
      // Quiz completed
      setCurrentSection('results');
      if (!isCompleted) {
        onComplete(module.id, quizScore);
      }
    }
  };

  const renderIntro = () => (
    <div className="module-intro">
      <div className="module-header-full">
        <h1 className="module-title-large">{module.title}</h1>
        <div className="module-meta">
          <span className="difficulty-badge">{module.difficulty}</span>
          <span className="category-badge">{module.category}</span>
          {isCompleted && <span className="completed-badge">✓ COMPLETED</span>}
        </div>
      </div>
      
      <div className="module-description-full">
        {module.description}
      </div>
      
      <div className="module-overview">
        <h3>MISSION BRIEFING:</h3>
        <ul className="briefing-list">
          {module.videoUrl && <li>📺 Training Video Available</li>}
          <li>📚 {module.articleLinks.length} Reference Materials</li>
          <li>🎯 {module.quiz.length} Challenge Questions</li>
          <li>🏆 Max Score: {module.maxScore} Points</li>
        </ul>
      </div>
      
      <div className="action-buttons">
        <button 
          className="primary-btn large"
          onClick={handleStartContent}
        >
          BEGIN MISSION
        </button>
        <button 
          className="secondary-btn large"
          onClick={onBack}
        >
          ABORT MISSION
        </button>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="module-content">
      <div className="content-header">
        <h2>TRAINING MATERIALS</h2>
        <div className="section-indicator">
          SECTION 1 OF 2
        </div>
      </div>
      
      {module.videoUrl && (
        <div className="video-section">
          <h3>📺 TRAINING VIDEO</h3>
          <div className="video-container">
            <iframe
              src={module.videoUrl}
              title="Training Video"
              className="training-video"
              allowFullScreen
            />
          </div>
        </div>
      )}
      
      <div className="resources-section">
        <h3>📚 REFERENCE MATERIALS</h3>
        <div className="resource-links">
          {module.articleLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
              onClick={() => playBeep()}
            >
              <span className="link-icon">🔗</span>
              {link.title}
              <span className="external-icon">↗</span>
            </a>
          ))}
        </div>
      </div>
      
      <div className="content-footer">
        <button 
          className="primary-btn large"
          onClick={handleStartQuiz}
        >
          PROCEED TO CHALLENGE
        </button>
      </div>
    </div>
  );

  const renderQuiz = () => {
    const currentQuestion = module.quiz[currentQuestionIndex];
    
    return (
      <div className="quiz-section">
        <div className="quiz-header">
          <h2>SECURITY CHALLENGE</h2>
          <div className="question-counter">
            QUESTION {currentQuestionIndex + 1} OF {module.quiz.length}
          </div>
        </div>
        
        <div className="question-card">
          <div className="question-text">
            {currentQuestion.question}
          </div>
          
          {!showExplanation ? (
            <div className="answer-options">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className="answer-option"
                  onClick={() => handleAnswerSelect(index)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
          ) : (
            <div className="explanation-section">
              <div className={`answer-result ${
                userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer 
                  ? 'correct' : 'incorrect'
              }`}>
                {userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer 
                  ? '✅ CORRECT!' : '❌ INCORRECT'}
              </div>
              
              <div className="explanation">
                <h4>EXPLANATION:</h4>
                <p>{currentQuestion.explanation}</p>
              </div>
              
              <button 
                className="primary-btn"
                onClick={handleNextQuestion}
              >
                {currentQuestionIndex < module.quiz.length - 1 ? 'NEXT QUESTION' : 'VIEW RESULTS'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const percentage = Math.round((quizScore / module.maxScore) * 100);
    const grade = percentage >= 90 ? 'ELITE' : percentage >= 70 ? 'AGENT' : 'ROOKIE';
    
    return (
      <div className="results-section">
        <div className="results-header">
          <h2>MISSION {isCompleted && !userAnswers.length ? 'ALREADY' : ''} COMPLETED</h2>
        </div>
        
        <div className="score-display">
          <div className="final-score">
            {quizScore || user.totalScore} / {module.maxScore}
          </div>
          <div className="percentage">
            {percentage}% ACCURACY
          </div>
          <div className={`grade ${grade.toLowerCase()}`}>
            RANK: {grade}
          </div>
        </div>
        
        <div className="performance-breakdown">
          <h3>PERFORMANCE ANALYSIS</h3>
          <div className="breakdown-stats">
            <div className="stat-row">
              <span>Correct Answers:</span>
              <span>{userAnswers.filter((answer, i) => answer === module.quiz[i]?.correctAnswer).length || 'N/A'}</span>
            </div>
            <div className="stat-row">
              <span>Total Questions:</span>
              <span>{module.quiz.length}</span>
            </div>
            <div className="stat-row">
              <span>Points Earned:</span>
              <span>{quizScore || 'Previous Score'}</span>
            </div>
          </div>
        </div>
        
        <div className="action-buttons">
          <button 
            className="primary-btn large"
            onClick={onBack}
          >
            RETURN TO DASHBOARD
          </button>
          {!isCompleted && (
            <button 
              className="secondary-btn large"
              onClick={() => {
                setCurrentSection('quiz');
                setCurrentQuestionIndex(0);
                setUserAnswers([]);
                setQuizScore(0);
                setShowExplanation(false);
              }}
            >
              RETRY MISSION
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="learning-module">
      <div className="module-navigation">
        <button 
          className="nav-btn back-btn"
          onClick={onBack}
        >
          ← BACK TO BASE
        </button>
        <div className="module-progress">
          <div className={`progress-step ${currentSection === 'intro' ? 'active' : 'completed'}`}>
            BRIEFING
          </div>
          <div className={`progress-step ${currentSection === 'content' ? 'active' : currentSection === 'quiz' || currentSection === 'results' ? 'completed' : ''}`}>
            TRAINING
          </div>
          <div className={`progress-step ${currentSection === 'quiz' ? 'active' : currentSection === 'results' ? 'completed' : ''}`}>
            CHALLENGE
          </div>
          <div className={`progress-step ${currentSection === 'results' ? 'active' : ''}`}>
            RESULTS
          </div>
        </div>
      </div>
      
      {currentSection === 'intro' && renderIntro()}
      {currentSection === 'content' && renderContent()}
      {currentSection === 'quiz' && renderQuiz()}
      {currentSection === 'results' && renderResults()}
    </div>
  );
};

export default LearningModule;