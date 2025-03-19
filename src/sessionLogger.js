/**
 * Generates timestamp like 20250306_110627 for use as session ID 
 * @param {string} jobTitle - The position being interviewed for
 * @param {string} userMessage - The latest message from the candidate
 * @param {Array} messageHistory - Previous conversation history
 */
const sessionLogger = (jobTitle, userMessage, messageHistory) => {

  const questionCount = messageHistory.filter(
    (messageHistoryItem) => messageHistoryItem.role === "model"
  ).length;
  
  
  if (questionCount >= 6) {
    return generateEvaluationPrompt(basePrompt);
  }

  return generateQuestionPrompt(basePrompt, userMessage);
};

module.exports = sessionLogger;

