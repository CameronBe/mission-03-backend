const { generateQuestionPrompt } = require("../promptUtils");

describe("generateQuestionPromptTest (invalid number input)", () => {
  test.each([0, -1, 42, 100, 999])(
    "Should return an error object if the provided input basePrompt is a number (%s)",
    (basePrompt) => {
      const actualOutput = generateQuestionPrompt(basePrompt, "userMessage");

      const expectedOutput = {
        error: `The provided input basePrompt ${basePrompt} is a number, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );

  test.each([0, -1, 42, 100, 999])(
    "Should return an error object if the provided input userMessage is a number (%s)",
    (userMessage) => {
      const actualOutput = generateQuestionPrompt("basePrompt", userMessage);

      const expectedOutput = {
        error: `The provided input userMessage ${userMessage} is a number, but should be a string.`,
      };

      expect(actualOutput).toEqual(expectedOutput);
    }
  );
});
