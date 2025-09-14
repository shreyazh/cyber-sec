import { LearningModuleData } from '../types';

export const learningModules: LearningModuleData[] = [
  // 1. PHISHING DEFENSE PROTOCOL
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
      { title: 'Phishing Attack Prevention Guide', url: 'https://www.ibm.com/think/topics/phishing' },
      { title: 'Email Security Best Practices', url: 'https://www.proofpoint.com/us/threat-reference/email-security' },
      { title: 'How to Recognize and Avoid Phishing Scams', url: 'https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the primary goal of a phishing attack?',
        options: ['To steal personal information or credentials','To slow down computer performance','To display unwanted advertisements','To backup user files'],
        correctAnswer: 0,
        explanation: 'Phishing attacks are designed to trick users into revealing sensitive information like passwords or financial data.',
        points: 100
      },
      {
        id: 'q2',
        question: 'Which of these is a red flag in an email that might indicate phishing?',
        options: ['Professional email signature','Urgent language demanding immediate action','Proper grammar and spelling','Company logo included'],
        correctAnswer: 1,
        explanation: 'Urgency is commonly used by attackers to reduce user caution.',
        points: 150
      },
      {
        id: 'q3',
        question: 'What should you do if you receive a suspicious email asking for login credentials?',
        options: ['Reply with the requested information','Click the link to verify','Delete the email and report it to IT','Forward it to all colleagues'],
        correctAnswer: 2,
        explanation: 'Never interact with suspicious requests—delete and report immediately.',
        points: 200
      },
      {
        id: 'q4',
        question: 'Phishing commonly relies on which factor?',
        options: ['Human curiosity and trust','Hardware vulnerabilities','Slow internet speed','Old operating systems'],
        correctAnswer: 0,
        explanation: 'Phishing exploits human psychology more than technical flaws.',
        points: 200
      },
      {
        id: 'q5',
        question: 'Spear phishing is best described as:',
        options: ['Random bulk phishing','Targeted phishing aimed at specific individuals','Phishing through fake hardware devices','Phishing in the deep web'],
        correctAnswer: 1,
        explanation: 'Spear phishing is highly targeted and customized to trick specific victims.',
        points: 250
      }
    ],
    maxScore: 900
  },

  // 2. SECURE AUTHENTICATION MATRIX
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
      { title: 'Password Security Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
      { title: 'Multi-Factor Authentication Guide', url: 'https://aws.amazon.com/what-is/mfa' },
      { title: 'Tips for Strong Passwords', url: 'https://staysafeonline.org/strongpasswords' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What makes a password strong?',
        options: ['Using only lowercase letters','Length, complexity, and uniqueness','Including your birth date','Using the same password everywhere'],
        correctAnswer: 1,
        explanation: 'Strong passwords are long, unique, and contain mixed character types.',
        points: 100
      },
      {
        id: 'q2',
        question: 'What is multi-factor authentication (MFA)?',
        options: ['Using multiple passwords','Having multiple accounts','Using multiple credential types','Installing many antivirus programs'],
        correctAnswer: 2,
        explanation: 'MFA requires something you know, have, or are.',
        points: 150
      },
      {
        id: 'q3',
        question: 'Which of these is NOT recommended for password management?',
        options: ['Using a password manager','Writing passwords on sticky notes','Creating unique passwords per account','Changing passwords regularly'],
        correctAnswer: 1,
        explanation: 'Writing passwords on paper makes them insecure and prone to theft.',
        points: 200
      },
      {
        id: 'q4',
        question: 'Two-factor authentication usually combines:',
        options: ['Two passwords','Password + another factor like OTP','Two usernames','Two antivirus apps'],
        correctAnswer: 1,
        explanation: 'It combines knowledge (password) with possession or biometrics.',
        points: 200
      },
      {
        id: 'q5',
        question: 'Biometric authentication relies on:',
        options: ['Something you know','Something you have','Something you are','Something you guess'],
        correctAnswer: 2,
        explanation: 'Biometrics like fingerprints and facial recognition fall under "something you are."',
        points: 250
      }
    ],
    maxScore: 900
  },

  // 3. HUMAN VULNERABILITY ANALYSIS
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
      { title: 'Social Engineering Defense', url: 'https://www.sans.org/white-papers/36972/' },
      { title: 'Psychology of Cybersecurity', url: 'https://www.ibm.com/think/insights/hacking-the-mind-why-psychology-matters-to-cybersecurity' },
      { title: 'Types of Social Engineering Attacks', url: 'https://www.imperva.com/learn/application-security/social-engineering-attack/' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is social engineering in cybersecurity?',
        options: ['Building secure social networks','Manipulating people to reveal confidential information','Engineering social platforms','Creating friendly interfaces'],
        correctAnswer: 1,
        explanation: 'Social engineering manipulates trust to bypass technical defenses.',
        points: 200
      },
      {
        id: 'q2',
        question: 'Which technique involves impersonating authority figures?',
        options: ['Baiting','Pretexting','Tailgating','Scareware'],
        correctAnswer: 1,
        explanation: 'Pretexting involves fabricated authority.',
        points: 250
      },
      {
        id: 'q3',
        question: 'Tailgating in security means:',
        options: ['Following someone into a secure area without authorization','Monitoring web traffic','Using outdated credentials','Phishing on social media'],
        correctAnswer: 0,
        explanation: 'Tailgating exploits physical access without proper authentication.',
        points: 200
      },
      {
        id: 'q4',
        question: 'Baiting often involves:',
        options: ['Using fake flash drives with malware','Impersonating CEOs','Asking for phone numbers','Hacking routers'],
        correctAnswer: 0,
        explanation: 'Baiting places infected media in public areas for victims to pick up.',
        points: 200
      },
      {
        id: 'q5',
        question: 'Why is social engineering effective?',
        options: ['Humans are predictable','Computers are predictable','It is a new technology','It requires expensive tools'],
        correctAnswer: 0,
        explanation: 'Humans are the weakest link in cybersecurity.',
        points: 250
      }
    ],
    maxScore: 1100
  },

  // 4. MALWARE IDENTIFICATION PROTOCOL
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
      { title: 'Malware Analysis Fundamentals', url: 'https://app.letsdefend.io/training/lessons/malware-analysis-fundamentals' },
      { title: 'Types of Malware', url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/malware/types-of-malware' },
      { title: 'Ransomware Explained', url: 'https://us-cert.cisa.gov/ncas/tips/ST19-001' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the main difference between a virus and a worm?',
        options: ['Viruses are harmless','Viruses need a host file, worms replicate independently','Viruses spread faster','Worms only affect emails'],
        correctAnswer: 1,
        explanation: 'Viruses attach to files, worms spread on their own.',
        points: 200
      },
      {
        id: 'q2',
        question: 'Trojan horse malware is named because:',
        options: ['It looks like a horse icon','It hides malicious code inside legitimate software','It spreads only through gaming apps','It is harmless'],
        correctAnswer: 1,
        explanation: 'Trojans disguise themselves as useful programs.',
        points: 200
      },
      {
        id: 'q3',
        question: 'What is ransomware designed to do?',
        options: ['Steal passwords','Monitor activity','Encrypt files and demand payment','Delete system files'],
        correctAnswer: 2,
        explanation: 'Ransomware blocks access until ransom is paid.',
        points: 300
      },
      {
        id: 'q4',
        question: 'Spyware mainly focuses on:',
        options: ['Encrypting files','Monitoring and stealing user data','Deleting operating systems','Spamming ads only'],
        correctAnswer: 1,
        explanation: 'Spyware stealthily collects information.',
        points: 200
      },
      {
        id: 'q5',
        question: 'Rootkits are dangerous because:',
        options: ['They are games','They grant attackers hidden admin access','They are only for Linux','They fix vulnerabilities'],
        correctAnswer: 1,
        explanation: 'Rootkits run with elevated privileges, making them hard to detect.',
        points: 250
      }
    ],
    maxScore: 1150
  },

  // 5. NETWORK FORTRESS PROTOCOLS
  {
    id: 'network-security',
    title: 'NETWORK FORTRESS PROTOCOLS',
    description: 'Advanced network security concepts including firewalls, VPNs, and intrusion detection.',
    difficulty: 'ELITE',
    category: 'INFRASTRUCTURE',
    isLocked: false,
    requiredLevel: 5,
    videoUrl: 'https://www.youtube.com/embed/qiQR5rTSshw',
    articleLinks: [
      { title: 'Network Security Architecture', url: 'https://www.nist.gov/cyberframework' },
      { title: 'Firewall Configuration Best Practices', url: 'https://www.sans.org/white-papers/1217/' },
      { title: 'Introduction to Intrusion Detection', url: 'https://www.cisco.com/c/en/us/products/security/what-is-ids-ips.html' }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What is the primary function of a firewall?',
        options: ['To speed up internet','To filter traffic','To backup data','To provide WiFi'],
        correctAnswer: 1,
        explanation: 'Firewalls allow or block traffic based on rules.',
        points: 250
      },
      {
        id: 'q2',
        question: 'What does VPN stand for?',
        options: ['Virtual Private Network','Very Personal Network','Verified Public Network','Visual Protocol Network'],
        correctAnswer: 0,
        explanation: 'VPN provides secure, encrypted communication.',
        points: 200
      },
      {
        id: 'q3',
        question: 'IDS stands for:',
        options: ['Internet Defense System','Intrusion Detection System','Internal Data Security','Integrated Defense Suite'],
        correctAnswer: 1,
        explanation: 'IDS detects abnormal or malicious traffic.',
        points: 200
      },
      {
        id: 'q4',
        question: 'What is the key purpose of network segmentation?',
        options: ['Make networks slower','Divide networks to limit attack spread','Allow anyone access','Remove encryption'],
        correctAnswer: 1,
        explanation: 'Segmentation limits damage and isolates systems.',
        points: 200
      },
      {
        id: 'q5',
        question: 'A DMZ in networking refers to:',
        options: ['A demilitarized zone for public-facing servers','A malware quarantine','An encryption algorithm','A firewall plugin'],
        correctAnswer: 0,
        explanation: 'DMZs separate public servers from internal networks.',
        points: 250
      }
    ],
    maxScore: 1100
  },

  // ------------------------------------------------------------
  // 6–15: NEW MODULES
  {
    id: 'cloud-security',
    title: 'CLOUD SHIELD FRAMEWORK',
    description: 'Protect workloads, applications, and data in cloud environments.',
    difficulty: 'AGENT',
    category: 'CLOUD',
    isLocked: false,
    requiredLevel: 4,
    videoUrl: 'https://www.youtube.com/embed/2LaAJq1lB1I',
    articleLinks: [
      { title: 'Cloud Security Alliance Basics', url: 'https://cloudsecurityalliance.org/' },
      { title: 'Shared Responsibility in the Cloud', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
      { title: 'Best Practices for Securing Cloud Workloads', url: 'https://www.microsoft.com/security/blog/' }
    ],
    quiz: [
      { id: 'q1', question: 'What is the shared responsibility model in cloud?', options: ['Provider secures everything','User secures everything','Provider secures infrastructure, user secures data/configs','Nobody secures it'], correctAnswer: 2, explanation: 'Providers secure hardware, users secure apps, data, configs.', points: 200 },
      { id: 'q2', question: 'Cloud misconfiguration leads to:', options: ['Faster apps','Data leaks','Cheaper bills','Better security'], correctAnswer: 1, explanation: 'Many breaches come from misconfigured cloud buckets.', points: 200 },
      { id: 'q3', question: 'Which is a cloud-specific threat?', options: ['SQL Injection','Man-in-the-middle','Insecure APIs','Phishing'], correctAnswer: 2, explanation: 'Insecure APIs expose cloud services.', points: 200 },
      { id: 'q4', question: 'CASB stands for:', options: ['Cloud Access Security Broker','Central Authentication Security Base','Cloud Application Service Backup','Cybersecurity and Blockchain'], correctAnswer: 0, explanation: 'CASB provides visibility and policy enforcement for cloud.', points: 200 },
      { id: 'q5', question: 'Zero trust in cloud means:', options: ['Trust everything inside network','No trust without verification','Only trust admin accounts','Ignore encryption'], correctAnswer: 1, explanation: 'Zero trust = never trust, always verify.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'incident-response',
    title: 'CYBER INCIDENT RESPONSE BLUEPRINT',
    description: 'Steps and strategies for responding to cybersecurity incidents effectively.',
    difficulty: 'AGENT',
    category: 'OPERATIONS',
    isLocked: false,
    requiredLevel: 3,
    videoUrl: 'https://www.youtube.com/embed/qlJ0jHgC2gE',
    articleLinks: [
      { title: 'NIST Computer Security Incident Handling Guide', url: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r2.pdf' },
      { title: 'Cyber Incident Response Best Practices', url: 'https://us-cert.cisa.gov/incidentresponse' },
      { title: 'SANS Incident Response Process', url: 'https://www.sans.org/white-papers/incident-response-cycle/' }
    ],
    quiz: [
      { id: 'q1', question: 'First step in incident response?', options: ['Containment','Preparation','Eradication','Recovery'], correctAnswer: 1, explanation: 'Preparation ensures readiness before incidents occur.', points: 200 },
      { id: 'q2', question: 'Which step involves stopping the attack spread?', options: ['Eradication','Containment','Preparation','Recovery'], correctAnswer: 1, explanation: 'Containment isolates affected systems.', points: 200 },
      { id: 'q3', question: 'Post-incident activity includes:', options: ['System upgrades','Lessons learned review','Erasing all logs','Ignore reporting'], correctAnswer: 1, explanation: 'Lessons learned improve processes.', points: 200 },
      { id: 'q4', question: 'Which team manages incident response?', options: ['IT helpdesk','CIRT/CSIRT','Finance','HR'], correctAnswer: 1, explanation: 'Computer Security Incident Response Team handles it.', points: 200 },
      { id: 'q5', question: 'Indicators of compromise include:', options: ['Unusual traffic','Normal updates','Scheduled backups','OS patches'], correctAnswer: 0, explanation: 'IOC help detect attacks.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'cryptography-fundamentals',
    title: 'CRYPTOGRAPHY ESSENTIALS',
    description: 'Understand encryption, hashing, and cryptographic protocols for data protection.',
    difficulty: 'ROOKIE',
    category: 'DATA SECURITY',
    isLocked: false,
    requiredLevel: 2,
    videoUrl: 'https://www.youtube.com/embed/AQDCe585Lnc',
    articleLinks: [
      { title: 'Encryption Basics', url: 'https://www.khanacademy.org/computing/computer-science/cryptography' },
      { title: 'Symmetric vs Asymmetric Encryption', url: 'https://www.ssl.com/faqs/symmetric-vs-asymmetric-encryption/' },
      { title: 'Hashing Explained', url: 'https://www.cloudflare.com/learning/cryptography/what-is-cryptography/' }
    ],
    quiz: [
      { id: 'q1', question: 'Symmetric encryption uses:', options: ['One key for both encryption and decryption','Two different keys','No keys','Multiple passwords'], correctAnswer: 0, explanation: 'Symmetric uses a single secret key.', points: 200 },
      { id: 'q2', question: 'Which algorithm is asymmetric?', options: ['AES','RSA','DES','3DES'], correctAnswer: 1, explanation: 'RSA uses public and private keys.', points: 200 },
      { id: 'q3', question: 'Hash functions are:', options: ['Reversible','One-way','Encryption keys','Viruses'], correctAnswer: 1, explanation: 'Hashing is irreversible mapping.', points: 200 },
      { id: 'q4', question: 'SSL/TLS uses:', options: ['Symmetric only','Asymmetric only','Combination of both','No encryption'], correctAnswer: 2, explanation: 'TLS uses asymmetric for key exchange, symmetric for data.', points: 200 },
      { id: 'q5', question: 'Salting is used to:', options: ['Add random data to hashes','Encrypt emails','Delete malware','Boost performance'], correctAnswer: 0, explanation: 'Salts make hashes unique and secure.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'web-app-security',
    title: 'WEB APPLICATION ARMOR',
    description: 'Learn about securing web apps against OWASP Top 10 threats.',
    difficulty: 'AGENT',
    category: 'APPLICATION SECURITY',
    isLocked: false,
    requiredLevel: 4,
    videoUrl: 'https://www.youtube.com/embed/X3W3atfLr7E',
    articleLinks: [
      { title: 'OWASP Top 10', url: 'https://owasp.org/Top10/' },
      { title: 'SQL Injection Explained', url: 'https://portswigger.net/web-security/sql-injection' },
      { title: 'Cross-Site Scripting Guide', url: 'https://owasp.org/www-community/attacks/xss/' }
    ],
    quiz: [
      { id: 'q1', question: 'SQL Injection exploits:', options: ['Weak database queries','Strong passwords','Network firewalls','Antivirus programs'], correctAnswer: 0, explanation: 'It targets unvalidated database queries.', points: 200 },
      { id: 'q2', question: 'XSS allows attackers to:', options: ['Insert malicious scripts','Delete entire databases','Hack routers','Encrypt servers'], correctAnswer: 0, explanation: 'XSS runs code in user browsers.', points: 200 },
      { id: 'q3', question: 'CSRF stands for:', options: ['Cross-Site Request Forgery','Cyber Security Response Framework','Critical Security Risk Factor','Cloud Service Remote Function'], correctAnswer: 0, explanation: 'CSRF tricks users into unwanted actions.', points: 200 },
      { id: 'q4', question: 'Secure coding practices help:', options: ['Prevent vulnerabilities','Slow down devs','Weaken security','Add malware'], correctAnswer: 0, explanation: 'Coding securely reduces exploitable flaws.', points: 200 },
      { id: 'q5', question: 'WAF means:', options: ['Web Application Firewall','Wide Access Framework','Wireless Access Feature','Web Authentication Factor'], correctAnswer: 0, explanation: 'WAF protects web applications from common attacks.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'identity-access',
    title: 'IDENTITY & ACCESS GOVERNANCE',
    description: 'Learn principles of IAM, least privilege, and access control policies.',
    difficulty: 'ROOKIE',
    category: 'ACCESS CONTROL',
    isLocked: false,
    requiredLevel: 2,
    videoUrl: 'https://www.youtube.com/embed/3C2V_G8SzK8',
    articleLinks: [
      { title: 'What is IAM?', url: 'https://www.okta.com/identity-101/what-is-identity-and-access-management/' },
      { title: 'Principle of Least Privilege', url: 'https://www.csoonline.com/article/3434700/least-privilege-principle.html' },
      { title: 'Zero Trust Access', url: 'https://www.crowdstrike.com/cybersecurity-101/zero-trust-security/' }
    ],
    quiz: [
      { id: 'q1', question: 'Least privilege means:', options: ['Giving all access','Giving minimum necessary access','Blocking all users','Allowing full admin rights'], correctAnswer: 1, explanation: 'It limits user access to only what is needed.', points: 200 },
      { id: 'q2', question: 'IAM stands for:', options: ['Identity and Access Management','Internet Access Module','Internal Account Monitoring','Information Assurance Method'], correctAnswer: 0, explanation: 'IAM manages identities and permissions.', points: 200 },
      { id: 'q3', question: 'RBAC means:', options: ['Role-Based Access Control','Rapid Binary Access Check','Read-Based Authentication Control','Remote Backup Access Code'], correctAnswer: 0, explanation: 'RBAC assigns access based on roles.', points: 200 },
      { id: 'q4', question: 'SSO allows:', options: ['Logging in once for multiple systems','Multiple logins for one app','Disabling all accounts','Encrypting all traffic'], correctAnswer: 0, explanation: 'Single Sign-On increases convenience and security.', points: 200 },
      { id: 'q5', question: 'Identity federation connects:', options: ['Multiple identity systems','Only one account','Old passwords','Malware detection'], correctAnswer: 0, explanation: 'It links identity management across orgs.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'endpoint-protection',
    title: 'ENDPOINT DEFENSE MECHANISMS',
    description: 'Protect laptops, mobiles, and IoT devices against cyber threats.',
    difficulty: 'AGENT',
    category: 'DEVICE SECURITY',
    isLocked: false,
    requiredLevel: 3,
    videoUrl: 'https://www.youtube.com/embed/fNj2P9Cs1Zc',
    articleLinks: [
      { title: 'Endpoint Security Overview', url: 'https://www.mcafee.com/enterprise/en-in/security-solutions/endpoint.html' },
      { title: 'Mobile Device Security Best Practices', url: 'https://us-cert.cisa.gov/ncas/tips/ST05-017' },
      { title: 'IoT Security Challenges', url: 'https://www.csoonline.com/article/3532112/iot-security.html' }
    ],
    quiz: [
      { id: 'q1', question: 'What is EDR?', options: ['Endpoint Detection and Response','Encrypted Data Router','External Data Recovery','Email Data Reset'], correctAnswer: 0, explanation: 'EDR monitors and responds to endpoint threats.', points: 200 },
      { id: 'q2', question: 'Common IoT risk:', options: ['Too much encryption','Weak default passwords','High latency','Expensive costs'], correctAnswer: 1, explanation: 'IoT devices often ship with weak defaults.', points: 200 },
      { id: 'q3', question: 'Mobile devices should be secured with:', options: ['No lock screen','Strong passcodes and biometrics','Always-on WiFi','Shared accounts'], correctAnswer: 1, explanation: 'Passwords and biometrics improve device security.', points: 200 },
      { id: 'q4', question: 'Patching endpoints helps:', options: ['Introduce malware','Reduce vulnerabilities','Slow down devices','Weaken networks'], correctAnswer: 1, explanation: 'Patches close known security holes.', points: 200 },
      { id: 'q5', question: 'IoT stands for:', options: ['Internet of Things','Internal Office Technology','Independent Operating Tool','Integrated Online Transmission'], correctAnswer: 0, explanation: 'IoT = interconnected smart devices.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'mobile-security',
    title: 'MOBILE SECURITY PROTOCOLS',
    description: 'Defend smartphones and tablets against malware, theft, and data leakage.',
    difficulty: 'ROOKIE',
    category: 'DEVICE SECURITY',
    isLocked: false,
    requiredLevel: 2,
    videoUrl: 'https://www.youtube.com/embed/qRogwC9tyjM',
    articleLinks: [
      { title: 'Mobile Security Guide', url: 'https://www.kaspersky.com/resource-center/threats/mobile-security' },
      { title: 'Securing Mobile Apps', url: 'https://owasp.org/www-project-mobile-top-10/' },
      { title: 'BYOD Risks & Security', url: 'https://www.techrepublic.com/article/byod-security-risks/' }
    ],
    quiz: [
      { id: 'q1', question: 'MAM refers to:', options: ['Mobile App Management','Massive Access Module','Memory Allocation Model','Mobile Auto Mode'], correctAnswer: 0, explanation: 'MAM secures app usage on mobile devices.', points: 200 },
      { id: 'q2', question: 'Mobile malware often spreads through:', options: ['App stores','Physical locks','Battery usage','WiFi speed'], correctAnswer: 0, explanation: 'Malware-laden apps are a big risk.', points: 200 },
      { id: 'q3', question: 'Remote wipe allows:', options: ['Deleting data if device is lost','Recovering deleted photos','Increasing battery life','Unlocking bootloaders'], correctAnswer: 0, explanation: 'Remote wipe protects sensitive data if stolen.', points: 200 },
      { id: 'q4', question: 'Mobile phishing is also called:', options: ['Smishing','Vishing','Hishing','Flashing'], correctAnswer: 0, explanation: 'SMS-based phishing is smishing.', points: 200 },
      { id: 'q5', question: 'Mobile device encryption helps:', options: ['Increase ads','Protect stored data','Drain battery fast','Remove viruses'], correctAnswer: 1, explanation: 'Encryption makes stolen devices less useful.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'data-privacy',
    title: 'DATA PRIVACY FRAMEWORK',
    description: 'Learn GDPR, CCPA, and best practices for protecting personal data.',
    difficulty: 'AGENT',
    category: 'PRIVACY',
    isLocked: false,
    requiredLevel: 3,
    videoUrl: 'https://www.youtube.com/embed/zEPn_T2Yv6A',
    articleLinks: [
      { title: 'GDPR Basics', url: 'https://gdpr.eu/what-is-gdpr/' },
      { title: 'CCPA Overview', url: 'https://oag.ca.gov/privacy/ccpa' },
      { title: 'Data Privacy Principles', url: 'https://www.iso.org/isoiec-27701-information-security.html' }
    ],
    quiz: [
      { id: 'q1', question: 'GDPR applies to:', options: ['Only EU companies','Any org handling EU citizens’ data','Only US companies','Small businesses only'], correctAnswer: 1, explanation: 'It covers anyone handling EU citizen data.', points: 200 },
      { id: 'q2', question: 'CCPA gives consumers:', options: ['Right to delete personal data','No rights','Free antivirus','Cloud storage'], correctAnswer: 0, explanation: 'CCPA increases consumer privacy rights.', points: 200 },
      { id: 'q3', question: 'PII means:', options: ['Personally Identifiable Information','Public Internet Infrastructure','Private Internal Index','Protected International Identity'], correctAnswer: 0, explanation: 'PII is data that can identify someone.', points: 200 },
      { id: 'q4', question: 'Data minimization means:', options: ['Collect only necessary data','Collect everything possible','Sell all user data','Encrypt after leaks'], correctAnswer: 0, explanation: 'Only gather what is needed for purpose.', points: 200 },
      { id: 'q5', question: 'Which is NOT a privacy regulation?', options: ['GDPR','HIPAA','CCPA','NATO'], correctAnswer: 3, explanation: 'NATO is a military alliance, not a privacy law.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'forensics',
    title: 'DIGITAL FORENSICS BLUEPRINT',
    description: 'Learn how to investigate, analyze, and preserve digital evidence.',
    difficulty: 'ELITE',
    category: 'INVESTIGATION',
    isLocked: false,
    requiredLevel: 5,
    videoUrl: 'https://www.youtube.com/embed/mg6KJjP0xR8',
    articleLinks: [
      { title: 'Intro to Digital Forensics', url: 'https://www.sans.org/digital-forensics/' },
      { title: 'Chain of Custody', url: 'https://www.ncjrs.gov/pdffiles1/nij/178280.pdf' },
      { title: 'Tools for Forensics', url: 'https://www.cybersecurityeducation.org/resources/tools/' }
    ],
    quiz: [
      { id: 'q1', question: 'First rule of digital forensics:', options: ['Change evidence','Preserve evidence integrity','Delete malware','Encrypt logs'], correctAnswer: 1, explanation: 'Evidence must be preserved unaltered.', points: 200 },
      { id: 'q2', question: 'Chain of custody ensures:', options: ['Cheap storage','Evidence authenticity','Faster computers','Encryption only'], correctAnswer: 1, explanation: 'It documents handling of evidence.', points: 200 },
      { id: 'q3', question: 'Which is a forensics tool?', options: ['Wireshark','Photoshop','Minecraft','Excel'], correctAnswer: 0, explanation: 'Wireshark is widely used in forensics.', points: 200 },
      { id: 'q4', question: 'Volatile evidence example:', options: ['RAM data','Hard disk file','USB stick','Cloud backup'], correctAnswer: 0, explanation: 'RAM is volatile and disappears when power is off.', points: 200 },
      { id: 'q5', question: 'Hashing in forensics verifies:', options: ['Integrity of evidence','Malware presence','Encryption speed','Device health'], correctAnswer: 0, explanation: 'Hashes confirm files haven’t been altered.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'threat-hunting',
    title: 'THREAT HUNTING OPERATIONS',
    description: 'Proactively search for threats in networks and systems before damage occurs.',
    difficulty: 'ELITE',
    category: 'OPERATIONS',
    isLocked: false,
    requiredLevel: 5,
    videoUrl: 'https://www.youtube.com/embed/7gVFb1NzD9g',
    articleLinks: [
      { title: 'What is Threat Hunting?', url: 'https://www.crowdstrike.com/cybersecurity-101/threat-hunting/' },
      { title: 'MITRE ATT&CK Framework', url: 'https://attack.mitre.org/' },
      { title: 'Proactive Defense Guide', url: 'https://www.sans.org/blog/threat-hunting/' }
    ],
    quiz: [
      { id: 'q1', question: 'Threat hunting is:', options: ['Passive monitoring','Proactively searching for threats','Waiting for alerts','Antivirus updates'], correctAnswer: 1, explanation: 'It is active and proactive.', points: 200 },
      { id: 'q2', question: 'MITRE ATT&CK is:', options: ['Game','Threat behavior knowledge base','Antivirus app','Cloud storage'], correctAnswer: 1, explanation: 'It documents attacker techniques.', points: 200 },
      { id: 'q3', question: 'Which is a hunting technique?', options: ['Log analysis','Firewall updates','Password reset','VPN'], correctAnswer: 0, explanation: 'Logs help identify suspicious behavior.', points: 200 },
      { id: 'q4', question: 'Hypothesis-driven hunting means:', options: ['Random searches','Basing hunts on informed hypotheses','Guessing malware names','Using AI only'], correctAnswer: 1, explanation: 'It uses knowledge to guide searches.', points: 200 },
      { id: 'q5', question: 'IOC stands for:', options: ['Indicators of Compromise','Internal Office Controls','Identity of Computers','Independent Operating Code'], correctAnswer: 0, explanation: 'IOCs are clues of compromise.', points: 250 }
    ],
    maxScore: 1050
  }
];
