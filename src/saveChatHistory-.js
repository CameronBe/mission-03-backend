
date +%Y%m%d_%H%M%S


/**
 * Generates the prompt for the AI based on interview context
 * @param {string} jobTitle - The position being interviewed for
 * @param {string} userMessage - The latest message from the candidate
 * @param {Array} messageHistory - Previous conversation history
 */
const saveChatHistory = (jobTitle, userMessage, messageHistory) => {

  const questionCount = messageHistory.filter(
    (messageHistoryItem) => messageHistoryItem.role === "model"
  ).length;
  
  
  if (questionCount >= 6) {
    return generateEvaluationPrompt(basePrompt);
  }

  return generateQuestionPrompt(basePrompt, userMessage);
};

module.exports = generatePrompt;
