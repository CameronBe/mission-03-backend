const {
  generateBasePrompt,
  generateEvaluationPrompt,
  generateQuestionPrompt,
} = require("./promptUtils");

/**
 * Generates the prompt for the AI based on interview context
 * @param {string} jobTitle - The position being interviewed for
 * @param {string} userMessage - The latest message from the candidate
 * @param {Array} messageHistory - Previous conversation history
 */
const generatePrompt = (jobTitle, userMessage, messageHistory) => {
  if (typeof jobTitle == "boolean") {
    return {
      error: `The provided input jobTitle ${jobTitle} is a boolean, but should be a string.`,
    };
  }

  if (typeof userMessage == "boolean") {
    return {
      error: `The provided input userMessage ${userMessage} is a boolean, but should be a string.`,
    };
  }

  if (typeof messageHistory == "boolean") {
    return {
      error: `The provided input messageHistory ${messageHistory} is a boolean, but should be an array.`,
    };
  }

  if (typeof jobTitle == "number") {
    return {
      error: `The provided input jobTitle ${jobTitle} is a number, but should be a string.`,
    };
  }

  if (typeof userMessage == "number") {
    return {
      error: `The provided input userMessage ${userMessage} is a number, but should be a string.`,
    };
  }

  if (typeof messageHistory == "number") {
    return {
      error: `The provided input messageHistory ${messageHistory} is a number, but should be an array.`,
    };
  }

  if (!jobTitle || typeof jobTitle !== "string") {
    return {
      error: `The provided input jobTitle is invalid, but should be a non-empty string.`,
    };
  }

  if (!userMessage || typeof userMessage !== "string") {
    return {
      error: `The provided input userMessage is invalid, but should be a non-empty string.`,
    };
  }

  if (!Array.isArray(messageHistory) || messageHistory.length === 0) {
    return {
      error: `The provided input messageHistory is invalid, but should be a non-empty array.`,
    };
  }

  const questionCount = messageHistory.filter(
    (messageHistoryItem) => messageHistoryItem.role === "model"
  ).length;

  const basePrompt = generateBasePrompt(jobTitle, messageHistory);

  if (questionCount >= 6) {
    return generateEvaluationPrompt(basePrompt);
  }

  return generateQuestionPrompt(basePrompt, userMessage);
};

module.exports = generatePrompt;
