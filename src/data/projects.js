export const projects = [
  {
    id: "it-samachaar",
    title: "IT Samachaar",
    tags: ["Python", "MongoDB Vector Search", "Gemini LLM", "RAG"],
    description: "An Intelligent, Context-Augmented News Curation Agent.",
    insight: "Architected a RAG pipeline using Gemini LLM and MongoDB Atlas Vector Search. The system automatically scrapes, classifies (SVM/TF-IDF), and summarizes technical news to eliminate information overload.",
    challenges: "Handling rate limits during multi-source scraping and optimizing vector embeddings for precise context retrieval.",
    link: "https://github.com/yourlink",
  },
  {
    id: "samwad-ai",
    title: "SAMWAD AI",
    tags: ["Flask", "Python", "NLP", "Sentiment Analysis"],
    description: "AI-driven communication skill improver website.",
    insight: "Developed a web application that provides real-time AI-driven corrections for grammar, spelling, and sentiment. It helps users refine their professional communication through instant feedback loops.",
    challenges: "Building a responsive Flask backend that could process NLP tasks without causing UI lag in the text editor.",
    link: "https://github.com/yourlink",
  },
  {
    id: "student-prediction",
    title: "Student Prediction",
    tags: ["Machine Learning", "Classification", "Scikit-Learn"],
    description: "Analyzing outcomes for 5,000+ student records.",
    insight: "Implemented various classification algorithms to predict student performance. Conducted extensive data cleaning and feature engineering to identify the most impactful predictors of success.",
    challenges: "Handling class imbalance in the dataset and selecting the most relevant features to prevent model overfitting.",
    link: "https://github.com/yourlink",
  }
];