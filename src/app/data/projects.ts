export interface PortfolioProject {
  id: string;
  title: string;
  tags: string[];
  description: string;
  insight: string;
  challenges: string;
  repoUrl: string;
  liveDemoUrl?: string;
}

export const projects: PortfolioProject[] = [
  {
  id: 'contact-manager',
  title: 'Contact Manager',
  tags: ['Node.js', 'Express', 'MongoDB', 'React', 'JWT', 'REST APIs'],
  description: 'A full-stack contact management application with authentication and user-specific data handling.',
  insight:
    'Built a secure system with JWT-based authentication and multi-user data isolation, allowing users to manage their own contacts with CRUD operations and search functionality.',
  challenges:
    'Implementing secure authentication, handling user-specific data isolation, and ensuring validation with duplicate prevention.',
  repoUrl: 'https://github.com/priyanildz/Contact-Book.git',
  liveDemoUrl: 'https://contact-book-six.vercel.app'
},
  {
    id: 'it-samachaar',
    title: 'IT Samachaar',
    tags: ['Python', 'MongoDB Atlas', 'Gemini LLM', 'RAG', 'Scikit-learn'],
    description: 'An intelligent, context-aware news curation platform.',
    insight:
      'Built a RAG-based pipeline using Gemini LLM and MongoDB Atlas Vector Search to scrape, classify (SVM/TF-IDF), and summarize technical news, reducing information overload.',
    challenges:
      'Handling multi-source scraping reliability and improving relevance of retrieved content using vector embeddings.',
    repoUrl: 'https://github.com/priyanildz/IT-News-Aggregator-IT_Samachaar.git'
  },

  {
  id: 'weather-app',
  title: 'Weather App',
  tags: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
  description: 'A web application that provides real-time weather information based on user input.',
  insight:
    'Integrated external weather APIs to fetch and display real-time data, implementing dynamic UI updates based on user search and API responses.',
  challenges:
    'Handling asynchronous API calls, managing errors for invalid locations, and ensuring smooth user experience with dynamic data rendering.',
  repoUrl: 'https://github.com/priyanildz/Weather_app.git'
},

  {
    id: 'leetcode-clone',
    title: 'LeetCode Clone',
    tags: ['Node.js', 'MongoDB', 'Angular', 'REST APIs'],
    description: 'A coding platform for practicing and submitting problems.',
    insight:
      'Developed a system to manage coding problems, user submissions, and evaluation flow, replicating core features of modern coding platforms.',
    challenges:
      'Designing scalable schema for problems and handling efficient submission processing.',
    repoUrl: 'https://github.com/priyanildz/leetcode-clone.git',
    liveDemoUrl: 'https://priyanildz.github.io/leetcode-clone/'
  },

  {
    id: 'school-management-system',
    title: 'School Management System',
    tags: ['Node.js', 'MongoDB Atlas', 'Flutter', 'Vercel', '(Built during internship at SSPD Technology Solutions)'],
    description: 'A full-stack admin and teacher management platform.',
    insight:
      'Built a complete system with admin dashboard and teacher mobile app, handling data management, authentication, and API integration.',
    challenges:
      'Coordinating backend APIs with mobile app and maintaining consistent data flow across platforms.',
    repoUrl: '',
  },

  {
    id: 'inventory-management-system',
    title: 'Inventory Management System',
    tags: ['Node.js', 'MongoDB', 'Express', 'Vercel',  '(Built during internship at SSPD Technology Solutions)'],
    description: 'A system to manage stock, updates, and tracking.',
    insight:
      'Developed backend logic for handling inventory operations including stock updates, tracking, and data storage with efficient APIs.',
    challenges:
      'Ensuring real-time consistency of stock data and handling edge cases in updates.',
    repoUrl: 'https://github.com/priyanildz'
  },

  {
    id: 'court-data-fetcher',
    title: 'Court Data Fetcher Dashboard',
    tags: ['Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    description: 'A dashboard for fetching and displaying structured court data.',
    insight:
      'Built backend APIs to fetch and process legal data, presenting it through a clean dashboard interface for easy access.',
    challenges:
      'Structuring unorganized data and ensuring efficient retrieval and display.',
    repoUrl: 'https://github.com/priyanildz/Court-Data-Fetcher-Mini-Dashboard.git'
  },

  {
    id: 'task-manager',
    title: 'Task Manager',
    tags: ['JavaScript', 'HTML', 'CSS', 'Local Storage'],
    description: 'A task tracking web application with interactive UI.',
    insight:
      'Implemented task creation, drag-and-drop functionality, and persistent storage using local storage for better usability.',
    challenges:
      'Managing drag-and-drop interactions and maintaining task state across sessions.',
    repoUrl: 'https://github.com/priyanildz/Task-Manager.git',
    liveDemoUrl: 'https://priyanildz.github.io/Task-Manager/'
  },

  {
    id: 'textrefine-ai',
    title: 'TextRefine AI',
    tags: ['Python', 'Flask', 'NLP'],
    description: 'An AI-based text refinement and correction tool.',
    insight:
      'Developed a system to improve text quality by correcting grammar, spelling, and tone using NLP techniques.',
    challenges:
      'Balancing accuracy and performance in text processing and handling varied user inputs.',
    repoUrl: 'https://github.com/priyanildz/Textrefine-AI.git'
  },

  {
    id: 'ai-healthcare-assistant',
    title: 'AI Healthcare Assistant',
    tags: ['Python', 'Flask', 'NLP'],
    description: 'A chatbot providing basic healthcare suggestions.',
    insight:
      'Built a conversational assistant that processes user input and provides health-related suggestions using NLP.',
    challenges:
      'Handling ambiguous user queries and ensuring meaningful responses.',
    repoUrl: 'https://github.com/priyanildz/AI-Healthcare-Assistant.git',
    liveDemoUrl: 'https://ai-healthcare-assistant-kokj.vercel.app/'
  },

  {
    id: 'student-performance-prediction',
    title: 'Student Performance Prediction',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    description: 'A machine learning model to predict student outcomes.',
    insight:
      'Performed data preprocessing, visualization, and model training to predict student performance based on academic features.',
    challenges:
      'Handling missing data and selecting the most effective model for better accuracy.',
    repoUrl: 'https://github.com/priyanildz/Student-Performance-Prediction.git'
  },

  {
    id: 'snake-game',
    title: 'Snake Game',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: 'A browser-based implementation of the classic Snake game.',
    insight:
      'Developed game logic, collision detection, and score tracking to recreate an interactive gaming experience.',
    challenges:
      'Implementing smooth controls and accurate collision handling.',
    repoUrl: 'https://github.com/priyanildz/Snake-Game.git'
  },

  {
    id: 'world-clock',
    title: 'World Clock',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description: 'A web app to display time across different time zones.',
    insight:
      'Built a dynamic interface to fetch and display real-time data for multiple locations globally.',
    challenges:
      'Handling time zone differences and ensuring accurate real-time updates.',
    repoUrl: 'https://github.com/priyanildz/World-Clock.git',
    liveDemoUrl: 'https://priyanildz.github.io/World-Clock/'
  }
];
