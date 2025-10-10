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
    difficulty: 'ROOKIE',
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
    difficulty: 'ROOKIE',
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
    difficulty: 'ROOKIE',
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
    difficulty: 'ROOKIE',
    category: 'CLOUD',
    isLocked: false,
    requiredLevel: 4,
    videoUrl: "https://www.youtube.com/embed/dRXRAFo3OiQ",
    articleLinks: [
      { title: 'Cloud Security Alliance Basics', url: 'https://cloudsecurityalliance.org/' },
      { title: 'Shared Responsibility in the Cloud', url: 'https://aws.amazon.com/compliance/shared-responsibility-model/' },
      { title: 'Best Practices for Securing Cloud Workloads', url: 'https://www.microsoft.com/security/blog/' }
    ],
    quiz: [
      { id: 'q1', question: 'What is the shared responsibility model in cloud?', options: ['Provider secures everything','User secures everything','Provider secures infrastructure, user secures data/configs','Nobody secures it'], correctAnswer: 2, explanation: 'Providers secure hardware, users secure apps, data, configs.', points: 200 },
      { id: 'q2', question: 'Cloud misconfiguration leads to:', options: ['Faster apps','Data leaks','Cheaper bills','Better security'], correctAnswer: 1, explanation: 'Many breaches come from misconfigured cloud buckets.', points: 200 },
      { id: 'q3', question: 'Which is a cloud-specific threat?', options: ['SQL Injection','Man-in-the-middle','Insecure APIs','Phishing'], correctAnswer: 2, explanation: 'Insecure APIs expose cloud services.', points: 200 },
      { id: 'q4', question: 'CASB stands for:', options: ['Cloud Access Security Broker','Central Authentication Security Base','Cloud Application Service Backup','Cybersecurity and Blockchain'], correctAnswer: 0, explanation: 'CASB(Cloud Access Security Broker) provides visibility and policy enforcement for cloud.', points: 200 },
      { id: 'q5', question: 'Zero trust in cloud means:', options: ['Trust everything inside network','No trust without verification','Only trust admin accounts','Ignore encryption'], correctAnswer: 1, explanation: 'Zero trust = never trust, always verify.', points: 250 }
    ],
    maxScore: 1050
  },

  {
    id: 'incident-response',
    title: 'CYBER INCIDENT RESPONSE BLUEPRINT',
    description: 'Steps and strategies for responding to cybersecurity incidents effectively.',
    difficulty: 'ROOKIE',
    category: 'OPERATIONS',
    isLocked: false,
    requiredLevel: 3,
    videoUrl: 'https://www.youtube.com/embed/CxsPQrXQajc',
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
    videoUrl: 'https://www.youtube.com/embed/JoeiLuFNBc4',
    articleLinks: [
      { title: 'Encryption Basics', url: 'https://www.khanacademy.org/computing/computer-science/cryptography' },
      { title: 'Symmetric vs Asymmetric Encryption', url: 'https://www.ssl.com/faqs/symmetric-vs-asymmetric-encryption/' },
      { title: 'Hashing Explained', url: 'https://www.cloudflare.com/learning/cryptography/what-is-cryptography/' },
      {title: 'Course', url: 'https://youtu.be/j_8PLI_wCVU'}
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
    difficulty: 'ROOKIE',
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
    videoUrl: 'https://m.youtube.com/embed/v=5uNifnVlBy4',
    articleLinks: [
      { title: 'What is IAM?', url: 'https://www.microsoft.com/en-us/security/business/security-101/what-is-identity-access-management-iam' },
      { title: 'Principle of Least Privilege', url: 'https://www.paloaltonetworks.com/cyberpedia/what-is-the-principle-of-least-privilege' },
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
    difficulty: 'AGENT',
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
    difficulty: 'AGENT',
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
    difficulty: 'AGENT',
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
  },
  // ------------------- Module 16 -------------------
{
  id: 'red-team-strategy',
  title: 'ADVANCED RED TEAM STRATEGY',
  description: 'Develop elite offensive simulation skills to test organizational defenses.',
  difficulty: 'AGENT',
  category: 'OPERATIONS',
  isLocked: false,
  requiredLevel: 16,
  videoUrl: 'https://www.youtube.com/embed/Zl9ihI4P6cA',
  articleLinks: [
    { title: 'Red Teaming Explained', url: 'https://www.csoonline.com/article/3331981/what-is-red-teaming.html' },
    { title: 'Purple Teaming Guide', url: 'https://attack.mitre.org/resources/purple-teaming/' },
    { title: 'Advanced Adversary Simulation', url: 'https://www.sans.org/blog/red-team-vs-penetration-testing/' },
    { title: 'TTP Mapping Techniques', url: 'https://attack.mitre.org/matrices/enterprise/' }
  ],
  quiz: [
    { id: 'q1', question: 'Red teaming differs from pentesting because:', options: ['It’s shorter','Focuses on compliance','Simulates real adversaries','Uses no tools'], correctAnswer: 2, explanation: 'Red teams mimic adversary TTPs to stress-test defenses.', points: 250 },
    { id: 'q2', question: 'Purple teaming integrates:', options: ['Attack + Defense teams','Cloud + On-prem systems','Users + IT','AI + Blockchain'], correctAnswer: 0, explanation: 'Purple teams combine red and blue team collaboration.', points: 250 },
    { id: 'q3', question: 'A primary objective of red team operations is:', options: ['Find vulnerabilities only','Bypass defenses and achieve objectives','Test antivirus software','Train developers'], correctAnswer: 1, explanation: 'It’s about demonstrating impact through realistic simulation.', points: 250 },
    { id: 'q4', question: 'Adversary emulation plans are based on:', options: ['Random exploits','MITRE ATT&CK TTPs','Firewall configs','User surveys'], correctAnswer: 1, explanation: 'ATT&CK provides structured techniques for emulation.', points: 250 },
    { id: 'q5', question: 'Command and Control (C2) in red teaming is:', options: ['Reporting chain','Tool to control compromised hosts','Phishing campaign','Risk register'], correctAnswer: 1, explanation: 'C2 frameworks simulate adversary persistence.', points: 250 },
    { id: 'q6', question: 'Key challenge in red teaming vs pentesting is:', options: ['Longer engagement & stealth','Cheaper tools','More scanning','Less scope'], correctAnswer: 0, explanation: 'Red teams focus on stealth and extended objectives.', points: 250 },
    { id: 'q7', question: 'The success of red team operations is best measured by:', options: ['# of vulnerabilities found','# of users trained','Impact on detection & response','Size of report'], correctAnswer: 2, explanation: 'Goal is to improve detection and response capabilities.', points: 300 }
  ],
  maxScore: 1850
},

// ------------------- Module 17 -------------------
{
  id: 'cloud-native-security',
  title: 'CLOUD-NATIVE SECURITY OPERATIONS',
  description: 'Protect modern containerized and serverless workloads in multi-cloud environments.',
  difficulty: 'AGENT',
  category: 'CLOUD',
  isLocked: false,
  requiredLevel: 17,
  videoUrl: 'https://www.youtube.com/embed/7y7M5hG3G7Q',
  articleLinks: [
    { title: 'Cloud-Native Security Guide', url: 'https://kubernetes.io/docs/concepts/security/' },
    { title: 'CNCF Security Whitepaper', url: 'https://github.com/cncf/tag-security' },
    { title: 'Serverless Security Deep Dive', url: 'https://owasp.org/www-project-serverless-top-10/' },
    { title: 'Multi-Cloud Risk Management', url: 'https://cloudsecurityalliance.org/' }
  ],
  quiz: [
    { id: 'q1', question: 'Which is unique to cloud-native security?', options: ['Patch servers','Protecting containers and serverless functions','Antivirus updates','Building firewalls'], correctAnswer: 1, explanation: 'Focus is on ephemeral workloads like containers and functions.', points: 250 },
    { id: 'q2', question: 'Kubernetes RBAC controls:', options: ['API access & permissions','Physical servers','Firewall rules','CI/CD pipelines'], correctAnswer: 0, explanation: 'RBAC defines user & service account permissions.', points: 250 },
    { id: 'q3', question: 'Sidecar containers in service mesh help with:', options: ['Scaling apps','Network security enforcement','Backup data','Logging only'], correctAnswer: 1, explanation: 'Sidecars can enforce encryption, monitoring, and policies.', points: 250 },
    { id: 'q4', question: 'Serverless applications are vulnerable due to:', options: ['Always running servers','Event-driven execution & hidden attack surface','More admins needed','Lack of users'], correctAnswer: 1, explanation: 'Event-driven triggers can be abused if misconfigured.', points: 250 },
    { id: 'q5', question: 'Best way to secure multi-cloud deployments:', options: ['Rely on one vendor','Centralized IAM and unified monitoring','Ignore vendor policies','Use multiple antivirus'], correctAnswer: 1, explanation: 'Centralized IAM & monitoring mitigate fragmented risks.', points: 250 },
    { id: 'q6', question: 'Container escape refers to:', options: ['App scaling','Attacker breaking isolation to host','Upgrading images','Patch automation'], correctAnswer: 1, explanation: 'Escape breaks container isolation and compromises host.', points: 250 },
    { id: 'q7', question: 'Which standard focuses on cloud security?', options: ['NIST 800-53','CSA CCM','PCI DSS','ISO 27017'], correctAnswer: 1, explanation: 'Cloud Security Alliance’s CCM is cloud-specific.', points: 300 }
  ],
  maxScore: 1850
},

// ------------------- Module 18 -------------------
{
  id: 'ai-driven-cyber-defense',
  title: 'AI-DRIVEN CYBER DEFENSE',
  description: 'Leverage machine learning for automated detection and adaptive defense strategies.',
  difficulty: 'AGENT',
  category: 'AI SECURITY',
  isLocked: false,
  requiredLevel: 18,
  videoUrl: 'https://www.youtube.com/embed/rbE8t6so4EY',
  articleLinks: [
    { title: 'AI in Cybersecurity', url: 'https://www.ibm.com/security/artificial-intelligence' },
    { title: 'Adversarial ML Attacks', url: 'https://arxiv.org/abs/1810.00069' },
    { title: 'Deep Learning for IDS', url: 'https://www.sciencedirect.com/science/article/pii/S0167404820303139' },
    { title: 'AI Threat Detection Challenges', url: 'https://oecd.ai/en/catalogue/tools/ai-cybersecurity' }
  ],
  quiz: [
    { id: 'q1', question: 'Adversarial ML attacks target:', options: ['Model vulnerabilities','Data backups','Physical devices','None'], correctAnswer: 0, explanation: 'They manipulate input data to mislead ML models.', points: 250 },
    { id: 'q2', question: 'Anomaly detection models in cyber defense detect:', options: ['Normal traffic','Deviations from baseline','Data compression','VPN usage'], correctAnswer: 1, explanation: 'They highlight abnormal activity patterns.', points: 250 },
    { id: 'q3', question: 'A key limitation of AI-driven cyber defense:', options: ['Too many manual tasks','Bias & adversarial evasion','Inability to scale','No automation'], correctAnswer: 1, explanation: 'AI can be poisoned or tricked by adversaries.', points: 250 },
    { id: 'q4', question: 'Reinforcement learning can be used to:', options: ['Automate patching','Optimize defense decisions','Manage servers','Train employees'], correctAnswer: 1, explanation: 'RL adapts strategies based on outcomes.', points: 250 },
    { id: 'q5', question: 'Feature engineering is crucial in:', options: ['ML-based intrusion detection','Password resets','Backup policies','Cloud billing'], correctAnswer: 0, explanation: 'Good features improve detection accuracy.', points: 250 },
    { id: 'q6', question: 'Generative AI poses cyber risks by:', options: ['Enhancing docs','Creating phishing & deepfakes','Blocking malware','Encrypting storage'], correctAnswer: 1, explanation: 'Attackers weaponize AI for social engineering.', points: 250 },
    { id: 'q7', question: 'Zero-day malware detection benefits from:', options: ['Static signatures','Behavioral ML models','Firewall logs only','No training data'], correctAnswer: 1, explanation: 'ML can detect novel behaviors unlike signature AV.', points: 300 }
  ],
  maxScore: 1850
},
// ------------------- Module 19 -------------------
{
  id: 'digital-forensics',
  title: 'DIGITAL FORENSICS MASTERY',
  description: 'Perform deep forensic investigations across endpoints, memory, and networks.',
  difficulty: 'AGENT',
  category: 'FORENSICS',
  isLocked: false,
  requiredLevel: 19,
  videoUrl: 'https://www.youtube.com/embed/L9__1t3qzV8',
  articleLinks: [
    { title: 'Intro to Digital Forensics', url: 'https://www.sans.org/cyber-security-courses/forensics-incident-response/' },
    { title: 'Memory Forensics Guide', url: 'https://volatilityfoundation.org/' },
    { title: 'Network Forensics Basics', url: 'https://www.geeksforgeeks.org/what-is-network-forensics/' },
    { title: 'Chain of Custody in Forensics', url: 'https://csrc.nist.gov/publications/detail/sp/800-101/rev-1/final' }
  ],
  quiz: [
    { id: 'q1', question: 'Volatility is used for:', options: ['Disk encryption','Memory forensics','Firewall rules','Antivirus updates'], correctAnswer: 1, explanation: 'It specializes in memory analysis.', points: 250 },
    { id: 'q2', question: 'Chain of custody ensures:', options: ['Evidence authenticity','Faster analysis','Encryption keys','Incident reports'], correctAnswer: 0, explanation: 'Maintains legal integrity of evidence.', points: 250 },
    { id: 'q3', question: 'File carving in forensics means:', options: ['Shredding files','Recovering deleted fragments','Encrypting storage','Splitting archives'], correctAnswer: 1, explanation: 'It reconstructs files from raw data.', points: 250 },
    { id: 'q4', question: 'First step in incident forensics is:', options: ['Isolate and preserve evidence','Run antivirus','Erase logs','Patch system'], correctAnswer: 0, explanation: 'Preservation is key to unbiased analysis.', points: 250 },
    { id: 'q5', question: 'Network forensics often uses:', options: ['pcap analysis','Database dumps','Password resets','NAT configs'], correctAnswer: 0, explanation: 'Packet capture analysis reveals intrusions.', points: 250 },
    { id: 'q6', question: 'Steganography detection falls under:', options: ['Disk forensics','File analysis','Hidden data discovery','None'], correctAnswer: 2, explanation: 'Steganography hides data in files like images.', points: 250 },
    { id: 'q7', question: 'Hashing in forensics is used to:', options: ['Encrypt logs','Verify file integrity','Accelerate storage','Create backups'], correctAnswer: 1, explanation: 'Hashes prove evidence integrity.', points: 300 }
  ],
  maxScore: 1850
},

// ------------------- Module 20 -------------------
{
  id: 'ics-scada-security',
  title: 'ICS/SCADA SYSTEM SECURITY',
  description: 'Safeguard industrial control systems and critical infrastructure.',
  difficulty: 'AGENT',
  category: 'CRITICAL INFRASTRUCTURE',
  isLocked: false,
  requiredLevel: 20,
  videoUrl: 'https://www.youtube.com/embed/xk-d4Bc0xII',
  articleLinks: [
    { title: 'What is SCADA Security?', url: 'https://www.fortinet.com/resources/cyberglossary/scada-and-scada-systems' },
    { title: 'Stuxnet Case Study', url: 'https://www.wired.com/2014/11/countdown-to-zero-day-stuxnet/' },
    { title: 'OT vs IT Security', url: 'https://www.fortinet.com/resources/cyberglossary/it-vs-ot-cybersecurity/' },
    { title: 'ICS Security Standards', url: 'https://www.isa.org/isa99/' }
  ],
  quiz: [
    { id: 'q1', question: 'Stuxnet targeted:', options: ['Banking apps','Nuclear centrifuges','Mobile phones','Social media'], correctAnswer: 1, explanation: 'It attacked Iranian nuclear ICS systems.', points: 250 },
    { id: 'q2', question: 'ICS stands for:', options: ['Internet Control System','Industrial Control System','Infrastructure Cloud Security','Integrated Communication Service'], correctAnswer: 1, explanation: 'ICS are industrial automation systems.', points: 250 },
    { id: 'q3', question: 'Main difference OT vs IT:', options: ['OT prioritizes safety & uptime, IT prioritizes data','OT is faster','IT has more firewalls','OT has no users'], correctAnswer: 0, explanation: 'ICS prioritize availability and safety.', points: 250 },
    { id: 'q4', question: 'A common ICS protocol is:', options: ['Modbus','SMTP','HTTP','FTP'], correctAnswer: 0, explanation: 'Modbus is widely used in ICS environments.', points: 250 },
    { id: 'q5', question: 'SCADA is best described as:', options: ['Supervisory control & data acquisition','Security control and defense','Server cluster admin device','Simple coding and design app'], correctAnswer: 0, explanation: 'It is a control system architecture for processes.', points: 250 },
    { id: 'q6', question: 'Why is patching hard in ICS?', options: ['Air-gapped systems, uptime critical','Too many users','No logs','Encryption conflicts'], correctAnswer: 0, explanation: 'Critical systems can’t afford downtime.', points: 250 },
    { id: 'q7', question: 'Best defense for ICS is:', options: ['Default passwords','Layered defense + segmentation','No monitoring','Cloud migration'], correctAnswer: 1, explanation: 'Defense-in-depth protects ICS from diverse threats.', points: 300 }
  ],
  maxScore: 1850
},

// ------------------- Module 21 -------------------
{
  id: 'quantum-safe-crypto',
  title: 'QUANTUM-SAFE CRYPTOGRAPHY',
  description: 'Prepare for post-quantum security with resilient cryptographic methods.',
  difficulty: 'AGENT',
  category: 'CRYPTOGRAPHY',
  isLocked: false,
  requiredLevel: 21,
  videoUrl: 'https://www.youtube.com/embed/j7p8t2yLz2s',
  articleLinks: [
    { title: 'Intro to Post-Quantum Crypto', url: 'https://csrc.nist.gov/projects/post-quantum-cryptography' },
    { title: 'Lattice-Based Crypto', url: 'https://eprint.iacr.org/2018/939.pdf' },
    { title: 'Quantum Threat to RSA', url: 'https://www.ibm.com/quantum/post-quantum/' },
    { title: 'NIST PQC Competition', url: 'https://csrc.nist.gov/Projects/post-quantum-cryptography/round-3-submissions' }
  ],
  quiz: [
    { id: 'q1', question: 'Shor’s algorithm threatens:', options: ['AES','RSA & ECC','SHA hashing','TLS handshakes only'], correctAnswer: 1, explanation: 'Shor efficiently factors RSA and breaks ECC.', points: 250 },
    { id: 'q2', question: 'Lattice-based crypto is:', options: ['Quantum algorithm','PQC candidate','Weak symmetric cipher','Hashing scheme'], correctAnswer: 1, explanation: 'It’s a leading PQC approach.', points: 250 },
    { id: 'q3', question: 'Quantum-safe crypto refers to:', options: ['Classical cryptography','Schemes resistant to quantum attacks','Faster symmetric keys','Cloud security'], correctAnswer: 1, explanation: 'It is about resilience to quantum threats.', points: 250 },
    { id: 'q4', question: 'Grover’s algorithm affects:', options: ['Symmetric key strength','File carving','Hash verification','Patching speed'], correctAnswer: 0, explanation: 'It weakens symmetric encryption by √N factor.', points: 250 },
    { id: 'q5', question: 'Hybrid cryptography means:', options: ['Mixing PQC + classical crypto','Encrypting twice','Blockchain-based encryption','Symmetric-only systems'], correctAnswer: 0, explanation: 'Combines PQC with current standards.', points: 250 },
    { id: 'q6', question: 'Hash-based signatures like XMSS are:', options: ['Broken by quantum','Quantum-safe','For streaming only','For WiFi only'], correctAnswer: 1, explanation: 'They rely on hash functions, considered quantum-resistant.', points: 250 },
    { id: 'q7', question: 'Biggest challenge in PQC adoption is:', options: ['Slow algorithms','Migration & interoperability','Too simple','No vendors'], correctAnswer: 1, explanation: 'Transitioning globally is complex.', points: 300 }
  ],
  maxScore: 1850
},

// ------------------- Module 22 -------------------
{
  id: 'zero-trust-architecture',
  title: 'ZERO TRUST ARCHITECTURE',
  description: 'Eliminate implicit trust through continuous verification and least privilege.',
  difficulty: 'AGENT',
  category: 'ACCESS CONTROL',
  isLocked: false,
  requiredLevel: 22,
  videoUrl: 'https://www.youtube.com/embed/7VxC35J9QxM',
  articleLinks: [
    { title: 'Zero Trust Explained', url: 'https://www.nist.gov/publications/zero-trust-architecture' },
    { title: 'Google BeyondCorp Model', url: 'https://cloud.google.com/beyondcorp' },
    { title: 'Identity as the New Perimeter', url: 'https://www.microsoft.com/security/blog/zero-trust/' },
    { title: 'ZTNA vs VPN', url: 'https://www.zscaler.com/resources/security-terms-glossary/what-is-zero-trust' }
  ],
  quiz: [
    { id: 'q1', question: 'Zero trust means:', options: ['Trust everyone','Never trust, always verify','Trust devices only','No authentication'], correctAnswer: 1, explanation: 'Every request is verified explicitly.', points: 250 },
    { id: 'q2', question: 'BeyondCorp pioneered:', options: ['Network segmentation','Perimeter-less zero trust','Cloud backups','Antivirus automation'], correctAnswer: 1, explanation: 'Google’s model inspired ZTA adoption.', points: 250 },
    { id: 'q3', question: 'Key enabler of zero trust is:', options: ['IAM & continuous authentication','Bigger firewalls','Single VLAN','Default passwords'], correctAnswer: 0, explanation: 'Identity and context-based access are central.', points: 250 },
    { id: 'q4', question: 'ZTNA is:', options: ['Zero Trust Network Access','Zero-Time Network Alerts','Zero Trust Node Authentication','Zone Transfer Network App'], correctAnswer: 0, explanation: 'ZTNA implements zero trust access policies.', points: 250 },
    { id: 'q5', question: 'Zero trust replaces:', options: ['Flat perimeter security','Encryption','DNS','Cloud firewalls'], correctAnswer: 0, explanation: 'It eliminates implicit trust perimeters.', points: 250 },
    { id: 'q6', question: 'Continuous verification means:', options: ['One login per day','Dynamic, ongoing checks','Weekly audits','No MFA'], correctAnswer: 1, explanation: 'Access is continuously validated.', points: 250 },
    { id: 'q7', question: 'Least privilege principle ensures:', options: ['Everyone admin','Only necessary access granted','Max rights for speed','Unlimited cloud usage'], correctAnswer: 1, explanation: 'Users/apps get only the access needed.', points: 300 }
  ],
  maxScore: 1850
},
// ------------------- Module 23 -------------------
{
  id: 'supply-chain-security',
  title: 'SUPPLY CHAIN SECURITY',
  description: 'Defend against attacks targeting vendors, third-party software, and dependencies.',
  difficulty: 'AGENT',
  category: 'SECURITY OPERATIONS',
  isLocked: false,
  requiredLevel: 8,
  videoUrl: 'https://www.youtube.com/embed/5g8rGmD_WFk',
  articleLinks: [
    { title: 'Understanding Software Supply Chain Attacks', url: 'https://www.cisa.gov/supply-chain-attacks' },
    { title: 'SolarWinds Breach Analysis', url: 'https://www.crowdstrike.com/blog/sunburst-supply-chain-attack/' },
    { title: 'NIST Guidance on Supply Chain Risk', url: 'https://csrc.nist.gov/publications/detail/sp/800-161/rev-1/final' },
    { title: 'Securing Open Source Dependencies', url: 'https://snyk.io/learn/supply-chain-security/' }
  ],
  quiz: [
    { id: 'q1', question: 'The SolarWinds attack was an example of:', options: ['Insider threat','Supply chain compromise','Phishing','Ransomware'], correctAnswer: 1, explanation: 'Malicious code was injected into software updates.', points: 300 },
    { id: 'q2', question: 'NIST SP 800-161 focuses on:', options: ['IoT standards','Supply chain risk management','Network segmentation','Cloud backup'], correctAnswer: 1, explanation: 'It provides guidance for supply chain security.', points: 300 },
    { id: 'q3', question: 'Dependency confusion attacks exploit:', options: ['DNS','Public package repositories','Firewalls','TLS certificates'], correctAnswer: 1, explanation: 'They trick systems into installing malicious packages.', points: 300 },
    { id: 'q4', question: 'Best defense against dependency risk is:', options: ['Manual coding','SBOM (Software Bill of Materials)','VPN','DMZ'], correctAnswer: 1, explanation: 'SBOM gives visibility into dependencies.', points: 300 },
    { id: 'q5', question: 'Third-party vendor compromise is a:', options: ['Direct attack','Indirect supply chain threat','Phishing','Credential stuffing'], correctAnswer: 1, explanation: 'Attackers exploit trusted external vendors.', points: 300 },
    { id: 'q6', question: 'Tampering during CI/CD pipelines is a:', options: ['Runtime attack','Build pipeline compromise','Physical attack','SQL injection'], correctAnswer: 1, explanation: 'Pipeline compromise can poison software artifacts.', points: 350 },
    { id: 'q7', question: 'Which tool detects dependency risks?', options: ['Burp Suite','Snyk','Wireshark','Metasploit'], correctAnswer: 1, explanation: 'Snyk helps scan for vulnerable packages.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 24 -------------------
{
  id: 'cyber-deception',
  title: 'CYBER DECEPTION STRATEGIES',
  description: 'Use decoys, traps, and honeypots to mislead attackers and gather intelligence.',
  difficulty: 'ELITE',
  category: 'DEFENSIVE OPERATIONS',
  isLocked: false,
  requiredLevel: 9,
  videoUrl: 'https://www.youtube.com/embed/1H0_rJ9LmJw',
  articleLinks: [
    { title: 'Deception Technology Overview', url: 'https://www.gartner.com/en/documents/3884757' },
    { title: 'Honeypots in Cybersecurity', url: 'https://www.sans.org/white-papers/370/' },
    { title: 'MITRE Engage Deception Framework', url: 'https://engage.mitre.org/' },
    { title: 'Using Deception for Proactive Defense', url: 'https://www.darkreading.com/endpoint/deception-technology' }
  ],
  quiz: [
    { id: 'q1', question: 'Cyber deception focuses on:', options: ['Blocking ports','Misleading attackers','Data encryption','Password resets'], correctAnswer: 1, explanation: 'It manipulates adversary behavior.', points: 300 },
    { id: 'q2', question: 'A honeypot is used for:', options: ['Data backup','Luring attackers','Authentication','Firewall bypass'], correctAnswer: 1, explanation: 'Honeypots simulate vulnerable systems.', points: 300 },
    { id: 'q3', question: 'MITRE Engage provides:', options: ['Deception playbooks','Malware signatures','Network configs','IDS alerts'], correctAnswer: 0, explanation: 'It’s a framework for deception planning.', points: 300 },
    { id: 'q4', question: 'Credential honeytokens are:', options: ['Fake accounts','Fake patches','Real exploits','API keys'], correctAnswer: 0, explanation: 'Honeytokens are fake credentials to track usage.', points: 300 },
    { id: 'q5', question: 'Low-interaction honeypots simulate:', options: ['Entire OS','Basic services','Full enterprise network','ICS/SCADA'], correctAnswer: 1, explanation: 'They mimic only limited functionality.', points: 300 },
    { id: 'q6', question: 'Which deception tool exists?', options: ['Canarytokens','Wireshark','Hashcat','ZAP'], correctAnswer: 0, explanation: 'Canarytokens provide deceptive assets.', points: 350 },
    { id: 'q7', question: 'Key risk of deception is:', options: ['Legal liability','Overhead','Credential loss','Bypassing AV'], correctAnswer: 0, explanation: 'Tricking attackers can have legal implications.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 25 -------------------
{
  id: 'advanced-malware-re',
  title: 'ADVANCED MALWARE REVERSE ENGINEERING',
  description: 'Deep dive into dissecting malware with assembly, sandboxes, and emulators.',
  difficulty: 'ELITE',
  category: 'MALWARE ANALYSIS',
  isLocked: false,
  requiredLevel: 10,
  videoUrl: 'https://www.youtube.com/embed/YJ5pC5XJStQ',
  articleLinks: [
    { title: 'Malware RE Basics', url: 'https://malwareunicorn.org/workshops/re101.html' },
    { title: 'IDA Pro vs Ghidra', url: 'https://ghidra-sre.org/' },
    { title: 'Analyzing Packed Malware', url: 'https://www.fireeye.com/current-threats/packed-malware.html' },
    { title: 'Sandbox Evasion Techniques', url: 'https://attack.mitre.org/techniques/T1497/' }
  ],
  quiz: [
    { id: 'q1',
      question: 'You observe a Windows PE that stalls under common sandboxes, then spawns a signed LOLBin to fetch a 2nd stage. Which evasion is MOST likely and what dynamic step defeats it?',
      options: [
        'TLS callback anti-debug; disable CFG',
        'Sleep patching + time skew; API hooking Sleep/Wait to fast-forward',
        'SEH mangling; force SEH chain rebuild',
        'Stack canaries; patch GS cookie'
      ],
      correctAnswer: 1,
      explanation: 'Commodity packers frequently combine long sleeps with time checks. Hooking Sleep/Wait and faking GetTickCount fast-forwards execution to reveal the 2nd stage.',
      points: 350
    },
    { id: 'q2',
      question: 'Packed sample decrypts a section using ROL/XOR loop keyed by PEB -> BeingDebugged. What *static* technique recovers plaintext without running the binary?',
      options: [
        'Linear sweep disassembly',
        'Emulate the loop over dumped section bytes with an initial key guess',
        'Relocation stripping',
        'Symbol recovery with PDBs'
      ],
      correctAnswer: 1,
      explanation: 'Lightweight emulation of the decryptor loop over the raw section bytes recreates plaintext even offline.',
      points: 300
    },
    { id: 'q3',
      question: 'A sample injects into explorer.exe via QueueUserAPC + EarlyBird. Your memory dump lacks obvious strings. Which artifact best reveals C2?',
      options: [
        'TLS master secrets',
        'Injected section entropy + decoded config blob in RWX',
        'Prefetch trace of explorer.exe',
        'SRUM network table'
      ],
      correctAnswer: 1,
      explanation: 'Many families store a XOR/RC4 config in injected memory; scanning high-entropy RWX and decoding known layouts exposes C2.',
      points: 350
    },
    { id: 'q4',
      question: 'Malware ships with a custom import resolver. Which breakpoint placement yields MAX info with MIN noise?',
      options: [
        'NtMapViewOfSection',
        'LdrGetProcedureAddress',
        'NtProtectVirtualMemory',
        'RtlDecompressBuffer'
      ],
      correctAnswer: 1,
      explanation: 'Hooking LdrGetProcedureAddress reveals resolved APIs as the sample imports them dynamically.',
      points: 300
    },
    { id: 'q5',
      question: 'The sample fingerprints VM via CPUID hypervisor bit and MAC OUIs. What’s the safest counter-measure to preserve behavior while bypassing checks?',
      options: [
        'Patch CPUID to clear bit and spoof NIC OUIs at vSwitch',
        'Disable networking',
        'Run bare-metal only',
        'Rename processes'
      ],
      correctAnswer: 0,
      explanation: 'Targeted CPUID patching + NIC OUI spoofing keeps network behavior intact.',
      points: 300
    },
    { id: 'q6',
      question: 'Encrypted strings are referenced via tiny thunks. What IDA/Ghidra workflow reveals them at scale?',
      options: [
        'Manual xrefs',
        'Pattern-match thunk prologues and auto-lift to deobfuscation function, then script bulk decoding',
        'Opcode substitution',
        'Rebuild import table'
      ],
      correctAnswer: 1,
      explanation: 'Scripting around a detected thunk pattern scales string recovery.',
      points: 350
    },
    { id: 'q7',
      question: 'Which evidence MOST strongly proves a kernel-mode rootkit component?',
      options: [
        'Winsock LSP present',
        'Hidden driver object + SSDT or ObCallbacks hooks with unsigned .sys',
        'High CPU usage',
        'Alternate data streams'
      ],
      correctAnswer: 1,
      explanation: 'Kernel callback/SSDT hooks plus an unsigned driver are hallmarks of kernel rootkits.',
      points: 400
    }],
  maxScore: 2350
},
// ------------------- Module 26 -------------------
{
  id: 'privacy-enhancing-tech',
  title: 'PRIVACY ENHANCING TECHNOLOGIES',
  description: 'Leverage PETs like differential privacy, homomorphic encryption, and secure multiparty computation.',
  difficulty: 'ELITE',
  category: 'PRIVACY',
  isLocked: false,
  requiredLevel: 10,
  videoUrl: 'https://www.youtube.com/embed/2z1cKnzmL5A',
  articleLinks: [
    { title: 'Differential Privacy Basics', url: 'https://privacytools.seas.harvard.edu/differential-privacy' },
    { title: 'Homomorphic Encryption Overview', url: 'https://www.microsoft.com/en-us/research/project/homomorphic-encryption/' },
    { title: 'Secure Multiparty Computation', url: 'https://eprint.iacr.org/2018/403.pdf' },
    { title: 'Privacy Preserving AI', url: 'https://fpf.org/blog/privacy-enhancing-technologies/' }
  ],
  quiz: [
    { id: 'q1', question: 'Differential privacy ensures:', options: ['Zero leaks','Statistical protection of individuals','Perfect anonymity','Full encryption'], correctAnswer: 1, explanation: 'It guarantees privacy in aggregated data.', points: 300 },
    { id: 'q2', question: 'Homomorphic encryption allows:', options: ['Computations on encrypted data','Faster brute force','Quantum safety','Packet sniffing'], correctAnswer: 0, explanation: 'It enables operations without decryption.', points: 300 },
    { id: 'q3', question: 'Secure multiparty computation means:', options: ['Multiple servers share keys','Parties compute without revealing inputs','Blockchain voting','Obfuscation'], correctAnswer: 1, explanation: 'It allows joint computation securely.', points: 300 },
    { id: 'q4', question: 'Noise addition is core to:', options: ['Differential privacy','TLS','AES','Blockchain'], correctAnswer: 0, explanation: 'Noise masks individual contributions.', points: 300 },
    { id: 'q5', question: 'PETs are important in:', options: ['Advertising','Cloud AI','Healthcare data sharing','All of the above'], correctAnswer: 3, explanation: 'They enable privacy across sectors.', points: 300 },
    { id: 'q6', question: 'Downside of PETs is often:', options: ['Performance overhead','No privacy','Cost-free','Instant speed'], correctAnswer: 0, explanation: 'PETs can be computationally expensive.', points: 350 },
    { id: 'q7', question: 'Google’s RAPPOR used:', options: ['Homomorphic encryption','Differential privacy','Blockchain','MPC'], correctAnswer: 1, explanation: 'RAPPOR was based on DP.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 27 -------------------
{
  id: 'hardware-security',
  title: 'HARDWARE SECURITY & TRUSTED COMPUTING',
  description: 'Defend against hardware Trojans, side-channel attacks, and ensure chip-level trust.',
  difficulty: 'ELITE',
  category: 'HARDWARE SECURITY',
  isLocked: false,
  requiredLevel: 11,
  videoUrl: 'https://www.youtube.com/embed/MfU9oPgYqRI',
  articleLinks: [
    { title: 'Introduction to Hardware Security', url: 'https://csrc.nist.gov/projects/hardware-security' },
    { title: 'Side-Channel Attacks Explained', url: 'https://www.cryptomathic.com/news-events/blog/side-channel-attacks' },
    { title: 'Trusted Platform Modules (TPM)', url: 'https://trustedcomputinggroup.org/resource/tpm-main-specification/' },
    { title: 'Hardware Trojans in ICs', url: 'https://www.sciencedirect.com/topics/computer-science/hardware-trojans' }
  ],
  quiz: [
    { id: 'q1', question: 'A side-channel attack exploits:', options: ['Software bugs','Physical leakages like power or timing','Network latency','User errors'], correctAnswer: 1, explanation: 'It leverages physical characteristics of hardware.', points: 300 },
    { id: 'q2', question: 'TPM is used for:', options: ['Encryption only','Hardware-based trust & keys','Logging events','Data compression'], correctAnswer: 1, explanation: 'TPM secures keys and platform integrity.', points: 300 },
    { id: 'q3', question: 'A hardware Trojan is:', options: ['Malware in firmware','Malicious circuitry in chips','Spyware on devices','Rootkit'], correctAnswer: 1, explanation: 'It’s a hidden modification in ICs.', points: 300 },
    { id: 'q4', question: 'Spectre and Meltdown exploited:', options: ['Compiler errors','Speculative execution','DMA','Encryption flaws'], correctAnswer: 1, explanation: 'They abused speculative execution leaks.', points: 300 },
    { id: 'q5', question: 'Countermeasure to side-channel is:', options: ['Data masking','AV updates','VPN','TLS'], correctAnswer: 0, explanation: 'Masking makes power/timing leaks unusable.', points: 300 },
    { id: 'q6', question: 'PUFs (Physical Unclonable Functions) provide:', options: ['Unique chip identity','Random malware','Extra memory','Faster boot'], correctAnswer: 0, explanation: 'They exploit manufacturing randomness for IDs.', points: 350 },
    { id: 'q7', question: 'Firmware integrity is ensured with:', options: ['TPM & Secure Boot','Firewalls','IDS','Honeypots'], correctAnswer: 0, explanation: 'Secure Boot checks firmware with trusted signatures.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 28 -------------------
{
  id: 'dark-web-intel',
  title: 'DARK WEB INTELLIGENCE',
  description: 'Monitor underground markets, forums, and criminal ecosystems for threat intelligence.',
  difficulty: 'ELITE',
  category: 'THREAT INTELLIGENCE',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/xFZjBGBbQ-0',
  articleLinks: [
    { title: 'Introduction to Dark Web Monitoring', url: 'https://www.recordedfuture.com/blog/dark-web-monitoring' },
    { title: 'Illicit Marketplaces and Risks', url: 'https://www.europol.europa.eu/media-press/newsroom/news/dark-web-markets' },
    { title: 'Tor & Anonymity', url: 'https://www.torproject.org/about/history/' },
    { title: 'Cybercrime Intelligence from Dark Web', url: 'https://www.fireeye.com/blog/threat-research/2019/02/understanding-the-dark-web.html' }
  ],
  quiz: [
    { id: 'q1', question: 'The dark web is primarily accessed via:', options: ['VPN','Tor','Proxy','I2P only'], correctAnswer: 1, explanation: 'Tor provides onion routing for anonymity.', points: 300 },
    { id: 'q2', question: 'A darknet market is:', options: ['Normal e-commerce site','Illegal goods marketplace','Public blog','Cloud repo'], correctAnswer: 1, explanation: 'Markets sell drugs, exploits, and stolen data.', points: 300 },
    { id: 'q3', question: 'OSINT on the dark web involves:', options: ['Social engineering','Scraping forums and markets','Phishing','Credential stuffing'], correctAnswer: 1, explanation: 'Analysts extract intelligence from forums.', points: 300 },
    { id: 'q4', question: 'Key risk in dark web monitoring is:', options: ['Exposure to malware & legality issues','Slow browsing','VPN cost','Weak passwords'], correctAnswer: 0, explanation: 'Analysts risk legal and infection exposure.', points: 300 },
    { id: 'q5', question: 'Which protocol supports onion routing?', options: ['TCP/IP','Tor protocol','TLS','HTTP/3'], correctAnswer: 1, explanation: 'Tor is built on layered onion encryption.', points: 300 },
    { id: 'q6', question: 'Dark web intelligence helps in:', options: ['Incident response','Threat actor profiling','Fraud detection','All of the above'], correctAnswer: 3, explanation: 'It supports multiple cybersecurity domains.', points: 350 },
    { id: 'q7', question: 'Popular dark web forum focus is often:', options: ['Gaming mods','Hacking tools & data dumps','Photography','News'], correctAnswer: 1, explanation: 'Forums trade stolen credentials, exploits, etc.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 29 -------------------
{
  id: 'iot-botnet-defense',
  title: 'IoT BOTNET DEFENSE',
  description: 'Secure IoT ecosystems against botnets like Mirai through detection and mitigation.',
  difficulty: 'ELITE',
  category: 'IoT SECURITY',
  isLocked: true,
  requiredLevel: 3,
  videoUrl: 'https://www.youtube.com/embed/ojPp73CZlNs',
  articleLinks: [
    { title: 'Understanding Mirai Botnet', url: 'https://www.cloudflare.com/learning/ddos/mirai-botnet-ddos-attack/' },
    { title: 'IoT Security Challenges', url: 'https://www.enisa.europa.eu/publications/baseline-security-recommendations-for-iot' },
    { title: 'Botnet Detection Techniques', url: 'https://www.sciencedirect.com/science/article/pii/S0167404820302956' },
    { title: 'IoT Firmware Security', url: 'https://www.iotsecurityfoundation.org/firmware-updates/' }
  ],
  quiz: [
    { id: 'q1', question: 'The Mirai botnet primarily exploited:', options: ['Zero-days','Weak default passwords','SQL injection','VPN flaws'], correctAnswer: 1, explanation: 'Mirai used default IoT credentials.', points: 300 },
    { id: 'q2', question: 'IoT botnets are dangerous because:', options: ['They affect only PCs','Massive DDoS power','No effect','Limited scope'], correctAnswer: 1, explanation: 'Botnets leverage millions of IoT devices.', points: 300 },
    { id: 'q3', question: 'A key defense is:', options: ['Disable encryption','Frequent firmware updates','Port forwarding','Disable firewalls'], correctAnswer: 1, explanation: 'Updating firmware patches vulnerabilities.', points: 300 },
    { id: 'q4', question: 'Command and control (C2) in botnets is:', options: ['Server controlling infected bots','IDS system','VPN','Browser plugin'], correctAnswer: 0, explanation: 'C2 servers manage botnet instructions.', points: 300 },
    { id: 'q5', question: 'IoT device hardening involves:', options: ['Changing default creds','Updating firmware','Network segmentation','All of the above'], correctAnswer: 3, explanation: 'Defense requires multiple actions.', points: 300 },
    { id: 'q6', question: 'DDoS mitigation against IoT botnets often requires:', options: ['Blackholing','Anycast CDN','Rate limiting','All of the above'], correctAnswer: 3, explanation: 'Multiple mitigations are combined.', points: 350 },
    { id: 'q7', question: 'Best long-term IoT defense is:', options: ['AI-powered anomaly detection','Password rotation only','Shutting down IoT','ISP throttling'], correctAnswer: 0, explanation: 'AI detects unusual IoT traffic patterns.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 30 -------------------
{
  id: 'cyber-law-policy',
  title: 'CYBER LAW & POLICY',
  description: 'Explore global cybersecurity regulations, ethics, and digital rights frameworks.',
  difficulty: 'ELITE',
  category: 'GOVERNANCE',
  isLocked: false,
  requiredLevel: 13,
  videoUrl: 'https://www.youtube.com/embed/8A1x4u-VweE',
  articleLinks: [
    { title: 'GDPR Key Principles', url: 'https://gdpr-info.eu/' },
    { title: 'Budapest Convention on Cybercrime', url: 'https://www.coe.int/en/web/cybercrime/the-budapest-convention' },
    { title: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
    { title: 'UN Digital Rights Initiatives', url: 'https://www.un.org/en/digital-cooperation-panel' }
  ],
  quiz: [
    { id: 'q1', question: 'GDPR is primarily about:', options: ['Cloud security','Data protection & privacy','IoT devices','Encryption standards'], correctAnswer: 1, explanation: 'It governs personal data processing in the EU.', points: 300 },
    { id: 'q2', question: 'The Budapest Convention focuses on:', options: ['Malware laws','International cybercrime cooperation','IoT regulation','Military hacking'], correctAnswer: 1, explanation: 'It’s a treaty for fighting cybercrime.', points: 300 },
    { id: 'q3', question: 'NIST CSF core functions are:', options: ['Identify, Protect, Detect, Respond, Recover','Encrypt, Store, Delete','Block, Monitor, Patch','Plan, Execute, Review'], correctAnswer: 0, explanation: 'The five pillars define CSF actions.', points: 300 },
    { id: 'q4', question: 'Privacy Shield agreement involved:', options: ['US & EU data transfers','IoT standards','Cloud access','Military hacking'], correctAnswer: 0, explanation: 'It governed data flows between EU and US.', points: 300 },
    { id: 'q5', question: 'Cyber law challenges include:', options: ['Jurisdiction issues','Attribution','Cross-border enforcement','All of the above'], correctAnswer: 3, explanation: 'Cybercrime ignores geographic borders.', points: 300 },
    { id: 'q6', question: 'The right to be forgotten is part of:', options: ['GDPR','CLOUD Act','HIPAA','PCI DSS'], correctAnswer: 0, explanation: 'It allows individuals to request deletion of personal data.', points: 350 },
    { id: 'q7', question: 'The CLOUD Act relates to:', options: ['US law enforcement access to data','Quantum encryption','IoT firmware','Biometrics'], correctAnswer: 0, explanation: 'It compels US providers to hand over data.', points: 350 }
  ],
  maxScore: 2200
},
// ------------------- Module 31 -------------------
{
  id: 'threat-modeling',
  title: 'THREAT MODELING FRAMEWORKS',
  description: 'Develop structured approaches to identify, prioritize, and mitigate threats in systems and applications.',
  difficulty: 'ELITE',
  category: 'ARCHITECTURE',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/VA8h2YtGZpI',
  articleLinks: [
    { title: 'Threat Modeling Explained', url: 'https://owasp.org/www-community/Threat_Modeling' },
    { title: 'Microsoft STRIDE Model', url: 'https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool' },
    { title: 'DREAD Risk Rating', url: 'https://www.cisa.gov/news-events/news/threat-modeling-and-risk-assessment' },
    { title: 'Practical Threat Modeling Guide', url: 'https://threatmodelingmanifesto.org/' }
  ],
  quiz: [
    { id: 'q1', question: 'Which is not part of STRIDE?', options: ['Spoofing','Tampering','Repudiation','Doxing'], correctAnswer: 3, explanation: 'Doxing is not in STRIDE.', points: 250 },
    { id: 'q2', question: 'DREAD evaluates:', options: ['Vulnerabilities','Attack surface','Risk impact','Patch cycles'], correctAnswer: 2, explanation: 'DREAD quantifies risk impact.', points: 250 },
    { id: 'q3', question: 'Which is a key benefit of threat modeling?', options: ['More firewalls','Faster code execution','Early risk identification','More documentation'], correctAnswer: 2, explanation: 'Threat modeling helps identify risks early in design.', points: 300 },
    { id: 'q4', question: 'Attack tree analysis is used for:', options: ['Code optimization','Threat visualization','Cloud backups','Incident reporting'], correctAnswer: 1, explanation: 'It visualizes attacker paths.', points: 250 },
    { id: 'q5', question: 'What’s the first step in threat modeling?', options: ['Define security controls','Identify assets & scope','Launch red team test','Encrypt traffic'], correctAnswer: 1, explanation: 'Scoping and asset identification come first.', points: 300 },
    { id: 'q6', question: 'Which tool is often used for threat modeling?', options: ['Wireshark','Burp Suite','Microsoft TMT','Metasploit'], correctAnswer: 2, explanation: 'TMT is a dedicated threat modeling tool.', points: 250 },
    { id: 'q7', question: 'The Threat Modeling Manifesto emphasizes:', options: ['Compliance','Resilience over risk','Zero trust','AI usage'], correctAnswer: 1, explanation: 'It highlights resilience-first principles.', points: 300 }
  ],
  maxScore: 1900
},

// ------------------- Module 32 -------------------
{
  id: 'advanced-cryptanalysis',
  title: 'ADVANCED CRYPTANALYSIS',
  description: 'Master breaking and analyzing cryptographic algorithms with modern and classical techniques.',
  difficulty: 'ELITE',
  category: 'CRYPTOGRAPHY',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/TkRz5iYVRA0',
  articleLinks: [
    { title: 'Cryptanalysis Overview', url: 'https://crypto.stackexchange.com/' },
    { title: 'Linear and Differential Cryptanalysis', url: 'https://www.schneier.com/academic/archives/1990/12/differential_crypta.html' },
    { title: 'Modern Attacks on AES', url: 'https://csrc.nist.gov/projects/block-cipher-techniques' },
    { title: 'Post-Quantum Cryptanalysis', url: 'https://pqcrypto.org/' }
  ],
  quiz: [
    { id: 'q1', question: 'Differential cryptanalysis was first applied to:', options: ['RSA','DES','AES','ECC'], correctAnswer: 1, explanation: 'It was developed for DES.', points: 300 },
    { id: 'q2', question: 'Which cryptanalytic attack targets mathematical weaknesses?', options: ['Side-channel','Brute force','Algebraic','Replay'], correctAnswer: 2, explanation: 'Algebraic attacks exploit math properties.', points: 250 },
    { id: 'q3', question: 'What does linear cryptanalysis exploit?', options: ['Timing leaks','Linear approximations of cipher','Padding errors','Power consumption'], correctAnswer: 1, explanation: 'It uses linear relations in ciphers.', points: 300 },
    { id: 'q4', question: 'Which attack type is relevant for quantum threats?', options: ['Grover’s algorithm','Cache timing','Rainbow tables','Salami slicing'], correctAnswer: 0, explanation: 'Grover speeds brute-force key search.', points: 300 },
    { id: 'q5', question: 'Meet-in-the-middle attack applies to:', options: ['Block ciphers','Hash collisions','Digital signatures','Firewalls'], correctAnswer: 0, explanation: 'It weakens double encryption block ciphers.', points: 250 },
    { id: 'q6', question: 'AES S-box is designed to resist:', options: ['Differential & linear attacks','SQL injection','Timing attacks','Brute force'], correctAnswer: 0, explanation: 'Non-linear S-box resists these attacks.', points: 250 },
    { id: 'q7', question: 'Chosen ciphertext attack is relevant to:', options: ['RSA padding','VPN tunnels','DES ECB','Firewalls'], correctAnswer: 0, explanation: 'It breaks RSA via padding oracle vulnerabilities.', points: 300 }
  ],
  maxScore: 1950
},
// ------------------- Module 33 -------------------
{
  id: 'incident-command',
  title: 'INCIDENT COMMAND & CRISIS RESPONSE',
  description: 'Coordinate cyber incident management, crisis communication, and recovery under pressure.',
  difficulty: 'ELITE',
  category: 'OPERATIONS',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/UxZBoJtYjAE',
  articleLinks: [
    { title: 'NIST Incident Handling Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final' },
    { title: 'Crisis Communication in Cybersecurity', url: 'https://www.cisa.gov/resources-tools/resources/incident-response' },
    { title: 'CERT Coordination Center Best Practices', url: 'https://resources.sei.cmu.edu/library/subject-areas/incident-management/' },
    { title: 'Lessons Learned from Major Breaches', url: 'https://www.enisa.europa.eu/publications' }
  ],
  quiz: [
    { id: 'q1', question: 'First phase of incident response per NIST?', options: ['Containment','Preparation','Recovery','Eradication'], correctAnswer: 1, explanation: 'Preparation is the foundation.', points: 250 },
    { id: 'q2', question: 'Which team leads crisis comms?', options: ['SOC','Legal','PR/Communications','Red Team'], correctAnswer: 2, explanation: 'Communication teams handle external messaging.', points: 250 },
    { id: 'q3', question: 'What is a playbook?', options: ['Firewall rule','Predefined response guide','Antivirus tool','Random checklist'], correctAnswer: 1, explanation: 'Playbooks outline predefined responses.', points: 300 },
    { id: 'q4', question: 'Hot site is:', options: ['Unpatched system','Ready-to-use backup site','Encrypted data vault','Threat intel hub'], correctAnswer: 1, explanation: 'Hot site is a fully equipped backup site.', points: 300 },
    { id: 'q5', question: 'After action reports provide:', options: ['Logs only','Lessons learned','New tools','Patching notes'], correctAnswer: 1, explanation: 'They document lessons learned.', points: 250 },
    { id: 'q6', question: 'Incident command system (ICS) is adapted from:', options: ['Military','Disaster response','Banking','Forensics'], correctAnswer: 1, explanation: 'ICS is borrowed from emergency management.', points: 250 },
    { id: 'q7', question: 'Key goal during a cyber crisis?', options: ['Silence media','Eradicate attackers','Ensure resilience & trust','Shut down systems'], correctAnswer: 2, explanation: 'Maintaining trust and continuity is critical.', points: 300 }
  ],
  maxScore: 1900
},
// ------------------- Module 34 -------------------
{
  id: 'ai-threat-detection',
  title: 'AI-POWERED THREAT DETECTION',
  description: 'Leverage artificial intelligence and machine learning models to detect and respond to cyber threats.',
  difficulty: 'ELITE',
  category: 'AI IN CYBER',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/8vW5d8nEBwg',
  articleLinks: [
    { title: 'AI in Cybersecurity Overview', url: 'https://www.ibm.com/security/artificial-intelligence' },
    { title: 'ML for Intrusion Detection Systems', url: 'https://dl.acm.org/doi/10.1145/3372297.3417278' },
    { title: 'Adversarial Attacks on AI Models', url: 'https://arxiv.org/abs/1412.6572' },
    { title: 'Future of AI in Threat Hunting', url: 'https://www.weforum.org/agenda/2021/07/ai-cybersecurity/' }
  ],
  quiz: [
    { id: 'q1', question: 'AI in cybersecurity mainly helps with:', options: ['Faster CPU','Automated threat detection','UI design','VPN tunneling'], correctAnswer: 1, explanation: 'AI automates anomaly detection.', points: 250 },
    { id: 'q2', question: 'Which ML model is popular for anomaly detection?', options: ['CNN','RNN','Isolation Forest','GAN'], correctAnswer: 2, explanation: 'Isolation Forest detects outliers.', points: 300 },
    { id: 'q3', question: 'Adversarial examples are:', options: ['AI-generated fake users','Inputs crafted to fool ML models','Encryption algorithms','Keyloggers'], correctAnswer: 1, explanation: 'They manipulate model predictions.', points: 300 },
    { id: 'q4', question: 'Which dataset is used in IDS research?', options: ['MNIST','CICIDS2017','ImageNet','COCO'], correctAnswer: 1, explanation: 'CICIDS2017 is a common IDS dataset.', points: 250 },
    { id: 'q5', question: 'Deep learning enhances:', options: ['Low latency','Feature extraction','Firmware updates','Code reviews'], correctAnswer: 1, explanation: 'It automates feature extraction from raw data.', points: 250 },
    { id: 'q6', question: 'One risk of AI in cyber defense is:', options: ['Cost','Explainability & bias','Firewall rules','VPN speed'], correctAnswer: 1, explanation: 'Models can be biased and hard to explain.', points: 250 },
    { id: 'q7', question: 'GANs in cyber defense can be used to:', options: ['Generate malware','Simulate realistic attack traffic','Encrypt traffic','Patch systems'], correctAnswer: 1, explanation: 'GANs generate synthetic attack data.', points: 300 }
  ],
  maxScore: 1900
},
// ------------------- Module 35 -------------------
{
  id: 'bio-cybersecurity',
  title: 'BIO-CYBERSECURITY',
  description: 'Protect biomedical devices, genomics pipelines, and healthcare systems from cyber threats and data poisoning.',
  difficulty: 'ELITE',
  category: 'HEALTHCARE SECURITY',
  isLocked: false,
  requiredLevel: 13,
  videoUrl: 'https://www.youtube.com/embed/9b6XKc8X8hQ',
  articleLinks: [
    { title: 'Security Risks in Medical Devices', url: 'https://www.fda.gov/medical-devices' },
    { title: 'Protecting Genomic Data', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC/' },
    { title: 'Healthcare Cybersecurity Best Practices', url: 'https://www.hhs.gov/cybersecurity' },
    { title: 'Data Poisoning in Bioinformatics', url: 'https://arxiv.org/abs/2002.00000' }
  ],
  quiz: [
    { id: 'q1', question: 'A primary risk for medical devices is:', options: ['Firmware vulnerabilities','Too many users','High battery life','Large screens'], correctAnswer: 0, explanation: 'Unpatched firmware can allow remote compromise.', points: 300 },
    { id: 'q2', question: 'Genomic data privacy concerns mainly involve:', options: ['High bandwidth','Re-identification of donors','Lack of color','Slow PCR'], correctAnswer: 1, explanation: 'Genetic datasets can be re-identified if not protected.', points: 300 },
    { id: 'q3', question: 'Data poisoning aims to:', options: ['Break ML models by corrupting training data','Encrypt backups','Improve performance','Shorten code'], correctAnswer: 0, explanation: 'Poisoned inputs cause incorrect model behavior.', points: 300 },
    { id: 'q4', question: 'Medical device risk mitigation includes:', options: ['Secure boot & signed firmware','Open WiFi by default','Disable logs','Remove encryption'], correctAnswer: 0, explanation: 'Firmware signing and secure boot help prevent tampering.', points: 300 },
    { id: 'q5', question: 'Which regulation often applies to health data?', options: ['HIPAA','GDPR only','PCI-DSS','DMCA'], correctAnswer: 0, explanation: 'HIPAA governs handling of protected health information in the U.S.', points: 300 },
    { id: 'q6', question: 'A supply chain threat in biotech could be:', options: ['Malicious reagent labeling','Software dependency tampering','Both','None'], correctAnswer: 2, explanation: 'Both physical product tampering and software compromise are real risks.', points: 350 },
    { id: 'q7', question: 'Best practice for ML models on biomedical data is:', options: ['Use differential privacy / PETs','Train on raw public data','No testing','Disable logging'], correctAnswer: 0, explanation: 'Privacy-enhancing tech reduces leakage of sensitive attributes.', points: 350 }
  ],
  maxScore: 2150
},

// ------------------- Module 36 -------------------
{
  id: 'election-security',
  title: 'ELECTION SECURITY & RESILIENCE',
  description: 'Defend electoral systems, voting infrastructure, and information ecosystems from manipulation and disruption.',
  difficulty: 'ELITE',
  category: 'NATION-STATE SECURITY',
  isLocked: false,
  requiredLevel: 14,
  videoUrl: 'https://www.youtube.com/embed/4V2xJ7zL2k8',
  articleLinks: [
    { title: 'Securing Elections: Principles', url: 'https://www.idea.int/news-media/multimedia-reports' },
    { title: 'Disinformation & Information Integrity', url: 'https://www.assembly.org/research' },
    { title: 'Voting Machine Security', url: 'https://www.us-cert.gov/ics' },
    { title: 'Resilience in Civic Tech', url: 'https://www.nist.gov/publications' }
  ],
  quiz: [
    { id: 'q1', question: 'A key vector for electoral interference is:', options: ['Disinformation campaigns','Faster polling places','Bigger ballots','More cookies'], correctAnswer: 0, explanation: 'Information operations aim to shape public perception.', points: 300 },
    { id: 'q2', question: 'End-to-end verifiable voting systems provide:', options: ['Cryptographic auditability','Faster voting','No privacy','Public keys only'], correctAnswer: 0, explanation: 'They allow voters and auditors to verify results without revealing ballots.', points: 300 },
    { id: 'q3', question: 'Supply chain risk to voting includes:', options: ['Malicious firmware in voting machines','Long queues','Advertising','Better UX'], correctAnswer: 0, explanation: 'Injected firmware or compromised components can alter results.', points: 300 },
    { id: 'q4', question: 'Mitigations against disinformation include:', options: ['Media literacy & rapid response','Removing all news','Blocking internet','No communication'], correctAnswer: 0, explanation: 'Education and timely corrections reduce impact.', points: 300 },
    { id: 'q5', question: 'A secure election backup strategy should include:', options: ['Immutable audit logs & paper trails','Only digital records','No logs','Public spreadsheets'], correctAnswer: 0, explanation: 'Paper trails and immutable logs enable reliable audits.', points: 300 },
    { id: 'q6', question: 'Physical chain-of-custody for ballots ensures:', options: ['Tamper evidence & accountability','Faster counting','Public access','Encryption of votes'], correctAnswer: 0, explanation: 'Proper custody prevents undetected tampering.', points: 350 },
    { id: 'q7', question: 'Red team exercises for elections test:', options: ['Voter behavior only','Systemic vulnerabilities across tech & info domains','Only ballots','Only registration'], correctAnswer: 1, explanation: 'Exercises simulate cross-domain attacks to improve resilience.', points: 350 }
  ],
  maxScore: 2150
},

// ------------------- Module 37 -------------------
{
  id: 'offensive-ai',
  title: 'OFFENSIVE AI TECHNIQUES',
  description: 'Understand how AI can be weaponized (deepfakes, automated social engineering, model-steering) to design defenses.',
  difficulty: 'ELITE',
  category: 'OFFENSIVE TECH',
  isLocked: false,
  requiredLevel: 15,
  videoUrl: 'https://www.youtube.com/embed/5o6YhG4t2Xc',
  articleLinks: [
    { title: 'Deepfakes & Threats', url: 'https://www.deepfakes.org/research' },
    { title: 'Automated Social Engineering', url: 'https://arxiv.org/abs/2006.00000' },
    { title: 'Model Steering & Data Poisoning', url: 'https://adversarial-ml.github.io/' },
    { title: 'Ethics & Governance of Offensive AI', url: 'https://www.partnershiponai.org/' }
  ],
  quiz: [
    { id: 'q1', question: 'A common offensive AI risk is:', options: ['Deepfake-enabled fraud','Faster CPUs','More storage','Better UI'], correctAnswer: 0, explanation: 'Deepfakes facilitate impersonation and fraud at scale.', points: 300 },
    { id: 'q2', question: 'Model-steering attacks aim to:', options: ['Manipulate model outputs by influencing training or inputs','Fix models automatically','Improve accuracy','Clean data'], correctAnswer: 0, explanation: 'Steering changes model behavior to attacker goals.', points: 300 },
    { id: 'q3', question: 'Automated spear-phishing can be enhanced by:', options: ['Generative models that craft tailored messages','Turning off email','Encrypting everything','Deleting users'], correctAnswer: 0, explanation: 'Generative AI creates convincing targeted messages.', points: 300 },
    { id: 'q4', question: 'Defenses against offensive AI include:', options: ['Watermarking content and provenance verification','Removing all ML','No internet','Disable emails'], correctAnswer: 0, explanation: 'Provenance and detection help spot synthetic content.', points: 300 },
    { id: 'q5', question: 'Adversarial examples are used to:', options: ['Cause misclassification in ML models','Speed up training','Reduce memory','Patch systems'], correctAnswer: 0, explanation: 'They perturb inputs to fool models.', points: 300 },
    { id: 'q6', question: 'Data poisoning in training pipelines results in:', options: ['Backdoored models','Immediate crashes','Faster inference','Better UX'], correctAnswer: 0, explanation: 'Poisoned data can implant backdoors or biases.', points: 350 },
    { id: 'q7', question: 'Ethical offensive AI research must ensure:', options: ['Clear red-team rules, consent & mitigations','No experiments','Public release of all attacks','No documentation'], correctAnswer: 0, explanation: 'Responsible research needs guardrails and ethics.', points: 350 }
  ],
  maxScore: 2150
},

// ------------------- Module 38 -------------------
{
  id: 'space-systems-security',
  title: 'SPACE SYSTEMS & SATELLITE SECURITY',
  description: 'Secure satellites, ground stations, and spaceborne infrastructure from cyber and physical threats.',
  difficulty: 'ELITE',
  category: 'AEROSPACE SECURITY',
  isLocked: false,
  requiredLevel: 16,
  videoUrl: 'https://www.youtube.com/embed/J7YLGZTwGPI',
  articleLinks: [
    { title: 'Satellite Cybersecurity Challenges', url: 'https://pdf.sciencedirectassets.com/277415/1-s2.0-S1874548224X00049/1-s2.0-S1874548224000659/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLWVhc3QtMSJHMEUCIDwKFFFpB4NCDVC60snCa8eMAIjCbbbydsGlRc6utA1rAiEApk4ZJQQvSyge%2BmwKAYHcvbJRhdU3Uptz4N%2B502DBsQMqvAUI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDINP1Fefdi0nLM3lTiqQBb1p9mQgIs%2FDbiZocVOUgeXo4X8bz7R2xABspwhTb55PcsObPz27t5NnhjFT4XhMudhvFAfbTAwuz73gDssl3zcA0yBweECb42RGW%2FpZ%2B8ub4dqoXY5b6gPNZLJ15Am8fYGMrzsTh%2BYsqgDczb8J%2Bd8Baa7cVeIKQSu%2BhlR2aKa7kZjOHqA2sC86w9uakZ0KexUkOMTq6WvFcdyOAqa8um5xbMY4xNgIfqJp113UsIJQGbNmG4C5gsxlRbf3jI4Ua0452bJUq49J22f41KEBbohB21nuly5qHABuZ6zM8OS8O03qE8wX%2BICBkuwQJTZ4zJJ2Sf1Yq0SjeuqPY0QceAeuDysczniKt%2F0HnQPh4ZWB2qNfq6umdnBUXvT4HBwclDm%2FVKTPtdA0zPS2dB5%2F%2FarBgQloArSvMbDlrjNp%2BVWPO6jM%2BwC%2FNT%2B8Uxh%2FDkBJ6MEa%2BjZnka4nuhy0XEosp%2Bn%2FS4vpaafMUiKgKr14X10d%2B0GMkLJCbtI2Cj8UpSwb%2BGXj8Vwrs8Y1H55OF%2BzWKeT85jL6UWuHqrgWAIyt0ifpSKybcF0akHf5tcZWVxJ3%2BmykWZobup1nGKN0R3HhjhnLoU20NMd7lcxE6GvrvPxiaZYs4lB7l%2F%2BUXfg3G1IvvBHZYeY3G3gMGMGPkNELUAE7C1a4l%2F3W9HLEGf%2FBW7rrvdbzXc4N77jY74CCVJaQ9bopeLeyqLlIpkHY6jRSxHkenC5H0TGswXhEpjmKrVsntemIYZ0FCtvZdGI7MnE6kpE%2Bze0VHDNYA6io%2Fn%2FvEfKikbgrckUpcqsPt7cnxUE2SUdzWRSYuuub9K16I6Iy59tTFM8R%2Bh4SBvlfokKFkD5PR2fdQ0wZAPuJvIf2l1VsMLXQoscGOrEBcMO7MgZxx3MniM2qYJtRugplPkQYqH0RbRI4CSakwa8dih8l9onUVJXs4uJiXuHAATcByv2hk5ILj8r0%2FpoL9E4UQ9HnSj5Z6MFN916eCjKSVXaKaGJL9vyDPSOGKomPQlhTkPkx9upPZdOOI%2BRm55wPj34oyYaTj%2FSoY%2B8ViSf05wafp97ri%2BbJ9cbRkLN%2FY2w%2F8h2q2v9JCXpGbCo3G6Sf6EB5BimHc2B%2B6UAwPt3X&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20251010T070130Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTY64KAB3GC%2F20251010%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1e4738549d051ca49b3f7504baad5d8c15d8976d1e974b1e261e4603cca99591&hash=c8ed52531dbf20e9b7de4bb20c345a5ce33243e7137ff28dd5a4bc05a5d3ab15&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S1874548224000659&tid=spdf-05f8fb25-a5dd-47f6-96e1-95ef9919d12b&sid=f38c8799735eb642e0787985af2e32025df4gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&rh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=130c5d5906575c08515e&rr=98c43f313db92e96&cc=in' },
    { title: 'Ground Station Hardening', url: 'https://www.trentonsystems.com/en-us/resource-hub/blog/system-hardening-overview' },
    { title: 'Spacecraft Communications Security', url: 'https://www.esa.int/Safety_Security' },
    { title: 'Supply Chain Risks in Aerospace', url: 'https://www.mckinsey.com/industries/aerospace-and-defense/our-insights/addressing-continued-turbulence-the-commercial-aerospace-supply-chain' }
  ],
  quiz: [
    { id: 'q1', question: 'A core threat to satellites is:', options: ['Jamming & spoofing of communications','Slow ground links','Better cameras','Larger antennas'], correctAnswer: 0, explanation: 'Jamming and GNSS spoofing disrupt signals and navigation.', points: 300 },
    { id: 'q2', question: 'Ground station compromise can allow:', options: ['Command injection & satellite takeover','Faster downloads','Weather control','Free bandwidth'], correctAnswer: 0, explanation: 'Control of ground infrastructure can manipulate satellites.', points: 300 },
    { id: 'q3', question: 'Space systems must consider both cyber and:', options: ['Physical threats & space environment hazards','Only software','Only firmware','Only users'], correctAnswer: 0, explanation: 'Radiation, micrometeoroids, and physical threats matter.', points: 300 },
    { id: 'q4', question: 'Secure satellite comms use:', options: ['Encryption, authentication & anti-spoofing','Open telemetry','No security','Public keys only'], correctAnswer: 0, explanation: 'Robust crypto and auth protect links.', points: 300 },
    { id: 'q5', question: 'A supply chain risk in space hardware could be:', options: ['Malicious components added during manufacture','Faster processors','Irrelevant backups','Bigger antennas'], correctAnswer: 0, explanation: 'Malicious or counterfeit parts can compromise missions.', points: 300 },
    { id: 'q6', question: 'Resilience strategies include:', options: ['Distributed command, failover & anomaly detection','Disabling telemetry','No monitoring','Public consoles'], correctAnswer: 0, explanation: 'Redundancy and detection improve survivability.', points: 350 },
    { id: 'q7', question: 'Regulatory coordination for space cyber is needed because:', options: ['Space is multi-jurisdictional & shared infrastructure','It is cheap','It is local only','It is unimportant'], correctAnswer: 0, explanation: 'International collaboration is required for norms and response.', points: 350 }
  ],
  maxScore: 2150
},
// 39 
{
  id: 'devsecops-sdlc',
  title: 'SECURE SDLC & DEVSECOPS PLAYBOOK',
  description: 'Bake security into planning, coding, build, and deploy with automated checks.',
  difficulty: 'AGENT',
  category: 'ENGINEERING',
  isLocked: false,
  requiredLevel: 6,
  videoUrl: 'https://www.youtube.com/embed/5g0x2xv5w18',
  articleLinks: [
    { title: 'NIST SSDF (SP 800-218)', url: 'https://csrc.nist.gov/pubs/sp/800/218/final' },
    { title: 'OWASP SAMM', url: 'https://owaspsamm.org/model' },
    { title: 'Supply Chain Levels for Software Artifacts (SLSA)', url: 'https://slsa.dev/' }
  ],
  quiz: [
    { id: 'q1', question: 'Which control most directly reduces build-pipeline tampering?', options: ['Unit tests', 'Provenance (SLSA) + signed artifacts', 'Longer PR templates', 'Monorepo only'], correctAnswer: 1, explanation: 'Provenance and signing protect artifacts.', points: 250 },
    { id: 'q2', question: 'Best stage to threat-model?', options: ['After release', 'Design/requirements', 'Only during pen test', 'Never'], correctAnswer: 1, explanation: 'Early modeling prevents expensive fixes.', points: 250 },
    { id: 'q3', question: 'A secure PR gate often includes:', options: ['Style checks only', 'SAST/DAST/Secrets scanning + required reviews', 'Manual deploys only', 'Weekend merges'], correctAnswer: 1, explanation: 'Automated checks + human review.', points: 300 },
    { id: 'q4', question: 'SBOM primarily improves:', options: ['Latency', 'Component visibility & vuln response', 'UX', 'CDN perf'], correctAnswer: 1, explanation: 'Know what you run.', points: 250 },
    { id: 'q5', question: 'Golden path CI pattern:', options: ['Ad-hoc scripts', 'Reusable hardened workflows', 'Per-repo snowflakes', 'Skip caching'], correctAnswer: 1, explanation: 'Standardized hardened pipelines.', points: 300 }
  ],
  maxScore: 1350
},
// 40
{
  id: 'k8s-security-deep-dive',
  title: 'KUBERNETES SECURITY DEEP DIVE',
  description: 'Lock down clusters: RBAC, network policies, admission control, and supply chain.',
  difficulty: 'ELITE',
  category: 'CLOUD',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/POC3A0HnWJw',
  articleLinks: [
    { title: 'Kubernetes Security Overview', url: 'https://kubernetes.io/docs/concepts/security/' },
    { title: 'CNCF TAG Security Whitepaper', url: 'https://github.com/cncf/tag-security' },
    { title: 'Pod Security Admission', url: 'https://kubernetes.io/docs/concepts/security/pod-security-standards/' }
  ],
  quiz: [
    { id:'q1', question:'Best control to block privileged pods org-wide?', options:['Calico only','Pod Security Admission with baseline/restricted','DaemonSets','CRI swap'], correctAnswer:1, explanation:'PSA enforces pod security.', points:320 },
    { id:'q2', question:'Cluster-admin creds should be scoped via:', options:['Opaque secrets','Ephemeral certs + RBAC + audit','Static kubeconfig', 'NodePorts'], correctAnswer:1, explanation:'Short-lived certs & RBAC reduce risk.', points:320 },
    { id:'q3', question:'Image supply-chain hardening:', options:[':latest tags','Sigstore/cosign signing + policy', 'No SBOM', 'Allow root'], correctAnswer:1, explanation:'Verify provenance at admission.', points:340 },
    { id:'q4', question:'Egress control for pods is best with:', options:['SecurityContext only','NetworkPolicies', 'Labels', 'ClusterIP'], correctAnswer:1, explanation:'Policies define allowed flows.', points:320 },
    { id:'q5', question:'ServiceAccount token abuse mitigated by:', options:['Auto-mount tokens everywhere','BoundServiceAccountTokenVolume + audience scoping','Long TTL static tokens','Disable RBAC'], correctAnswer:1, explanation:'Scoped, short-lived tokens.', points:360 },
    { id:'q6', question:'Lateral movement detection:', options:['CPU usage','Audit events + eBPF network sensors','DNS only','Pod names'], correctAnswer:1, explanation:'Telemetry for behavior.', points:340 },
    { id:'q7', question:'If etcd is exposed:', options:['Nothing happens','Cluster state leakage & secret theft likely','Only logs leak','It’s safe by default'], correctAnswer:1, explanation:'Etcd must be isolated/encrypted.', points:380 }
  ],
  maxScore: 2380
},
// 41
{
  id: 'api-security-oauth2',
  title: 'API SECURITY & OAUTH2/OIDC',
  description: 'Design secure APIs with OAuth2.1, OIDC, scopes, and robust token practices.',
  difficulty: 'AGENT',
  category: 'APPLICATION SECURITY',
  isLocked: false,
  requiredLevel: 7,
  videoUrl: 'https://www.youtube.com/embed/996OiexHze0',
  articleLinks: [
    { title: 'OAuth 2.1 Draft Overview', url: 'https://oauth.net/2.1/' },
    { title: 'OpenID Connect Core', url: 'https://openid.net/specs/openid-connect-core-1_0.html' },
    { title: 'API Security Top 10 (OWASP)', url: 'https://owasp.org/www-project-api-security/' }
  ],
  quiz: [
    { id:'q1', question:'Best flow for server-side web apps?', options:['Implicit','Authorization Code with PKCE','Password grant','Device code'], correctAnswer:1, explanation:'Auth Code + PKCE is modern default.', points:250 },
    { id:'q2', question:'Audience restriction prevents:', options:['Replay','Token confusion across services','Latency', 'CORS'], correctAnswer:1, explanation:'aud claim binds token to API.', points:250 },
    { id:'q3', question:'Where to store access tokens in SPAs?', options:['localStorage', 'In memory (short-lived) + BFF pattern', 'Cookies without flags','Anywhere'], correctAnswer:1, explanation:'Reduce exfiltration surface.', points:300 },
    { id:'q4', question:'Scope design principle:', options:['Monolith scope','Least privilege fine-grained scopes','One mega scope','Dynamic scopes in token'], correctAnswer:1, explanation:'Principle of least privilege.', points:250 },
    { id:'q5', question:'Refresh token risk is mitigated by:', options:['Long TTL','Rotating tokens + reuse detection','Sharing tokens', 'Hardcoding'], correctAnswer:1, explanation:'Rotation & detection limit abuse.', points:300 }
  ],
  maxScore: 1350
},
// 42
{
  id: 'email-auth',
  title: 'EMAIL AUTH: SPF, DKIM, DMARC',
  description: 'Stop spoofing and improve deliverability with domain-level email authentication.',
  difficulty: 'ROOKIE',
  category: 'EMAIL SECURITY',
  isLocked: false,
  requiredLevel: 2,
  videoUrl: 'https://www.youtube.com/embed/pP6t6vK7jQo',
  articleLinks: [
    { title: 'SPF Project', url: 'https://www.openspf.org/' },
    { title: 'DKIM.org', url: 'https://dkim.org/' },
    { title: 'DMARC.org Overview', url: 'https://dmarc.org/overview/' }
  ],
  quiz: [
    { id:'q1', question:'SPF validates:', options:['Sender IP authorized by domain','Message body', 'Attachments','Recipients'], correctAnswer:0, explanation:'SPF is IP-based.', points:200 },
    { id:'q2', question:'DKIM provides:', options:['Link protection','Domain-level signature of headers/body','Spam scoring','TLS'], correctAnswer:1, explanation:'Cryptographic signatures.', points:200 },
    { id:'q3', question:'DMARC alignment requires:', options:['SPF OR DKIM aligned to From:', 'Just TLS', 'Both always', 'None'], correctAnswer:0, explanation:'At least one aligned.', points:250 },
    { id:'q4', question:'Best rollout:', options:['p=reject immediately', 'monitor (p=none) → quarantine → reject', 'Skip rua/ruf', 'Wildcard everything'], correctAnswer:1, explanation:'Gradual with reports.', points:200 },
    { id:'q5', question:'BIMI adds:', options:['Icons in clients via VMCs','TLS', 'Spam filter', 'Quarantine'], correctAnswer:0, explanation:'Brand indicators after DMARC.', points:250 }
  ],
  maxScore: 1100
},
// 43
{
  id: 'browser-webauthn',
  title: 'PASSKEYS, WEBAUTHN & FIDO2',
  description: 'Phishing-resistant authentication using platform and roaming authenticators.',
  difficulty: 'AGENT',
  category: 'ACCESS CONTROL',
  isLocked: false,
  requiredLevel: 5,
  videoUrl: 'https://www.youtube.com/embed/UVlqCw3rK5w',
  articleLinks: [
    { title: 'WebAuthn Level 3 (W3C)', url: 'https://www.w3.org/TR/webauthn-3/' },
    { title: 'FIDO2 Overview', url: 'https://fidoalliance.org/fido2/' },
    { title: 'Passkeys Explained', url: 'https://passkeys.dev/' }
  ],
  quiz: [
    { id:'q1', question:'WebAuthn resists phishing because:', options:['Longer passwords', 'Origin-bound challenges & key pairs', 'CAPTCHAs', 'Email codes'], correctAnswer:1, explanation:'Origin binding prevents replay.', points:250 },
    { id:'q2', question:'Best UX with high security:', options:['Passwords only','Passkeys synced across devices + backup key', 'SMS', 'Email OTP'], correctAnswer:1, explanation:'Passkeys combine security/UX.', points:250 },
    { id:'q3', question:'Roaming authenticators are:', options:['Platform only', 'External (USB/NFC/BLE) keys', 'TOTP apps', 'Hardware TPMs only'], correctAnswer:1, explanation:'Security keys can roam.', points:250 },
    { id:'q4', question:'Attestation enables:', options:['Tracking users', 'Policy on authenticator properties', 'Longer tokens', 'None'], correctAnswer:1, explanation:'Constrain hardware types.', points:300 },
    { id:'q5', question:'Fallback strategy should avoid:', options:['SMTP reset', 'Weak phishable flows', 'Helpdesk social engineering', 'All of the above'], correctAnswer:3, explanation:'Keep fallback strong.', points:300 }
  ],
  maxScore: 1350
},
// 44
{
  id: 'insider-dlp',
  title: 'INSIDER THREAT & DLP',
  description: 'Detect and prevent data exfiltration by malicious or careless insiders.',
  difficulty: 'AGENT',
  category: 'DATA SECURITY',
  isLocked: false,
  requiredLevel: 6,
  videoUrl: 'https://www.youtube.com/embed/4j4l9qO3cGU',
  articleLinks: [
    { title: 'NIST Insider Threat Guide', url: 'https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final' },
    { title: 'Mitre ATT&CK: Exfiltration', url: 'https://attack.mitre.org/tactics/TA0010/' },
    { title: 'DLP Program Basics', url: 'https://www.sans.org/blog/data-loss-prevention-dlp/' }
  ],
  quiz: [
    { id:'q1', question:'Strongest predictor of insider risk combines:', options:['Badge data', 'Behavior + access patterns + HR signals', 'MFA', 'IP allowlists'], correctAnswer:1, explanation:'Multi-signal analytics.', points:250 },
    { id:'q2', question:'Hallmark of low-friction DLP:', options:['Block everything','Context-aware policies + coaching', 'Email bans', 'USB bans only'], correctAnswer:1, explanation:'Coach > hard blocks.', points:250 },
    { id:'q3', question:'Shadow channels include:', options:['SFTP only','Personal email, cloud drives, messaging apps', 'VPN only', 'SSH only'], correctAnswer:1, explanation:'Multiple exfil paths.', points:300 },
    { id:'q4', question:'Best protection for source code exfil:', options:['PDF watermarks','Repo-aware DLP + canary commits', 'Disable Git', 'ZIP scans only'], correctAnswer:1, explanation:'Repository context matters.', points:300 },
    { id:'q5', question:'True/False: DLP without user trust is sustainable.', options:['True','False'], correctAnswer:1, explanation:'People bypass hostile controls.', points:250 }
  ],
  maxScore: 1350
},
// 45
{
  id: 'siem-detection-eng',
  title: 'SIEM & DETECTION ENGINEERING',
  description: 'Build robust detections, reduce noise, and measure coverage.',
  difficulty: 'AGENT',
  category: 'OPERATIONS',
  isLocked: false,
  requiredLevel: 7,
  videoUrl: 'https://www.youtube.com/embed/6m1sQb6s2rk',
  articleLinks: [
    { title: 'MITRE ATT&CK', url: 'https://attack.mitre.org/' },
    { title: 'Detection as Code Concepts', url: 'https://www.sigmahq-publisher.github.io/' },
    { title: 'Measuring SOC Effectiveness', url: 'https://www.first.org/resources/papers/' }
  ],
  quiz: [
    { id:'q1', question:'Best way to keep rules maintainable:', options:['Copy/paste','Detection-as-code + CI tests', 'One giant rule', 'Email rules'], correctAnswer:1, explanation:'Versioned rules + CI.', points:250 },
    { id:'q2', question:'Coverage is best measured by:', options:['# of rules', 'ATT&CK mapping + test cases', '# of alerts', 'Dashboards'], correctAnswer:1, explanation:'Map to behaviors & test.', points:300 },
    { id:'q3', question:'Noise control:', options:['Disable rules', 'Thresholding, lookbacks, entity risk scoring', 'Shorter logs', 'CSV export'], correctAnswer:1, explanation:'Tune, don’t blind.', points:250 },
    { id:'q4', question:'Replay validation uses:', options:['Prod only', 'Simulated events & adversary emulation', 'Random traffic', 'None'], correctAnswer:1, explanation:'Validation by emulation.', points:250 },
    { id:'q5', question:'Detection drift is mitigated by:', options:['Static rules', 'Scheduled evaluation against fresh telemetry', 'Bigger CPU', 'DNS tweaks'], correctAnswer:1, explanation:'Continuously re-test rules.', points:300 }
  ],
  maxScore: 1350
},
// 46
{
  id: 'tls-pki-engineering',
  title: 'TLS & PKI ENGINEERING',
  description: 'Design, operate, and audit certificates, CAs, and TLS at scale.',
  difficulty: 'ELITE',
  category: 'CRYPTOGRAPHY',
  isLocked: false,
  requiredLevel: 12,
  videoUrl: 'https://www.youtube.com/embed/Zb7uK5c9V1U',
  articleLinks: [
    { title: 'RFC 8446 (TLS 1.3)', url: 'https://www.rfc-editor.org/rfc/rfc8446' },
    { title: 'CAB Forum Baseline Requirements', url: 'https://cabforum.org/baseline-requirements-documents/' },
    { title: 'OCSP Stapling & Must-Staple', url: 'https://letsencrypt.org/docs/internet-security-research-group/' }
  ],
  quiz: [
    { id:'q1', question:'Why prefer TLS 1.3?', options:['More ciphers', 'Fewer round trips + modern AEAD suites', 'Because trendy', 'HTTP/3 only'], correctAnswer:1, explanation:'Performance + security.', points:320 },
    { id:'q2', question:'Must-Staple helps by:', options:['Speed only','Enforcing fresh revocation status', 'Bigger certs','HSTS'], correctAnswer:1, explanation:'Revocation at client.', points:340 },
    { id:'q3', question:'Internal PKI risk:', options:['Short lifetimes', 'Shadow CAs & weak issuance controls', 'CT logs', 'SNI'], correctAnswer:1, explanation:'Issuance control is key.', points:340 },
    { id:'q4', question:'Cipher choice today:', options:['CBC suites', 'TLS_AES_128_GCM_SHA256 or chacha20-poly1305', 'RC4', '3DES'], correctAnswer:1, explanation:'Use AEAD modern suites.', points:360 },
    { id:'q5', question:'CT logs mainly provide:', options:['OCSP','Certificate transparency & mis-issuance detection', 'DNS', 'Pinning'], correctAnswer:1, explanation:'Detect rogue certs.', points:360 },
    { id:'q6', question:'Mutual TLS improves:', options:['Only client auth', 'Both ends auth + channel binding', 'Only server auth','DNS'], correctAnswer:1, explanation:'mTLS authenticates both peers.', points:360 },
    { id:'q7', question:'Safest zero-downtime rotation:', options:['Big-bang', 'Overlap validity + staged rollout + canary', 'Never rotate','Wildcard only'], correctAnswer:1, explanation:'Overlap avoids outages.', points:380 }
  ],
  maxScore: 2460
},
// 47
{
  id: 'global-privacy-advanced',
  title: 'GLOBAL PRIVACY LAW ADVANCED',
  description: 'Deep dive into GDPR, CCPA/CPRA, LGPD, PIPEDA, PDPA, and cross-border transfers.',
  difficulty: 'AGENT',
  category: 'PRIVACY',
  isLocked: false,
  requiredLevel: 8,
  videoUrl: 'https://www.youtube.com/embed/0gkW1m3vZcA',
  articleLinks: [
    { title: 'EDPB Guidance Hub', url: 'https://edpb.europa.eu/our-work-tools/general-guidance_en' },
    { title: 'CPRA Regulations', url: 'https://cppa.ca.gov/regulations' },
    { title: 'OECD Privacy Guidelines', url: 'https://www.oecd.org/sti/privacyguidelines.htm' }
  ],
  quiz: [
    { id:'q1', question:'GDPR Art. 46 mechanisms include:', options:['Standard Contractual Clauses', 'Verbal promises','VPN','Cookie banners'], correctAnswer:0, explanation:'SCCs enable transfers.', points:250 },
    { id:'q2', question:'DPIA triggers include:', options:['Low risk','Large-scale special-category data', 'Personal blog', 'Open data only'], correctAnswer:1, explanation:'High-risk processing.', points:300 },
    { id:'q3', question:'CCPA/CPRA adds a right to:', options:['Forget only','Correct and limit use of sensitive PI', 'Portability only', 'Erasure only'], correctAnswer:1, explanation:'CPRA expands rights.', points:250 },
    { id:'q4', question:'Lawful basis MOST misused:', options:['Consent without granularity', 'Contract', 'Legal obligation', 'Vital interests'], correctAnswer:0, explanation:'Consent must be informed/specific.', points:250 },
    { id:'q5', question:'Records of processing help with:', options:['SEO','Accountability & audits','CDN','DevOps'], correctAnswer:1, explanation:'Art. 30 compliance.', points:300 }
  ],
  maxScore: 1400
},
// 48
{
  id: 'pci-dss-payments',
  title: 'PCI DSS & PAYMENT SECURITY',
  description: 'Protect cardholder data and architect compliant payment flows.',
  difficulty: 'AGENT',
  category: 'GOVERNANCE',
  isLocked: false,
  requiredLevel: 7,
  videoUrl: 'https://www.youtube.com/embed/1K1m9m0h2wY',
  articleLinks: [
    { title: 'PCI DSS 4.0 Quick Reference', url: 'https://www.pcisecuritystandards.org/document_library' },
    { title: 'Tokenization Guidance', url: 'https://www.pcisecuritystandards.org' },
    { title: 'NIST Tokenization Overview', url: 'https://csrc.nist.gov/projects/privacy-engineering' }
  ],
  quiz: [
    { id:'q1', question:'Primary way to reduce PCI scope:', options:['VPN','Outsource payment capture & tokenize', 'IP allowlist', 'EDR'], correctAnswer:1, explanation:'Hosted fields/tokenization minimize scope.', points:250 },
    { id:'q2', question:'PAN storage allowed if:', options:['Encrypted + access controls + retention limits','Plain text', 'Email', 'CSV in drive'], correctAnswer:0, explanation:'Strict controls required.', points:300 },
    { id:'q3', question:'SAQ type depends on:', options:['Logo', 'Payment channel architecture', 'Company size', 'Country'], correctAnswer:1, explanation:'Architecture determines SAQ.', points:250 },
    { id:'q4', question:'Key PCI logging principle:', options:['Log PAN fully', 'Mask PAN; restrict access', 'No logs', 'Store CVV'], correctAnswer:1, explanation:'Protect sensitive fields.', points:250 },
    { id:'q5', question:'Best practice for third-party gateways:', options:['Implicit trust','Due diligence + contracts + monitoring', 'DIY', 'Ignore AOCs'], correctAnswer:1, explanation:'Vendors extend risk surface.', points:300 }
  ],
  maxScore: 1350
},
// 49
{
  id: 'wireless-bluetooth-security',
  title: 'WIRELESS & BLUETOOTH SECURITY',
  description: 'Secure Wi-Fi and Bluetooth stacks, from WPA3 to BLE attacks.',
  difficulty: 'ROOKIE',
  category: 'NETWORK',
  isLocked: false,
  requiredLevel: 3,
  videoUrl: 'https://www.youtube.com/embed/4qg1y2lEw0w',
  articleLinks: [
    { title: 'WPA3 Overview (Wi-Fi Alliance)', url: 'https://www.wi-fi.org/discover-wi-fi/security' },
    { title: 'Bluetooth Security Guide', url: 'https://www.bluetooth.com/learn-about-bluetooth/tech-overview/' },
    { title: 'KRACK & Dragonblood Primers', url: 'https://www.dragonblood.io/' }
  ],
  quiz: [
    { id:'q1', question:'WPA3 SAE improves:', options:['Open Wi-Fi','Offline dictionary resistance', 'MAC filtering', 'WEP'], correctAnswer:1, explanation:'Password-authenticated key exchange.', points:200 },
    { id:'q2', question:'BLE risk:', options:['Pairing mode misconfig & Just Works', 'Too much bandwidth', 'Expensive radios', 'Fiber only'], correctAnswer:0, explanation:'Weak pairing is exploitable.', points:250 },
    { id:'q3', question:'Enterprise Wi-Fi hardening:', options:['Shared PSK', '802.1X + certs + per-user auth', 'Open network', 'Hidden SSID'], correctAnswer:1, explanation:'Per-user identities.', points:250 },
    { id:'q4', question:'Rogue AP detection via:', options:['LED color','WIDS + RF scans', 'SSID length', 'Captcha'], correctAnswer:1, explanation:'Wireless IDS monitors airspace.', points:200 },
    { id:'q5', question:'Guest networks should be:', options:['Flat LAN','Isolated VLAN with egress limits', 'Bridged to prod', 'Open L2'], correctAnswer:1, explanation:'Segment guests.', points:250 }
  ],
  maxScore: 1150
},
{
  id: 'drone-cybersecurity',
  title: 'DRONE CYBERSECURITY OPERATIONS',
  description: 'Protect unmanned aerial systems (UAS) from hijacking, spoofing, and cyber-physical risks.',
  difficulty: 'ELITE',
  category: 'AEROSPACE SECURITY',
  isLocked: false,
  requiredLevel: 19,
  videoUrl: 'https://www.youtube.com/embed/4H2N3hFhS9k',
  articleLinks: [
    { title: 'Drone Security Threats', url: 'https://www.cisa.gov/publication/unmanned-aircraft-systems' },
    { title: 'GPS Spoofing Attacks', url: 'https://www.sciencedirect.com/science/article/pii/S0167404820300000' },
    { title: 'UAS Cybersecurity Guidelines', url: 'https://www.nist.gov/news-events/news/uas-security' },
    { title: 'Drone Warfare Risks', url: 'https://www.rand.org/pubs/research_reports/RRA100-1.html' }
  ],
  quiz: [
    { id: 'q1', question: 'A key cyber threat to drones is:', options: ['GPS spoofing and hijacking','Battery replacement','Camera resolution','WiFi speed'], correctAnswer: 0, explanation: 'Spoofed GPS signals can redirect drones.', points: 350 },
    { id: 'q2', question: 'Drone command and control links require:', options: ['Encryption & authentication','Plain text protocols','No security','Default keys'], correctAnswer: 0, explanation: 'Encrypted comms protect drones from takeover.', points: 350 },
    { id: 'q3', question: 'Why are drones part of CPS security?', options: ['They combine physical and digital systems','They only fly','They are just toys','They have no risk'], correctAnswer: 0, explanation: 'They are cyber-physical systems vulnerable to attacks.', points: 350 },
    { id: 'q4', question: 'Mitigation against GNSS jamming includes:', options: ['Multi-sensor fusion','Disabling GPS','More batteries','Public networks'], correctAnswer: 0, explanation: 'Fusion of sensors reduces reliance on GPS only.', points: 350 },
    { id: 'q5', question: 'A drone swarm attack risk is:', options: ['Coordinated denial of service','Battery life','Camera blur','Faster speed'], correctAnswer: 0, explanation: 'Swarm drones can overwhelm defenses.', points: 400 }
  ],
  maxScore: 1900
},
{
  id: 'neuro-cybersecurity',
  title: 'NEURO-CYBERSECURITY',
  description: 'Defend brain-computer interfaces (BCIs) and neurotechnology from cyber exploitation.',
  difficulty: 'ELITE',
  category: 'EMERGING TECH',
  isLocked: false,
  requiredLevel: 18,
  videoUrl: 'https://www.youtube.com/embed/QdF7P7pWg5E',
  articleLinks: [
    { title: 'Brain-Computer Interface Security', url: 'https://arxiv.org/abs/1901.00000' },
    { title: 'Neurotechnology Ethics', url: 'https://royalsociety.org/topics-policy/projects/human-brain/' },
    { title: 'Privacy Risks in Neural Data', url: 'https://www.nature.com/articles/d41586-019-00000' },
    { title: 'Cognitive Hacking Threats', url: 'https://www.sciencedirect.com/science/article/pii/S1389128619300000' }
  ],
  quiz: [
    { id: 'q1', question: 'A core risk in BCIs is:', options: ['Malware injection into neural interfaces','Battery drain','Display issues','WiFi only'], correctAnswer: 0, explanation: 'BCIs can be manipulated at software and signal level.', points: 350 },
    { id: 'q2', question: 'Neural data leakage poses:', options: ['Privacy invasion & profiling risks','No issue','Faster training','More storage'], correctAnswer: 0, explanation: 'Brain signals can reveal intent or health data.', points: 350 },
    { id: 'q3', question: 'Neuro-hacking refers to:', options: ['Manipulating neural interfaces','Improving cognition','Memory training','Faster learning'], correctAnswer: 0, explanation: 'It’s the malicious manipulation of brain-machine systems.', points: 350 },
    { id: 'q4', question: 'Ethical concerns in neuro-cybersecurity include:', options: ['Cognitive liberty and consent','Better UI','Cheaper devices','Faster speeds'], correctAnswer: 0, explanation: 'Ensuring mental autonomy and informed consent is crucial.', points: 350 },
    { id: 'q5', question: 'Which is a potential defense for BCIs?', options: ['Encryption of neural signals','Default passwords','Disabling sensors','Removing EEG'], correctAnswer: 0, explanation: 'Encryption protects sensitive neural patterns.', points: 400 }
  ],
  maxScore: 1900
},
{
  id: 'cyber-physical-systems',
  title: 'CYBER-PHYSICAL SYSTEMS SECURITY',
  description: 'Safeguard autonomous vehicles, robotics, and smart infrastructure from cyber-physical threats.',
  difficulty: 'ELITE',
  category: 'CRITICAL INFRASTRUCTURE',
  isLocked: false,
  requiredLevel: 17,
  videoUrl: 'https://www.youtube.com/embed/4Q5sKkS2e5E',
  articleLinks: [
    { title: 'Cyber-Physical Systems Overview', url: 'https://www.nist.gov/el/cyber-physical-systems' },
    { title: 'Autonomous Vehicle Threats', url: 'https://arxiv.org/abs/1707.00000' },
    { title: 'Industrial IoT Security', url: 'https://www.enisa.europa.eu/topics/csirt-cert-services/cyber-physical' },
    { title: 'Smart Cities Cyber Risks', url: 'https://www.worldbank.org/en/topic/digitaldevelopment/publication/smart-cities' }
  ],
  quiz: [
    { id: 'q1', question: 'CPS refers to integration of:', options: ['Only software','Computational and physical processes','Cloud and blockchain','Social media'], correctAnswer: 1, explanation: 'CPS merges physical devices with cyber control.', points: 350 },
    { id: 'q2', question: 'An attack on an autonomous vehicle’s LiDAR is:', options: ['Replay attack','Sensor spoofing','Ransomware','DoS'], correctAnswer: 1, explanation: 'LiDAR spoofing confuses navigation systems.', points: 350 },
    { id: 'q3', question: 'Why is CPS more vulnerable than IT systems?', options: ['Larger storage','Real-time constraints & safety impact','Stronger firewalls','More passwords'], correctAnswer: 1, explanation: 'Safety-critical systems can’t tolerate downtime.', points: 350 },
    { id: 'q4', question: 'Smart grid attacks often target:', options: ['Billing apps','SCADA systems and meters','Mobile phones','Satellites'], correctAnswer: 1, explanation: 'They manipulate demand, supply, and control signals.', points: 350 },
    { id: 'q5', question: 'Key CPS defense is:', options: ['Resilience engineering','Unpatched firmware','Default passwords','Ignoring updates'], correctAnswer: 0, explanation: 'Resilience ensures recovery under attack.', points: 400 }
  ],
  maxScore: 1900
}
];
