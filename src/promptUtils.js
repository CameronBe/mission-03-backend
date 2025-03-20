export const generateBasePrompt = (jobTitle, messageHistory) => {
  if (typeof jobTitle == "boolean") {
    return {
      error: `The provided input jobTitle ${jobTitle} is a boolean, but should be a string.`,
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

  if (!Array.isArray(messageHistory) || messageHistory.length === 0) {
    return {
      error: `The provided input messageHistory is invalid, but should be a non-empty array.`,
    };
  }

  return `You are an AI interviewer for a ${jobTitle} position.
          You should also make the candidate laugh.
          The candidate's previous responses are:
          ${messageHistory
            .map((m) => `${m.role}: ${m.parts[0].text}`)
            .join("\n")}`;
};

export const generateEvaluationPrompt = (basePrompt) => {
  if (typeof basePrompt == "boolean") {
    return {
      error: `The provided input basePrompt ${basePrompt} is a boolean, but should be a string.`,
    };
  }

  if (typeof basePrompt == "number") {
    return {
      error: `The provided input basePrompt ${basePrompt} is a number, but should be a string.`,
    };
  }

  if (!basePrompt || typeof basePrompt !== "string") {
    return {
      error: `The provided input basePrompt is invalid, but should be a non-empty string.`,
    };
  }

  return `${basePrompt}
          Based on the candidate's responses in the interview, provide a detailed evaluation of their performance.
          Include specific strengths, areas for improvement, and actionable suggestions.
          Be professional but constructive in your feedback.
          **Provide a summary of how well you think the user did in the interview.**`;
};

export const generateQuestionPrompt = (basePrompt, userMessage) => {
  if (typeof basePrompt == "boolean") {
    return {
      error: `The provided input basePrompt ${basePrompt} is a boolean, but should be a string.`,
    };
  }

  if (typeof userMessage == "boolean") {
    return {
      error: `The provided input userMessage ${userMessage} is a boolean, but should be a string.`,
    };
  }

  if (typeof basePrompt == "number") {
    return {
      error: `The provided input basePrompt ${basePrompt} is a number, but should be a string.`,
    };
  }

  if (typeof userMessage == "number") {
    return {
      error: `The provided input userMessage ${userMessage} is a number, but should be a string.`,
    };
  }

  if (!basePrompt || typeof basePrompt !== "string") {
    return {
      error: `The provided input basePrompt is invalid, but should be a non-empty string.`,
    };
  }

  if (!userMessage || typeof userMessage !== "string") {
    return {
      error: `The provided input userMessage is invalid, but should be a non-empty string.`,
    };
  }

  return `${basePrompt}
          The candidate just said: "${userMessage}".
          What is your next question for the candidate?
          Keep the question concise and relevant to the conversation.
          Do not repeat previous questions.
          Do not provide canned scenarios or pre-defined questions.`;
};
