import { LearningModuleData } from '../types';

export const learningModules: LearningModuleData[] = [
  {
    id: 'phishing-101',
    title: 'PHISHING DEFENSE PROTOCOL',
    description: 'Learn to identify and defend against phishing attacks, the most common cybersecurity threat.',
    difficulty: 'ROOKIE',
    category: 'EMAIL SECURITY',
    isLocked: false,
    requiredLevel: 1,
    videoUrl: "https://www.youtube.com/embed/nSGQkE67jcg",
    articleLinks: [
      {
        title: 'Phishing Attack Prevention Guide',
        url: 'https://www.ibm.com/think/topics/phishing'
      },
      {
        title: 'Email Security Best Practices',
        url: 'https://www.proofpoint.com/us/threat-reference/email-security'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the primary goal of a phishing attack?',
        options: [
          'To steal personal information or credentials',
          'To slow down computer performance',
          'To display unwanted advertisements',
          'To backup user files'
        ],
        correctAnswer: 0,
        explanation: 'Phishing attacks are designed to trick users into revealing sensitive information like passwords, credit card numbers, or personal data.',
        points: 100
      },
      {
        id: 'q2',
        question: 'Which of these is a red flag in an email that might indicate phishing?',
        options: [
          'Professional email signature',
          'Urgent language demanding immediate action',
          'Proper grammar and spelling',
          'Company logo included'
        ],
        correctAnswer: 1,
        explanation: 'Phishing emails often use urgent, threatening language to pressure recipients into acting quickly without thinking critically.',
        points: 150
      },
      {
        id: 'q3',
        question: 'What should you do if you receive a suspicious email asking for login credentials?',
        options: [
          'Reply with the requested information',
          'Click the link to verify its legitimacy',
          'Delete the email and report it to IT',
          'Forward it to all colleagues as a warning'
        ],
        correctAnswer: 2,
        explanation: 'Always delete suspicious emails and report them to your IT department. Never provide credentials via email.',
        points: 200
      }
    ],
    maxScore: 450
  },
  {
    id: 'password-security',
    title: 'SECURE AUTHENTICATION MATRIX',
    description: 'Master the art of creating and managing strong passwords and multi-factor authentication.',
    difficulty: 'ROOKIE',
    category: 'ACCESS CONTROL',
    isLocked: false,
    requiredLevel: 1,
    videoUrl: 'https://www.youtube.com/embed/3NjQ9b3pgIg',
    articleLinks: [
      {
        title: 'Password Security Guidelines',
        url: 'https://pages.nist.gov/800-63-3/sp800-63b.html'
      },
      {
        title: 'Multi-Factor Authentication Guide',
        url: 'https://aws.amazon.com/what-is/mfa'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What makes a password strong?',
        options: [
          'Using only lowercase letters',
          'Length, complexity, and uniqueness',
          'Including your birth date',
          'Using the same password everywhere'
        ],
        correctAnswer: 1,
        explanation: 'Strong passwords are long (12+ characters), use a mix of character types, and are unique for each account.',
        points: 100
      },
      {
        id: 'q2',
        question: 'What is multi-factor authentication (MFA)?',
        options: [
          'Using multiple passwords',
          'Having multiple user accounts',
          'Using multiple types of credentials to verify identity',
          'Installing multiple antivirus programs'
        ],
        correctAnswer: 2,
        explanation: 'MFA requires two or more different types of credentials: something you know, have, or are.',
        points: 150
      }
    ],
    maxScore: 250
  },
  {
    id: 'social-engineering',
    title: 'HUMAN VULNERABILITY ANALYSIS',
    description: 'Understand and defend against social engineering attacks that target human psychology.',
    difficulty: 'AGENT',
    category: 'BEHAVIORAL SECURITY',
    isLocked: false,
    requiredLevel: 2,
    videoUrl: 'https://www.youtube.com/embed/lc7scxvKQOo',
    articleLinks: [
      {
        title: 'Social Engineering Defense',
        url: 'https://www.sans.org/white-papers/36972/'
      },
      {
        title: 'Psychology of Cybersecurity',
        url: 'https://www.ibm.com/think/insights/hacking-the-mind-why-psychology-matters-to-cybersecurity'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is social engineering in cybersecurity?',
        options: [
          'Building secure social networks',
          'Manipulating people to reveal confidential information',
          'Engineering social media platforms',
          'Creating user-friendly interfaces'
        ],
        correctAnswer: 1,
        explanation: 'Social engineering exploits human psychology and trust to gain unauthorized access to systems or information.',
        points: 200
      },
      {
        id: 'q2',
        question: 'Which technique involves impersonating authority figures?',
        options: [
          'Baiting',
          'Pretexting',
          'Tailgating',
          'Scareware'
        ],
        correctAnswer: 1,
        explanation: 'Pretexting involves creating a fabricated scenario where the attacker impersonates someone in authority.',
        points: 250
      }
    ],
    maxScore: 450
  },
  {
    id: 'malware-analysis',
    title: 'MALWARE IDENTIFICATION PROTOCOL',
    description: 'Learn to identify, analyze, and defend against various types of malicious software.',
    difficulty: 'AGENT',
    category: 'THREAT ANALYSIS',
    isLocked: false,
    requiredLevel: 3,
    videoUrl: 'https://www.youtube.com/embed/-cIxKeJp4xo',
    articleLinks: [
      {
        title: 'Malware Analysis Fundamentals',
        url: 'https://app.letsdefend.io/training/lessons/malware-analysis-fundamentals'
      },
      {
        title: 'Types of Malware',
        url: 'http://crowdstrike.com/en-us/cybersecurity-101/malware/types-of-malware'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the main difference between a virus and a worm?',
        options: [
          'Viruses are harmless, worms are dangerous',
          'Viruses need a host file, worms can replicate independently',
          'Viruses spread faster than worms',
          'Worms only affect email systems'
        ],
        correctAnswer: 1,
        explanation: 'Viruses require a host file to replicate, while worms can spread independently across networks.',
        points: 200
      },
      {
        id: 'q3',
        question: 'What is ransomware designed to do?',
        options: [
          'Steal passwords',
          'Monitor user activity',
          'Encrypt files and demand payment',
          'Delete system files'
        ],
        correctAnswer: 2,
        explanation: 'Ransomware encrypts victim files and demands payment for the decryption key.',
        points: 300
      }
    ],
    maxScore: 500
  },
  {
    id: 'network-security',
    title: 'NETWORK FORTRESS PROTOCOLS',
    description: 'Advanced network security concepts including firewalls, VPNs, and intrusion detection.',
    difficulty: 'ELITE',
    category: 'INFRASTRUCTURE',
    isLocked: true,
    requiredLevel: 5,
    videoUrl: 'https://www.youtube.com/embed/qiQR5rTSshw',
    articleLinks: [
      {
        title: 'Network Security Architecture',
        url: 'https://www.nist.gov/cyberframework'
      },
      {
        title: 'Firewall Configuration Best Practices',
        url: 'https://www.sans.org/white-papers/1217/'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the primary function of a firewall?',
        options: [
          'To speed up internet connection',
          'To filter network traffic based on security rules',
          'To backup network data',
          'To provide wireless connectivity'
        ],
        correctAnswer: 1,
        explanation: 'Firewalls monitor and control incoming and outgoing network traffic based on predetermined security rules.',
        points: 250
      },
      {
        id: 'q2',
        question: 'What does VPN stand for?',
        options: [
          'Virtual Private Network',
          'Very Personal Network',
          'Verified Public Network',
          'Visual Protocol Network'
        ],
        correctAnswer: 0,
        explanation: 'VPN creates a secure, encrypted connection over a less secure network, like the internet.',
        points: 200
      }
    ],
    maxScore: 450
  }
];